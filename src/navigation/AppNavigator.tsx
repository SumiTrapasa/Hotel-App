import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HotelListScreen from "../screens/HotelListScreen";
import HotelDetailScreen from "../screens/HotelDetailScreen";
import HeaderButton from "../components/HeaderButton";
import BookedHotelsScreen from "../screens/BookedHotelsScreen";

export type RootParamList = {
  HomePage: undefined;
  BookingPage: {
    hotel: Hotel
  };
  BookedHotels: any
};

export type Hotel = {
  id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  description: string;
  images: string[];
};

const Stack = createNativeStackNavigator<RootParamList>();

const getHotelsHeaderRight = (navigation: any) => () => {
  return (
    <HeaderButton
      onPress={() => navigation.navigate("BookedHotels")}
    />
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HotelListScreen}
          options={({ navigation }) => ({
            title: "Available Hotels",
            headerRight: getHotelsHeaderRight(navigation),
          })}
        />
        <Stack.Screen
          name="BookingPage"
          component={HotelDetailScreen}
          options={({ route }) => ({ title: route.params?.hotel?.name ?? "Hotel Details" })}
        />
        <Stack.Screen
          name="BookedHotels"
          component={BookedHotelsScreen}
          options={{ title: "My Bookings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
