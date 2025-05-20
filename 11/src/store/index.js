import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { pinsSlice } from './slices/pins';
import { boxesSlice } from './slices/boxes';
import { orderSlice } from './slices/order';

const reducer = combineSlices(pinsSlice, boxesSlice, orderSlice);

export const setupStore = () => configureStore({
  reducer,
});
