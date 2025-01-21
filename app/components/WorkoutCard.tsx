import { View, Text, Image } from "react-native";
import React from "react";
import placeHolderImage from "@/assets/images/placeholderImage.jpeg";
const WorkoutCard = () => {
  return (
    <View className="flex-col">
      <Text className="font-futura text-2xl">Title</Text>
      <Image
        className="w-full h-64 rounded-lg"
        source={placeHolderImage}
        resizeMode="cover"
      />
      <View className="flex flex-row justify-evenly">
        <Text className="font-futura text-1xl">Short decription</Text>
      </View>
    </View>
  );
};

export default WorkoutCard;
