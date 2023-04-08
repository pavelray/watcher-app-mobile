import { View } from "react-native";
import styled from "styled-components/native";

export const ListCardContainer = styled(View)`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: 10px 0px;
  text-align: left;
  gap: ${(props) => props.theme.space[2]};
`;

export const ListCardContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const DescriptionWrapper = styled.View`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
