import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
});

export default reservationSlice.reducer;
