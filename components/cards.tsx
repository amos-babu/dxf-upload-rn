import { FilesProp } from "@/lib/types";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
interface Props {
  onPress?: () => void;
  posts: FilesProp;
}

const Card = ({ onPress, posts }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="w-44 h-60">
      <Image
        source={{
          uri: "https://i.pinimg.com/1200x/dc/99/d6/dc99d64f4a421cc9d1b8b6c36474ddd3.jpg",
        }}
        className="size-full rounded-3xl"
      />
    </TouchableOpacity>
  );
};

export default Card;
