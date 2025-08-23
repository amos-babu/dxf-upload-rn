import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ImageDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ImageDetails {id}</Text>
    </View>
  );
};

export default ImageDetails;
