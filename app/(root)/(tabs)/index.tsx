import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
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
  const [note, setNote] = useState(
    "A really solid workout with lots of progress made!"
  );
  const [isEditing, setIsEditing] = useState(false);
  return (
    <SafeAreaView className="h-full bg-primary-100">
      {/* Header */}
      <View className="flex flex-row items-center justify-between mt-5 px-2">
        <Text className="text-4xl font-futura text-regular Font-100">
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
          <Text className="text-3xl font-bold font-futura text-regularFont-100">
            Notes
          </Text>
          {isEditing ? (
            <View>
              <TextInput
                value={note}
                onChangeText={setNote}
                onBlur={() => setIsEditing(false)} // When focus is lost, stop editing
                autoFocus
                className="font-futura text-regularFont-100"
                multiline
                style={{
                  minHeight: 100,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  padding: 10,
                }}
              />
              <View className="flex flex-row mt-5 justify-center">
              <TouchableOpacity onPress={() => setIsEditing(false)}>
                <Text className="font-futura text-white bg-purple-600 text-3xl py-2 px-4 rounded-lg shadow-md ">Save</Text>
              </TouchableOpacity>
              </View>

            </View>
          ) : (
            <View className="font-futura text-regularFont-100">
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <Text>{note}</Text>
              </TouchableOpacity>
            </View>
          )}
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
        </View>
      </ScrollView>

      {/* Floating Circular "+" Button or AddClimb */}
      <View className="absolute bottom-36 left-7 right-7">
        {!isAddClimbOpen ? (
          // Floating "+" Button
          <TouchableOpacity
            className="bg-buttonColor-100 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
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
