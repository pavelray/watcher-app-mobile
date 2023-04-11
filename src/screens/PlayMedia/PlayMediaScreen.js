import React from "react";
import MediaPlayer from "../../components/UI/MediaPlayer/MediaPlayer";
import { Text } from "../../components/UI/Typography/Text";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import { MediaPlayerContainer, MediaPlayerWrapper } from "./PlayMediaScreen.style";
import { View } from "react-native";

const PlayMediaScreen = ({ route }) => {
  const { videoUrl, title } = route.params;
  return (
    <View>
    <MediaPlayerWrapper>
      <Text>{title}</Text>
      <Spacer position="bottom" size="large" />
      <MediaPlayerContainer>
        <MediaPlayer videoUrl={videoUrl} />
      </MediaPlayerContainer>
      </MediaPlayerWrapper>
    </View>
  );
};

export default PlayMediaScreen;
