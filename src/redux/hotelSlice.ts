import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import hotelsData from "../data/hotels.json";

export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  description: string;
  image: string;
}

interface HotelState {
  hotels: Hotel[];
  bookings: Hotel[];
}

const initialState: HotelState = {
  hotels: hotelsData,
  bookings: []
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    bookHotel: (state, action: PayloadAction<Hotel>) => {
      state.bookings.push(action.payload);
    }
  }
});

export const { bookHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
