import styled from "styled-components/native";

export const PageContainer = styled.View`
  flex:1;
  margin: ${(props) => props.theme.space[2]};
  justify-content: center;
`;

export const CrewCardView = styled.View`
  display: flex;
  flex-direction: column;
  flex:1;
  margin: ${(props) => props.theme.space[2]};
  justify-content: flex-start;
  align-items: flex-start;
`;
