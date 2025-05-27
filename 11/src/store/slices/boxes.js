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
      const pl = action.payload;
      state[pl.order].row = pl.row;
      state[pl.order].column = pl.column;
    },
  },
  selectors: {
    getGreenBox: (state) => state.green,
    getOrangeBox: (state) => state.orange,
    canMove: (state) => {
      return {
        green: {
          up: state.green.row > 0,
          down: state.green.row < 6,
          left: state.green.column > 0,
          right: state.green.column < 6,
        },
        orange: {
          up: state.orange.row > 0,
          down: state.orange.row < 6,
          left: state.orange.column > 0,
          right: state.orange.column < 6,
        },
      };
    }
  }
});
