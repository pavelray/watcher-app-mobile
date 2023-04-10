import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const MediaCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
  border-radius: none;
`;

export const MediaCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: none;
  background-color: transparent;
`;

export const GenreContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[0]} ${(props) => props.theme.space[2]};
  text-align: center;
  align-content: center;
`;
