import { View, Text, Modal, SafeAreaView } from "react-native";
import React from "react";

//Use a use effect to get relavent infomation from the climb id???

const ClimbModal = ({climbId}: {climbId: string}) => {
  return (
    <Modal
    animationType="slide">
      <SafeAreaView className="flex-1 bg-primary-400 p-4">
        <View>
            <Text>IM a climb Modal </Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ClimbModal;
