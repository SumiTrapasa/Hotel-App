import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { bookHotel } from "../redux/hotelSlice";

const HotelDetailScreen = ({ route }: any) => {
  const { hotel } = route.params;
  const dispatch = useDispatch();

  const bookedHotels = useSelector((state: any) => state.hotels.bookings);

  const isBooked = bookedHotels?.some((h: any) => h.id === hotel.id);

  const handleBooking = () => {
    if (!isBooked) {
      dispatch(bookHotel(hotel));
      Alert.alert("Success", "Your booking has been confirmed!");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: hotel.image }} style={styles.image} />

        <Text style={styles.name}>{hotel.name}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{hotel.location}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>${hotel.price}/night</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{hotel.description}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, isBooked && styles.disabledButton]}
        activeOpacity={0.7}
        onPress={handleBooking}
        disabled={isBooked}
      >
        <Text style={styles.buttonText}>
          {isBooked ? "Booked" : "Book Now"}
        </Text>
      </TouchableOpacity>

      {/* {isBooked && <Text style={styles.successMsg}>Booked!</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent:'space-between' },
  image: { width: "100%", height: 200, borderRadius: 12, marginBottom: 15 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 15, color: "#333" },
  infoBox: { marginBottom: 12 },
  label: { fontSize: 16, fontWeight: "600", color: "#555" },
  value: { fontSize: 16, color: "#333", marginTop: 2 },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  successMsg: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default HotelDetailScreen;
