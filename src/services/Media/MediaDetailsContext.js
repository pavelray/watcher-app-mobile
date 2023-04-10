import React, { useState, createContext } from "react";

import {
  getMediaDetailsRequest,
  transformMediaDetailsResponse,
} from "./MediaDetailsService";
export const MediaDetailsContext = createContext();

export const MediaDetailsContextProvider = ({ children }) => {
  const [mediaDetails, setMediaDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMediaDetails = async (mediaType, id) => {
    setIsLoading(true);
    try {
      const response = await getMediaDetailsRequest(mediaType, id);
      const finalResponse = await transformMediaDetailsResponse(
        response,
        mediaType
      );
      setMediaDetails(finalResponse);
      setIsLoading(false);
    } catch (ex) {
      setIsLoading(false);
      setError(ex);
    }
  };

  return (
    <MediaDetailsContext.Provider
      value={{
        isLoading,
        getMediaDetails,
        error,
        mediaDetails,
      }}
    >
      {children}
    </MediaDetailsContext.Provider>
  );
};
