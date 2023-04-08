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

const ListCard = ({ item }) => {
  const { title, posterPath, overview, releaseDate, voteAverage } = item;
  return (
    <ListCardContainer>
      <Image
        source={{
          uri: `${API_IMAGE_URL}/w200${posterPath}`,
        }}
        style={{ width: 100, height: 150, resizeMode: "contain" }}
      />
      <ListCardContentWrapper>
        <Text>{title}</Text>
        <Spacer position="top" size="medium" />
        <DescriptionWrapper>
          <NativeText ellipsizeMode="tail" numberOfLines={2}>
            {overview}
          </NativeText>
        </DescriptionWrapper>
        <Spacer position="top" size="medium" />
        <Text variant="hint">{new Date(releaseDate).toDateString().split(" ").slice(1,4).join(" ")}</Text>
        <Spacer position="top" size="small" />
        <Text variant="hint">{voteAverage}</Text>
      </ListCardContentWrapper>
    </ListCardContainer>
  );
};

export default ListCard;
