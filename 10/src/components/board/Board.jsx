import classes from './Board.module.css'
import { Row } from './Row';
import { Cell } from './Cell';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { positionSlice } from '../../store/slices/position';
import { bindSlice } from '../../store/slices/bind';

const range = () => [ 0, 1, 2 ];

export const Board = () => {
  const dispatch = useDispatch();
  const { moveDir } = positionSlice.actions;
  const { getBinds } = bindSlice.selectors;
  const binds = useSelector(getBinds);
  const { up, down, left, right } = binds;

  // TODO: useEffect

  return (
    <div className={classes.board}>
      {
        range().map((row) => {
          return (
            <Row>
              { range().map((column) => <Cell row={row} column={column}/>) }
            </Row>
          )
        })
      }
    </div>
  );
}
