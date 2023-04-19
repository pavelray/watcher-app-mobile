import React, { useContext, useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { MediaDetailsContext } from "../../services/Media/MediaDetailsContext";
import Loader from "../../components/UI/Loader/Loader";
import ProfileListCard from "../../components/UI/ListCard/ProfileListCard";
import { ProfileListContainer } from "./Profile.style";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { DescriptionWrapper } from "../../components/UI/ListCard/ListCard.style";
import { Text } from "../../components/UI/Typography/Text";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import ListCard from "../../components/UI/ListCard/ListCard";
import Gallery from "../../components/UI/Gallery/Gallery";

const Profile = ({ route, navigation }) => {
  const { id, type } = route.params;

  const navigateToPage = (genreId) => {
    navigation.navigate("Search Result", {
      genreId: genreId,
      mediaType: type,
    });
  };

  const { getMediaDetails, bioDetails, isLoading } =
    useContext(MediaDetailsContext);

  const { combinedCredits } = bioDetails;
  const { cast = [] } = combinedCredits || {};

  useEffect(() => {
    getMediaDetails(type, id);
  }, [id]);

  const onPress = (item) => {
    navigation.navigate("Details", {
      id: item.id,
      type: item.mediaType,
    });
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {!isLoading && (
        <ProfileListContainer>
          <ScrollView>
            <ProfileListCard bio={bioDetails} navigateToPage={navigateToPage} />
            <Spacer position="bottom" size="large" />
            <Text variant="title">Biography</Text>
            <Spacer position="bottom" size="small" />
            <DescriptionWrapper>
              <Text variant="hint">{bioDetails.biography}</Text>
            </DescriptionWrapper>
            <Spacer position="bottom" size="large" />
            <Text variant="title">Filmography</Text>
            <Spacer position="bottom" size="small" />
            {combinedCredits && <Gallery onPress={onPress} data={cast} />}
          </ScrollView>
        </ProfileListContainer>
      )}
    </Wrapper>
  );
};

export default Profile;
