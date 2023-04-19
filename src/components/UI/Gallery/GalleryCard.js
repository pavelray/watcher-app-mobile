import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const GalleryCard = ({ title, imageSource, onPress, item }) => {
  const handleOnPress = () => {
    onPress(item);
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageSource }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GalleryCard;
