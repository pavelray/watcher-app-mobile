import React from "react";
import SafeArea from "../../components/UI/SafeArea/SafeArea";
import { FlatList, Image } from "react-native";
import { Text } from "../../components/UI/Typography/Text";
import { CrewCardView, PageContainer } from "./CastAndCrew.style";
import { API_IMAGE_URL } from "../../utils/constants";
import { Spacer } from "../../components/UI/Spacer/Spacer";

function CastAndCrewScreen({ route, navigation }) {
  const { allCredits } = route.params;
  const { cast = [] } = allCredits;

  return (
    <SafeArea>
      <PageContainer>
        <Spacer position="bottom" size="large" />
        <Text variant="title">All Cast And Crews</Text>
        <Spacer position="bottom" size="large" />
        <FlatList
          data={cast}
          renderItem={({ item }) => (
            <CrewCardView>
              <Image
                source={{ uri: `${API_IMAGE_URL}/w200${item.profilePath}` }}
                style={{
                  width: "auto",
                  height: 200,
                  resizeMode: "contain",
                  flex: 1,
                }}
              />
              <Text variant="caption">{item.name}</Text>
              <Text variant="caption">As {item.character}</Text>
            </CrewCardView>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </PageContainer>
    </SafeArea>
  );
}

export default CastAndCrewScreen;
