import { createSlice } from "@reduxjs/toolkit";
import { PARTNERS } from "../../app/shared/PARTNERS";

const initialState = {
  parternsArray: PARTNERS,
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
});
export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.parternsArray;
};

export const selectFeaturedPartner = (state) => {
  return state.partners.parternsArray.find((partner) => partner.featured);
};
