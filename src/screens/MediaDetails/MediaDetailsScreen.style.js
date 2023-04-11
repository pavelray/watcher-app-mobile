import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const MediaCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const MediaCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: transparent;
`;

export const GenreContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space[2]};
  text-align: center;
  align-content: center;
`;

export const MediaDetailsContainer = styled.View`
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[0]};
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MovieStatsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${(props) => props.theme.space[2]};
`

