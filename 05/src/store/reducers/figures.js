import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentFigure: 'rook',
  knightPosition: {
    row: 0,
    column: 0,
  },
  rookPosition: {
    row: 3,
    column: 7,
  },
}

const maxRow = 3;
const maxColumn = 7;

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    setToPosition: (state, action) => {
      if (action.payload.row > maxRow || action.payload.column > maxColumn) return;

      if (action.payload.figure === 'knight') {
        state.knightPosition.row = action.payload.row;
        state.knightPosition.column = action.payload.column;
      } else {
        state.rookPosition.row = action.payload.row;
        state.rookPosition.column = action.payload.column;
      }

      state.currentFigure = state.currentFigure === 'knight' ? 'rook' : 'knight';
    }
  },
  selectors: {
    getCurrentFigure: (state) => state.currentFigure,
    getRookPosition: (state) => state.rookPosition,
    getKnightPosition: (state) => state.knightPosition,
  },
});
