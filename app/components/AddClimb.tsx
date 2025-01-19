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
import TagPill from "./TagPill";

const AddClimb = ({ onClose }: { onClose: any }) => {
  const [attempts, setAttempts] = useState(12);
  const [status, setStatus] = useState("Next Time!");
  const [selectedGrade, setSelectedGrade] = useState("V7");

  const [notesOpen, setNotesOpen] = useState<boolean>(false);

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

  const handleAttemptsPress = () => {};

  const handleSuccessPress = () => {};

  const handlePhotoPress = () => {};

  const handleNotesPress = () => {
    setNotesOpen(true);
  };

  const tags = ["Pinch", "Crimp", "Sloper", "Jug", "Dyno", "Add Tag"];

  const menuItems = [
    <MenuItem
      name={"Grade"}
      press={handleGradePress}
      content={<Text>{grades[0]}</Text>}
    />,
    <MenuItem
      name={"Attemps"}
      press={handleAttemptsPress}
      content={<Text>{attempts}</Text>}
    />,
    <MenuItem
      name={"Success"}
      press={handleSuccessPress}
      content={<Text>{status}</Text>}
    />,
    <MenuItem
      name={"Photo"}
      press={handlePhotoPress}
      content={<Ionicons name="camera" size={16} color="black" />}
    />,
    <MenuItem
      name={"Notes"}
      press={handleNotesPress}
      content={<Ionicons name="book" size={16} color="black" />}
    />,
  ];

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text className="font-futura">Log a new climb</Text>
          <TouchableOpacity onPress={onClose}>
            <Text className="font-futura">Close</Text>
          </TouchableOpacity>
        </View>

        {!notesOpen ? (
          <View>
            <View className="mt-5">
              <FlatList
                data={menuItems}
                horizontal
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <View>{item}</View>}
              />
            </View>
            <View className="mt-2">
              <FlatList
                data={tags}
                horizontal
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <TagPill key={index} label={item} />
                )}
              />
            </View>
          </View>
        ) : (
          <View>
            <View>
              <Text className="font-futura text-white">
                Add an editable note secton here
              </Text>
            </View>
            <Text className="font-futura text-white bg-purple-600 text-3xl py-2 px-4 rounded-lg shadow-md ">Save</Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default AddClimb;

const styles = StyleSheet.create({
  modalContent: {
    height: "40%",
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
