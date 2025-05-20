import { createSlice } from '@reduxjs/toolkit'

const randomPinValue = () => {
  const color = Math.random() > 0.5 ? 'green' : 'orange';
  const value = 1 + Math.floor(Math.random() * 3);

  return { color, value };
}

export const pinKey = (row, column) => ('' + row + ':' + column);

const initialState = () => {
  const pins = {};
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      pins[pinKey(row, column)] = randomPinValue();
    }
  }
  return { pins };
}

export const pinsSlice = createSlice({
  name: "pins",
  initialState,
  reducers: {
    cleanPins: (state, action) => {
      const { sr, sc, er, ec } = action.payload;
      for (let row = sr; row <= er; row++) {
        for (let column = sc; column <= ec; column++) {
          delete state.pins[pinKey(row, column)];
        }
      }
    },
  },
  selectors: {
    getPins: (state) => state.pins,
  },
});
