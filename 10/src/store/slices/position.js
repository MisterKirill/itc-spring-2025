import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  row: 0,
  column: 0,
  pause: false,
}

export const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    setPosition: (state, action) => {
      const { row, column } = action.payload;
      state.row = row;
      state.column = column;
    },
    setPause: (state, action) => {
      state.pause = action.payload;
    },
    moveDir: (state, action) => {
      const { direction } = action.payload;
      if (state.pause) return void 0;

      switch(direction) {
        case 'UP': state.row = Math.max(0, state.row - 1); break;
        case 'DOWN': state.row = Math.min(2, state.row + 1); break;
        case 'LEFT': state.column = Math.max(0, state.column - 1); break;
        case 'RIGHT': state.column = Math.min(2, state.column + 1); break;
      }
    }
  },
  selectors: {
    getRow: (state) => state.row,
    getColumn: (state) => state.column,
  }
});
