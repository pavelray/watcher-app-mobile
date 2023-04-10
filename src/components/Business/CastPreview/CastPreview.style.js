import { View } from "react-native";
import styled from "styled-components/native";

export const CastPreviewContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  text-align: left;
  gap: ${(props) => props.theme.space[2]};
`;

export const ViewAllContainer = styled(View)`
  display: flex;
  justify-content: center;
`;