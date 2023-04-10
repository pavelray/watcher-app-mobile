import React, { useEffect, useState } from "react";
import { CastPreviewContainer, ViewAllContainer } from "./CastPreview.style";
import { Avatar, Button } from "react-native-paper";
import {
  API_IMAGE_URL,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import { Text } from "../../UI/Typography/Text";

function CastPreview({ cast, navigation, allCredits }) {
  const navigateToPage = () => {
    navigation.navigate("Cast", {
      allCredits: allCredits,
    });
  };

  return (
    <CastPreviewContainer>
      {!!cast.length && (
        <>
          {cast.map((c) => {
            const avatarImg =
              c.profilePath && c.profilePath !== null
                ? `${API_IMAGE_URL}/w154/${c.profilePath}`
                : NO_IMG_PLACEHOLDER_USER;
            return (
              <Avatar.Image key={c.id} size={50} source={{ uri: avatarImg }} />
            );
          })}
          <ViewAllContainer>
            <Button onPress={() => navigateToPage()}>
              <Text variant="caption">View All</Text>
            </Button>
          </ViewAllContainer>
        </>
      )}
    </CastPreviewContainer>
  );
}

export default CastPreview;
