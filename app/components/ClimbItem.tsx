import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const ClimbItem = ({
  grade,
  attempts,
  success,
}: {
  grade: string;
  attempts: number;
  success: boolean;
}) => {
  return (
    <View
      className={`border rounded-lg p-4 mb-2 ${
        success ? "border-green-500" : "border-red-500"
      }`}
    >
      <TouchableOpacity className="flex flex-row justify-evenly items-center">
        <View className="flex flex-row">
          <Text className="text-lg  text-black">Grade: </Text>
          <Text className="text-lg font-bold text-black">{grade}</Text>
        </View>

        {/* Attempts Section */}
        <View className="flex flex-row items-center">
          <Text className="text-sm text-gray-500">Attempts: </Text>
          <Text className="text-lg font-bold text-gray-700 mr-1">
            {attempts}
          </Text>
        </View>
        <TouchableOpacity >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default ClimbItem;
