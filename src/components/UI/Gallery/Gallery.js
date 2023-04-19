import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import GalleryCard from "./GalleryCard";
import { API_IMAGE_URL } from "../../../utils/constants";

const numColumns = 2;

const Gallery = ({ data, onPress }) => {
  const handleOnPress = (item) => {
    onPress(item);
  };
  const renderItem = ({ item }) => (
    <GalleryCard
      title={item.title}
      imageSource={`${API_IMAGE_URL}/w200${item.posterPath}`}
      onPress={handleOnPress}
      item={item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Gallery;
