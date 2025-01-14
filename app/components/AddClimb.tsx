import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ScrollPicker from "react-native-wheel-scrollview-picker";

const AddClimb = () => {
  const [attempts, setAttempts] = useState(12);
  const [status, setStatus] = useState("Next Time!");
  const [selectedGrade, setSelectedGrade] = useState("V7"); // State to store the selected grade
  const grades = [
    "V0",
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "V6",
    "V7",
    "V8",
    "V9",
    "V10",
  ];

  return (
    <View className="border border-gray-300 rounded-lg p-4 bg-white ">
      {/* Grade Picker */}
      <View className="flex flex-row mt-5 justify-evenly items-center">
        <View>
          <ScrollPicker
            dataSource={grades}
            selectedIndex={1}
            wrapperHeight={100}
            wrapperBackground="#FFFFFF"
            itemHeight={60}
            highlightColor="#d8d8d8"
            highlightBorderWidth={1}
          />
        </View>

        {/* Attempts Button */}
        <View className="items-center">
          <Text className="text-center text-gray-500 font-semibold mb-2">
            Attempts
          </Text>
          <TouchableOpacity
            className="bg-purple-500 px-4 py-2 rounded-md"
            onPress={() => setAttempts(attempts + 1)} // Increment attempts
          >
            <Text className="text-white text-lg font-bold">{attempts}</Text>
          </TouchableOpacity>
        </View>

        {/* Emoji Button */}
        <View className="items-center">
          <TouchableOpacity
            className={`px-4 py-2 rounded-md ${
              status === "Success" ? "bg-green-500" : "bg-red-500"
            }`}
            onPress={() =>
              setStatus((prevStatus) =>
                prevStatus === "Next Time!" ? "Success" : "Next Time!"
              )
            }
          >
            <Text className="text-white text-lg font-bold">{status}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Action Buttons */}
      <View className="flex flex-row justify-evenly mt-6">
        <View>
          <TouchableOpacity>
            <Ionicons name="camera" size={36} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons name="pencil" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Save Button */}
      <View className="flex flex-row justify-center mt-6">
        <TouchableOpacity className="bg-purple-500 px-6 py-2 rounded-lg">
          <Text className="text-white text-lg font-bold">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddClimb;
