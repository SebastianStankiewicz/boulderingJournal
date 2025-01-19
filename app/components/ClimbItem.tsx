import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ClimbModal from "../modals/ClimbModal";

const ClimbItem = ({
  grade,
  attempts,
  success,
}: {
  grade: string;
  attempts: number;
  success: boolean;
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View
      className={`border rounded-lg p-4 mb-2 ${
        success ? "border-successGreen-100" : "border-red-500"
      }`}
    >
      <TouchableOpacity
        className="flex flex-row justify-evenly items-center"
        onPress={() => setModalVisible(true)}
      >
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
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>

      <View>{modalVisible ? <ClimbModal climbId="1" onClose={() => setModalVisible(false)} /> : null}</View>
    </View>
  );
};

export default ClimbItem;
