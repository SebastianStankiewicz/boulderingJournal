import { View, Text } from "react-native";
import React from "react";

const TagPill = ({ label }: { label: string }) => {
  return (
    <View className="bg-buttonColor-100 rounded-full px-4 py-2 mx-1 shadow-black">
      <Text className="text-white text-sm font-medium">{label}</Text>
    </View>
  );
};

export default TagPill;