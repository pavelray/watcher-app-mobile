import React from "react";
import { CastPreviewContainer, ViewAllContainer } from "./CastPreview.style";
import { Avatar, Button } from "react-native-paper";
import {
  API_IMAGE_URL,
  MEDIA_TYPE,
  NO_IMG_PLACEHOLDER_USER,
} from "../../../utils/constants";
import { Text } from "../../UI/Typography/Text";
import { TouchableOpacity } from "react-native";

function CastPreview({ cast, navigation, allCredits }) {
  const navigateToPage = () => {
    navigation.navigate("Cast And Crew", {
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
              <TouchableOpacity
                key={c.id}
                onPress={() =>
                  navigation.navigate("Bio", {
                    id: c.id,
                    type: MEDIA_TYPE.PERSON
                  })
                }
              >
                <Avatar.Image size={50} source={{ uri: avatarImg }} />
              </TouchableOpacity>
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
