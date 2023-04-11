import React, { useContext, useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { MediaDetailsContext } from "../../services/Media/MediaDetailsContext";
import Loader from "../../components/UI/Loader/Loader";
import ProfileListCard from "../../components/UI/ListCard/ProfileListCard";

const Profile = ({ route, navigation }) => {
  const { id, type } = route.params;

  const navigateToPage = (genreId, mediaType) => {
    navigation.navigate("Search Result", {
      genreId: genreId,
      mediaType: type,
    });
  };

  const { getMediaDetails, mediaDetails, isLoading } =
    useContext(MediaDetailsContext);

  useEffect(() => {
    getMediaDetails(type, id);
  }, [id]);
  return (
    <Wrapper>
      {isLoading && <Loader />}
      {!isLoading && (
        <ProfileListCard bio={mediaDetails} navigateToPage={navigateToPage} />
      )}
    </Wrapper>
  );
};

export default Profile;
