import React from "react";
import { View, Text, Modal, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarModal = ({setSelectedDay, setIsCalendarModalOpen}: {setSelectedDay: any, setIsCalendarModalOpen: any}) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <SafeAreaView className="flex-1 bg-primary-400 p-4">
        {/* Modal Header */}
        <View className="mb-4">
          <Text className="text-2xl font-bold text-black text-center">
            Select a Date
          </Text>
        </View>

        {/* Calendar */}
        <Calendar
          onDayPress={day => {
            setSelectedDay(day.dateString);
            setIsCalendarModalOpen(false);
            }}
          style={{
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: "#f9f9f9", // Light background for calendar
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 3, // For Android shadow
          }}
          markedDates={{
            '2025-01-01': { selected: true, selectedColor: '#4CAF50' }, // Example marking
          }}
          theme={{
            todayTextColor: '#4CAF50', // Today's date color
            selectedDayBackgroundColor: '#4CAF50', // Selected day background
            selectedDayTextColor: '#fff', // Selected day text color
            arrowColor: '#4CAF50', // Arrow color for navigation
            monthTextColor: '#333', // Month text color
            textDayFontFamily: 'Arial', // Font for day texts
            textMonthFontFamily: 'Arial', // Font for month name
            textDayHeaderFontFamily: 'Arial', // Font for weekday headers
            textMonthFontWeight: 'bold', // Month name bold text
          }}
        />
        <View className="mt-2 px-5">
        <Text className="text-3xl font-bold text-black-900">
            Month Overview
          </Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CalendarModal;