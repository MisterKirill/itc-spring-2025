import { useEffect } from 'react'
import classes from './Board.module.css'
import { Cell } from './Cell'
import { pinsSlice } from '../store/slices/pins'
import { useDispatch } from 'react-redux'

const range = (l) => {
  return Array(l).fill(0).map((_, i) => i)
}

export const Board = () => {
  const rows = range(8);
  const columns = range(8);
  const { cleanPins } = pinsSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanPins({ sr: 0, sc: 0, er: 1, ec: 1 }));
    dispatch(cleanPins({ sr: 6, sc: 6, er: 7, ec: 7 }));
  }, []);

  const renderRow = (row) => {
    return (
      <>
      { columns.map((column) => <Cell key={'' + row + ':' + column} row={row} column={column} />) }
      </>
    )
  }

  return (
    <div className={classes.board}>
    { rows.map(renderRow) }
    </div>
  )
}
