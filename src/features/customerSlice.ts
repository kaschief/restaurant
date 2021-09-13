import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  meals: string[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
