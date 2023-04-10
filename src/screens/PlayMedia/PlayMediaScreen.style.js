import { View } from "react-native";
import styled from "styled-components/native";

export const MediaPlayerContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
`;

export const MediaPlayerWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${(props) => props.theme.space[2]};
`;
