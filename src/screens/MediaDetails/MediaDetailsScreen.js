import React from "react";
import SafeArea from "../../components/UI/SafeArea/SafeArea";
import { Text } from "../../components/UI/Typography/Text";
import { Button, Card } from "react-native-paper";
import { API_IMAGE_URL } from "../../utils/constants";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import { MediaCard, MediaCardCover } from "./MediaDetailsScreen.style";
import { ImageBackground } from "react-native";

const MediaDetailsScreen = ({ route, navigation }) => {
  const { media } = route.params;
  return (
    <SafeArea>
      <MediaCard mode="contained">
        <ImageBackground
          source={{
            uri: `${API_IMAGE_URL}/original${media.backdropPath}`,
          }}
          resizeMode="cover"
        >
          <MediaCardCover />
        </ImageBackground>
        <Card.Content>
          <Spacer position="bottom" size="large" />
          <Text variant="title">{media.title}</Text>
          <Spacer position="bottom" size="medium" />
          <Text variant="caption">{media.overview}</Text>
          <Button
            icon="video"
            mode="contained"
            onPress={() =>
              navigation.navigate("VideoPlayer", {
                videoUrl: `https://www.2embed.to/embed/tmdb/movie?id=${media.id}`,
                title: media.title
              })
            }
          >
            Watch Now
          </Button>
        </Card.Content>
      </MediaCard>

      <Spacer position="bottom" size="medium" />
    </SafeArea>
  );
};

export default MediaDetailsScreen;
