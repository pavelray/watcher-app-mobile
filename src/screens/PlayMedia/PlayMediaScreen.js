import React from "react";
import SafeArea from "../../components/UI/SafeArea/SafeArea";
import MediaPlayer from "../../components/UI/MediaPlayer/MediaPlayer";
import { Text } from "../../components/UI/Typography/Text";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import { MediaPlayerContainer, MediaPlayerWrapper } from "./PlayMediaScreen.style";

const PlayMediaScreen = ({ route }) => {
  const { videoUrl, title } = route.params;
  return (
    <SafeArea>
    <MediaPlayerWrapper>
      <Text>{title}</Text>
      <Spacer position="bottom" size="large" />
      <MediaPlayerContainer>
        <MediaPlayer videoUrl={videoUrl} />
      </MediaPlayerContainer>
      </MediaPlayerWrapper>
    </SafeArea>
  );
};

export default PlayMediaScreen;
