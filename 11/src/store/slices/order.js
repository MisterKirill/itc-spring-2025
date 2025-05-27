import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: 'green'
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    next: (state) => {
      state.order = state.order === 'green' ? 'orange' : 'green';
    }
  },
  selectors: {
    getOrder: (state) => state.order,
  }
});
