import React from "react";
import { ListCardContainer, ListCardContentWrapper } from "./ListCard.style";
import { Image } from "react-native";
import { API_IMAGE_URL } from "../../../utils/constants";
import { Text } from "../Typography/Text";
import { Spacer } from "../Spacer/Spacer";
import { getAge } from "../../../utils/helperMethods";

const ProfileListCard = ({ bio }) => {
  const {
    name,
    birthday,
    deathday,
    knownForDepartment,
    placeOfBirth,
    profilePath,
    popularity
  } = bio;
  return (
    <ListCardContainer>
      <Image
        source={{
          uri: `${API_IMAGE_URL}/w200${profilePath}`,
        }}
        style={{ width: 200, height: 250, resizeMode: "contain" }}
      />
      <ListCardContentWrapper>
        <Text variant="title">{name}</Text>
        <Spacer position="top" size="medium" />
        <Text variant="label">Age: {getAge(birthday)}</Text>
        <Spacer position="bottom" size="small" />
        <Text variant="label">
          Born:{" "}
          {new Date(birthday).toDateString().split(" ").slice(1, 4).join(" ")}
        </Text>
        <Spacer position="bottom" size="small" />
        <Text variant="label">Place: {placeOfBirth}</Text>
        {deathday && (
          <>
            <Spacer position="top" size="small" />
            <Text variant="label">
              Death:{" "}
              {new Date(deathday)
                .toDateString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}
            </Text>
          </>
        )}
        <Spacer position="top" size="small" />
        <Text variant="label">Known for: {knownForDepartment}</Text>
        <Spacer position="top" size="small" />
        <Text variant="label">Popularity: {popularity}</Text>
      </ListCardContentWrapper>
    </ListCardContainer>
  );
};

export default ProfileListCard;
