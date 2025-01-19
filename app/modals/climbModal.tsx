import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import placeHolderImage from "@/assets/images/placeholderImage.jpeg";
import TagPill from "../components/TagPill";

const ClimbModal = ({
  climbId,
  onClose,
}: {
  climbId: string;
  onClose: () => void;
}) => {
  const tags = ["Pinch", "Crimp", "Sloper", "Jug", "Dyno"];

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible
      onRequestClose={onClose}
    >
      <SafeAreaView className="flex-1 bg-primary-400 p-4">
        <View className="flex-row justify-between items-center px-5 mt-5">
          <TouchableOpacity onPress={onClose}>
            <Text className="font-futura text-lg text-purple-500">Close</Text>
          </TouchableOpacity>
          <Text className="font-futura text-lg">Date here</Text>
        </View>

        {/* Grade and Attempts */}
        <View className="flex-row justify-between items-center px-5 mt-10">
          <View className="flex flex-col items-start">
            <Text className="font-futura text-4xl text-black">V8</Text>
            <Text className="font-futura text-lg text-gray-500">Grade</Text>
          </View>
          <View className="flex flex-col items-end">
            <Text className="font-futura text-4xl text-black">5</Text>
            <Text className="font-futura text-lg text-gray-500">Attempts</Text>
          </View>
        </View>

        {/* Description */}
        <View className="px-5 mt-5">
          <Text className="font-futura text-base text-gray-700">
            Flashed it first try! Swipe left and right to view previous and
            other climbs.
          </Text>
        </View>

        {/* Image */}
        <View className="px-5 mt-5">
          <Image
            className="w-full h-64 rounded-lg"
            source={placeHolderImage}
            resizeMode="cover"
          />
        </View>

        {/* Tags */}
        <View className="flex-row flex-wrap justify-start items-center px-5 mt-4">
          {tags.map((tag, index) => (
            <TagPill key={index} label={tag} />
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ClimbModal;
