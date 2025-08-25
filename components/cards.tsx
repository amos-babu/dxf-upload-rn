import React from "react";
import { Image, TouchableOpacity } from "react-native";
interface Props {
  onPress?: () => void;
}

const cards = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-40 h-60 relative"
    >
      <Image
        source={{
          uri: "https://i.pinimg.com/1200x/dc/99/d6/dc99d64f4a421cc9d1b8b6c36474ddd3.jpg",
        }}
        className="size-full rounded-3xl"
      />
    </TouchableOpacity>
  );
};

export default cards;
