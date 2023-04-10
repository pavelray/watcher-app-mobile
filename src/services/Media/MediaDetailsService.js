import camelize from "camelize";
import { getMediaDetailsDataAPIUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";
import { MEDIA_TYPE, appendToReq } from "../../utils/constants";

export const getMediaDetailsRequest = async (mediaType, id) => {
  const apiUrl = `${getMediaDetailsDataAPIUrl(mediaType, id)}${appendToReq}`;
  const response = await httpService.get(apiUrl);
  return response;
};

export const transformMediaDetailsResponse = async (
  mediaResponse,
  mediaType
) => {
  const formattedResponse = await camelize(mediaResponse);
  const formattedResult =
    mediaType === MEDIA_TYPE.TV_SERIES
      ? {
          ...formattedResponse,
          title: formattedResponse.name,
          releaseDate: formattedResponse.firstAirDate,
          castPreview: formattedResponse.credits.cast.slice(0, 5),
          runtime: `${formattedResponse.numberOfSeasons} Seasons`,
        }
      : {
          ...formattedResponse,
          castPreview: formattedResponse.credits.cast.slice(0, 5),
          runtime: `${formattedResponse.runtime} m`,
        };
  console.log(formattedResult);
  return formattedResult;
};
