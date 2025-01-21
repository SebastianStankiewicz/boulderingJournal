import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const stats = () => {
  return (
    <SafeAreaView className="h-full bg-primary-100">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row justify-end">
          <TouchableOpacity>
            <Text className="font-futura text-2xl">Reset</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            A row of circles with the outer perimiter highlighted relative to
            number of climbs
          </Text>
        </View>
        <View>
          <Text>Distriubutiion graph of climb grades</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default stats;
