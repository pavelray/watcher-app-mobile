import camelize from "camelize";
import { getMediaDetailsDataAPIUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";
import { MEDIA_TYPE, appendToReq } from "../../utils/constants";
import { getAge } from "../../utils/helperMethods";

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
  let formattedResult;
  switch (mediaType) {
    case MEDIA_TYPE.TV_SERIES: {
      formattedResult = {
        ...formattedResponse,
        title: formattedResponse.name,
        releaseDate: formattedResponse.firstAirDate,
        castPreview: formattedResponse.credits.cast.slice(0, 5),
        runtime: `${formattedResponse.numberOfSeasons} Seasons`,
      };
      break;
    }
    case MEDIA_TYPE.PERSON: {
      formattedResult = {
        ...formattedResponse,
        title: formattedResponse.name,
        releaseDate: formattedResponse.birthday,
        age: getAge(formattedResponse.birthday),
      };
      break;
    }
    default: {
      formattedResult = {
        ...formattedResponse,
        castPreview: formattedResponse.credits.cast.slice(0, 5),
        runtime: `${formattedResponse.runtime} m`,
      };
      break;
    }
  }

  return formattedResult;
};

export const transformProfileDetailsResponse = async (mediaResponse) => {
  const formattedResponse = await camelize(mediaResponse);
  const formattedResult = { ...formattedResponse };
  return formattedResult;
};
