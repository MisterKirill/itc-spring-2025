import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  green: {
    row: 0, column: 0, value: 10,
  },
  orange: {
    row: 6, column: 6, value: 10,
  }
}

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    moveBox: (state, action) => {
    }
  },
  selectors: {
    getGreenBox: (state) => state.green,
    getOrangeBox: (state) => state.orange,
    canMove: (state) => {
      return {
        green: {},
        orange: {},
      }
    }
  }
});
