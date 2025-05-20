import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: 'green'
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    next: (state) => {
    }
  },
  selectors: {
    getOrder: (state) => state.order,
  }
});
