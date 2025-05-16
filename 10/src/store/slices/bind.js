import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  direction: null,
  bindings: {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown'
  }
}

export const bindSlice = createSlice({
  name: "bind",
  initialState,
  reducers: {
    setBind: (state, action) => {
    },
    selectDirection: (state, action) => {
    }
  },
  selectors: {
    getBinds: (state) => state.bindings,
    getDirection: (state) => state.direction,
  }
});
