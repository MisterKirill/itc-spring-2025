import { pinsSlice, pinKey } from '../store/slices/pins'
import { useSelector } from 'react-redux'
import classes from './Cell.module.css'
import { Pin } from './Pin';

export const Cell = ({ column, row }) => {
  const { getPins } = pinsSlice.selectors;
  const pins = useSelector(getPins);
  const pin = pins[pinKey(row, column)];

  return (
    <div className={classes.cell}>
      { pin && <Pin color={pin.color} value={pin.value} /> }
    </div>
  )
}
