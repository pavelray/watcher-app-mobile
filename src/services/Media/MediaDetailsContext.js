import React, { useState, createContext } from "react";

import {
  getMediaDetailsRequest,
  transformMediaDetailsResponse,
} from "./MediaDetailsService";
import { MEDIA_TYPE } from "../../utils/constants";
export const MediaDetailsContext = createContext();

export const MediaDetailsContextProvider = ({ children }) => {
  const [mediaDetails, setMediaDetails] = useState({});
  const [bioDetails, setBioDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const SET_MEDIA_DETAILS = {
    [MEDIA_TYPE.PERSON]: setBioDetails,
    [MEDIA_TYPE.MOVIE]: setMediaDetails,
    [MEDIA_TYPE.TV_SERIES]: setMediaDetails,
  };

  const getMediaDetails = async (mediaType, id) => {
    setIsLoading(true);
    try {
      const response = await getMediaDetailsRequest(mediaType, id);
      const finalResponse = await transformMediaDetailsResponse(
        response,
        mediaType
      );
      SET_MEDIA_DETAILS[mediaType](finalResponse);
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
        bioDetails,
      }}
    >
      {children}
    </MediaDetailsContext.Provider>
  );
};
