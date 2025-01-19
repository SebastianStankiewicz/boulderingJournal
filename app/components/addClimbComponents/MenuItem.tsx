import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MenuItem = ({
  name,
  press,
  content,
}: {
  name: string;
  press: any;
  content: any;
}) => {
  return (
    <TouchableOpacity onPress={press}>
      <View className="flex flex-col items-center justify-center px-12 py-12 mx-2  bg-white rounded-lg shadow-md m-2">
        {content}
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
