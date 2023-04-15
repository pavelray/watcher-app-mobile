import React from "react";
import {
  DescriptionWrapper,
  ListCardContainer,
  ListCardContentWrapper,
} from "./ListCard.style";
import { Image, Text as NativeText } from "react-native";
import { API_IMAGE_URL } from "../../../utils/constants";
import { Text } from "../Typography/Text";
import { Spacer } from "../Spacer/Spacer";

const ProfileListCard = ({ bio }) => {
  const {
    name,
    biography,
    birthday,
    deathday,
    knownForDepartment,
    placeOfBirth,
    profilePath,
  } = bio;
  return (
    <ListCardContainer>
      <Image
        source={{
          uri: `${API_IMAGE_URL}/w200${profilePath}`,
        }}
        style={{ width: 100, height: 150, resizeMode: "contain" }}
      />
      <ListCardContentWrapper>
        <Text>{name}</Text>
        <Spacer position="top" size="medium" />
        <DescriptionWrapper>
          <NativeText>{biography}</NativeText>
        </DescriptionWrapper>
        <Spacer position="top" size="medium" />
        <Text variant="hint">
          {new Date(birthday).toDateString().split(" ").slice(1, 4).join(" ")}
        </Text>
        <Spacer position="top" size="small" />
        <Text variant="hint">{knownForDepartment}</Text>
      </ListCardContentWrapper>
    </ListCardContainer>
  );
};

export default ProfileListCard;
