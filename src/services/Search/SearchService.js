import camelize from "camelize";
import { MEDIA_TYPE } from "../../utils/constants";
import { getMovieByGenreUrl, getSearchUrl, getTvByGenreUrl } from "../../utils/apiUtills";
import httpService from "../../utils/httpService";

export const searchRequest = async (searchTerm, currentPage) => {
  const apiUrl = getSearchUrl(searchTerm, currentPage);
  console.log(apiUrl);
  const response = await httpService.get(apiUrl);
  return response;
};

export const getMediaByGenreRequest = async (mediaType, genreId, page = 1) => {
  const apiUrl =
    mediaType === MEDIA_TYPE.MOVIE
      ? getMovieByGenreUrl(mediaType, page, genreId)
      : getTvByGenreUrl(mediaType, page, genreId);

  const response = await httpService.get(apiUrl);
  return response;
};

export const transformResponse = async (mediaResponse, mediaType) => {
  const formattedResponse = await camelize(mediaResponse);
  const { results } = formattedResponse;
  const formattedResult = results.map((r) => {
    if (mediaType === MEDIA_TYPE.TV_SERIES) {
      return { ...r, title: r.name, releaseDate: r.firstAirDate };
    }
    return r;
  });
  return { ...formattedResponse, results: formattedResult };
};
