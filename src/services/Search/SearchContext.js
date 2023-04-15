import React, { useState, createContext } from "react";

import {
  getMediaByGenreRequest,
  searchRequest,
  transformResponse,
} from "./SearchService";
export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchresult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const getMediaByGenre = async (query, mediaType = "", genreId = "") => {
    setIsLoading(true);
    try {
      let response;
      if (query) {
        response = await searchRequest(query, currentPage);
      } else {
        response = await getMediaByGenreRequest(
          mediaType,
          genreId,
          currentPage
        );
      }
      const finalResponse = await transformResponse(response, mediaType);
      const { page, results, totalPages } = finalResponse;
      setCurrentPage(page);
      setIsLoading(false);
      setTotalPage(totalPages);
      setSearchResult(results);
    } catch (ex) {
      setIsLoading(false);
      setError(ex);
    }
  };

  const loadMore = async (mediaType, genreId) => {
    if (currentPage + 1 <= totalPage) {
      setIsLoadingNextPage(true);
      try {
        const response = await getMediaByGenreRequest(
          mediaType,
          genreId,
          currentPage + 1
        );
        const finalResponse = await transformResponse(response);
        const { page, results } = finalResponse;
        setCurrentPage(page);
        setIsLoadingNextPage(false);
        setSearchResult([...searchresult, ...results]);
      } catch (ex) {
        setIsLoadingNextPage(false);
        setError(ex);
      }
    }
  };

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        isLoadingNextPage,
        getMediaByGenre,
        loadMore,
        error,
        searchresult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
