import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { positionSlice } from './slices/position'
import { bindSlice } from './slices/bind'

const reducer = combineSlices(positionSlice, bindSlice);

export const setupStore = () => configureStore({
  reducer,
});
