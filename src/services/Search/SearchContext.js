import React, { useState, createContext } from "react";

import { getMediaByGenreRequest, transformResponse } from "./SearchService";
export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMediaByGenre = async (mediaType, genreId) => {
    setIsLoading(true);
    try {
      const response = await getMediaByGenreRequest(mediaType, genreId, 1);
      const finalResponse = await transformResponse(response);
      setIsLoading(false);
      setResult(finalResponse);
    } catch (ex) {
      setIsLoading(false);
      setError(ex);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        error,
        getMediaByGenre,
        result,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
