import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import HotelCard from "../components/HotelCard";
import { useNavigation } from "@react-navigation/native";
import PriceRangeSlider from "../components/PriceRangeSlider";

const HotelListScreen = () => {
  const hotels = useSelector((state: RootState) => state.hotels.hotels);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigation = useNavigation<any>();

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(search.toLowerCase());

    const price = hotel.price;
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    const matchesPrice = price >= min && price <= max;

    return matchesSearch && matchesPrice;
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search hotels..."
        placeholderTextColor="#666"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <PriceRangeSlider
        min={0}
        max={1000}
        step={50}
        onValueChange={(low:any, high:any) => {
          setMinPrice(low.toString());
          setMaxPrice(high.toString());
        }}
      />

      <FlatList
        data={filteredHotels}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <HotelCard
            hotel={item}
            onPress={() => navigation.navigate("BookingPage", { hotel: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 16,
    color: "#000"
  }
});

export default HotelListScreen;
