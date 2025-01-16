import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import MenuItem from "./addClimbComponents/MenuItem";

const AddClimb = ({onClose} : {onClose: any}) => {
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

  const handleGradePress = () => {
    console.log(
      "INcrease the grade value by one on press. IF the max value reached reset to V0"
    );
  };

  const handleAttemptsPress = () => {

  };

  const handleSuccessPress = () => {
  };

  const handlePhotoPress = () => {};

  const handleNotesPress = () => {};

  const menuItems = [
    <MenuItem name={"Grade"} press={handleGradePress} content={<Text>{grades[0]}</Text>} />,
    <MenuItem name={"Attemps"} press={handleAttemptsPress} content={<Text>{attempts}</Text>} />,
    <MenuItem name={"Success"} press={handleSuccessPress} content={<Text>{status}</Text>} />,
    <MenuItem name={"Photo"} press={handlePhotoPress} content={<Ionicons name="camera" size={16} color="black"/>} />,
    <MenuItem name={"Notes"} press={handleNotesPress} content={<Ionicons name="book" size={16} color="black"/>} />
  ];

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Log a new climb</Text>
          <TouchableOpacity onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={menuItems}
            horizontal
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            renderItem={({ item, index }) => <View>{item}</View>}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddClimb;

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#B5C99A",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
