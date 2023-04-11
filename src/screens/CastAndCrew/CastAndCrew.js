import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import { Text } from "../../components/UI/Typography/Text";
import { CrewCardView, PageContainer } from "./CastAndCrew.style";
import { API_IMAGE_URL, MEDIA_TYPE } from "../../utils/constants";
import { Spacer } from "../../components/UI/Spacer/Spacer";
import Wrapper from "../../components/UI/Wrapper/Wrapper";

function CastAndCrewScreen({ route, navigation }) {
  const { allCredits } = route.params;
  const { cast = [] } = allCredits;

  return (
    <Wrapper>
      <PageContainer>
        <Spacer position="bottom" size="large" />
        <Text variant="title">All Cast And Crews</Text>
        <Spacer position="bottom" size="large" />
        <FlatList
          data={cast}
          renderItem={({ item }) => (
            <CrewCardView>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Bio", {
                    id: item.id,
                    type: MEDIA_TYPE.PERSON
                  })
                }
              >
                <Image
                  source={{ uri: `${API_IMAGE_URL}/w200${item.profilePath}` }}
                  style={{
                    width: 120,
                    height: 200,
                    resizeMode: "contain",
                  }}
                />
                <Text variant="caption">{item.name}</Text>
                <Text variant="caption">As {item.character}</Text>
              </TouchableOpacity>
            </CrewCardView>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </PageContainer>
    </Wrapper>
  );
}

export default CastAndCrewScreen;
