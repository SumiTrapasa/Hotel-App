import React from "react";
import { GestureResponderEvent } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ onPress }) => {
  return (
    <MaterialCommunityIcons name="book-plus-multiple" color="#000" size={30} onPress={onPress} />
  );
};

export default HeaderButton;
