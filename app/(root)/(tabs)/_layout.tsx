import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({
  focused,
  iconName,
  title,
}: {
  focused: boolean;
  iconName: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex-col items-center">
    <Ionicons
      name={iconName}
      size={20}
      color={focused ? "#6f2dbd" : "#66876"}
    />
    <Text
      className={`${
        focused ? "text-regularFont-100" : "text-black-200"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#B5C99A",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName="calendar-outline"
              focused={focused}
              title="Progress"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName="book-outline"
              focused={focused}
              title="Journal"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName="stats-chart-sharp"
              focused={focused}
              title="Stats"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
