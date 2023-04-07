import styled from "styled-components/native";

export const GenreContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[0]} ${(props) => props.theme.space[2]};
  text-align: center;
  align-content: center;
`;

