import React, { useContext, useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { MediaDetailsContext } from "../../services/Media/MediaDetailsContext";
import Loader from "../../components/UI/Loader/Loader";
import ProfileListCard from "../../components/UI/ListCard/ProfileListCard";
import { ProfileListContainer } from "./Profile.style";
import { ScrollView } from "react-native";

const Profile = ({ route, navigation }) => {
  const { id, type } = route.params;

  const navigateToPage = (genreId, mediaType) => {
    navigation.navigate("Search Result", {
      genreId: genreId,
      mediaType: type,
    });
  };

  const { getMediaDetails, bioDetails, isLoading } =
    useContext(MediaDetailsContext);

  useEffect(() => {
    getMediaDetails(type, id);
  }, [id]);
  return (
    <Wrapper>
      {isLoading && <Loader />}
      {!isLoading && (
        <ProfileListContainer>
          <ScrollView>
            <ProfileListCard bio={bioDetails} navigateToPage={navigateToPage} />
          </ScrollView>
        </ProfileListContainer>
      )}
    </Wrapper>
  );
};

export default Profile;
