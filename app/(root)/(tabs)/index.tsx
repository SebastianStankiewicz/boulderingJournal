import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddClimb from "@/app/components/AddClimb";
import ClimbItem from "@/app/components/ClimbItem";
import React, { useState } from "react";
import CalendarModal from "@/app/components/CalendarModal";

export default function Index() {
  const [isAddClimbOpen, setIsAddClimbOpen] = useState<boolean>(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<any>(14);

  return (
    <SafeAreaView className="h-full bg-white">
      {/* Header */}
      <View className="flex flex-row items-center justify-between mt-5 px-2">
        <Text className="text-4xl font-bold text-black-900">
          {Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "long",
          }).format(new Date(selectedDate))}
        </Text>
        {!isCalendarModalOpen ? (
          <TouchableOpacity>
            <Ionicons
              name="calendar"
              size={24}
              color="black"
              onPress={() => setIsCalendarModalOpen(true)}
            />
          </TouchableOpacity>
        ) : (
          <CalendarModal
            setSelectedDay={setSelectedDate}
            setIsCalendarModalOpen={setIsCalendarModalOpen}
          />
        )}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="mt-5">
          <Text className="text-3xl font-bold text-black-900">
            Session notes
          </Text>
        </View>

        <View className="mt-5">
          <Text className="text-3xl font-bold text-black-900">Climbs</Text>
        </View>

        <View className="mt-2">
          {/* Example Climb Items */}
          <ClimbItem grade="V7" attempts={5} success={true} />
          <ClimbItem grade="V5" attempts={8} success={false} />
          <ClimbItem grade="V6" attempts={3} success={true} />
          <ClimbItem grade="V8" attempts={12} success={false} />
          <ClimbItem grade="V7" attempts={5} success={true} />
          <ClimbItem grade="V5" attempts={8} success={false} />
          <ClimbItem grade="V6" attempts={3} success={true} />
          <ClimbItem grade="V8" attempts={12} success={false} />
          <ClimbItem grade="V7" attempts={5} success={true} />
          <ClimbItem grade="V5" attempts={8} success={false} />
          <ClimbItem grade="V6" attempts={3} success={true} />
          <ClimbItem grade="V8" attempts={12} success={false} />
        </View>
      </ScrollView>

      {/* Floating Circular "+" Button or AddClimb */}
      <View className="absolute bottom-36 left-7 right-7">
        {!isAddClimbOpen ? (
          // Floating "+" Button
          <TouchableOpacity
            className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
            onPress={() => setIsAddClimbOpen(true)}
          >
            <Ionicons name="add" size={36} color="white" />
          </TouchableOpacity>
        ) : (
          // AddClimb Component
          <View className="bg-white p-4 rounded-lg shadow-lg">
            <AddClimb onClose={() => setIsAddClimbOpen(false)} />
            {/* Close Button */}
            <TouchableOpacity
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
              onPress={() => setIsAddClimbOpen(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
