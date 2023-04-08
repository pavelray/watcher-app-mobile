import React from "react";
import SafeArea from "../../components/UI/SafeArea/SafeArea";
import MediaPlayer from "../../components/UI/MediaPlayer/MediaPlayer";
import { Text } from "../../components/UI/Typography/Text";
import { Spacer } from "../../components/UI/Spacer/Spacer";

const PlayMediaScreen = ({ route }) => {
  const { videoUrl, title } = route.params;
  return (
    <SafeArea>
      <Text>{title}</Text>
      <Spacer position="bottom" size="large" />
      <MediaPlayer videoUrl={videoUrl} />
    </SafeArea>
  );
};

export default PlayMediaScreen;
