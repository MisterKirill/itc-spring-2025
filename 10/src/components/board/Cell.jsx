import { positionSlice } from '../../store/slices/position'
import classes from './Cell.module.css'
import { useSelector } from 'react-redux'

export const Cell = ({ row, column }) => {
  const { getRow, getColumn } = positionSlice.selectors;
  const prow = useSelector(getRow);
  const pcolumn = useSelector(getColumn);

  const isCurrent = prow === row && pcolumn === column;

  return (
    <div className={classes.cell}>
      { isCurrent && <div className={classes.pin} /> }
    </div>
  )
}
