import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Hotel } from "../redux/hotelSlice";

interface Props {
  hotel: Hotel;
  onPress: () => void;
}

const HotelCard: React.FC<Props> = ({ hotel, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: hotel.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Text style={styles.location}>{hotel.location}</Text>
        <Text style={styles.price}>${hotel.price}/night</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { marginVertical: 10, borderRadius: 10, overflow: "hidden", backgroundColor: "#fff", elevation: 3 },
  image: { width: "100%", height: 150 },
  info: { padding: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  location: { color: "gray" },
  price: { marginTop: 5, fontWeight: "600" }
});

export default HotelCard;
