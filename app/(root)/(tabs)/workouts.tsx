import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import WorkoutCard from "@/app/components/WorkoutCard";

const workouts = () => {
  return (
    <SafeAreaView className="h-full bg-primary-100 px-5">
      <View className="mt-5 ">
        <Text className="font-futura text-3xl">Workouts</Text>
      </View>

      <View className="mt-5 flex flex-row justify-between border rounded-lg">
        <Text>Search box</Text>
        <View className="flex flex-row gap-3">
          <TouchableOpacity>
            <Ionicons name="search" size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="funnel-outline" size={32} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        <View className="mt-5">
          <Text className="font-futura text-2xl">Results: 52</Text>
        </View>
        <View className="mt-5">
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default workouts;
