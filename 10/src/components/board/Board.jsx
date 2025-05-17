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

  useEffect(() => {
    const bindHandler = (event) => {
      switch (event.key) {
        case up: dispatch(moveDir({ direction: 'UP' })); break;
        case down: dispatch(moveDir({ direction: 'DOWN' })); break;
        case left: dispatch(moveDir({ direction: 'LEFT' })); break;
        case right: dispatch(moveDir({ direction: 'RIGHT' })); break;
      }
    };

    document.addEventListener('keydown', bindHandler);

    return () => document.removeEventListener('keydown', bindHandler);
  }, [up, down, left, right, dispatch, moveDir]);

  return (
    <div className={classes.board}>
      {
        range().map((row) => {
          return (
            <Row>
              { range().map((column, i) => <Cell key={i} row={row} column={column}/>) }
            </Row>
          )
        })
      }
    </div>
  );
}
