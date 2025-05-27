import classes from './Cell.module.css'
import clsx from 'clsx'
import {Knight} from "./Knight.jsx";
import {useDispatch, useSelector} from "react-redux";
import {figuresSlice} from "../store/reducers/figures.js";
import {Rook} from "./Rook.jsx";

const validateRookMove = (oldRow, oldColumn, newRow, newColumn, knightPosition) => {
  const rowDiff = Math.abs(newRow - knightPosition.row);
  const columnDiff = Math.abs(newColumn - knightPosition.column);
  const knightCanMove = (rowDiff === 2 && columnDiff === 1) || (rowDiff === 1 && columnDiff === 2);
  return knightCanMove ? false : (oldRow === newRow || oldColumn === newColumn);
}

const validateKnightMove = (oldRow, oldColumn, newRow, newColumn, rookPosition) => {
  const rowDiff = Math.abs(newRow - oldRow);
  const columnDiff = Math.abs(newColumn - oldColumn);
  const rookCanMove = rookPosition.row === newRow || rookPosition.column === newColumn;
  return rookCanMove ? false : ((rowDiff === 2 && columnDiff === 1) || (rowDiff === 1 && columnDiff === 2));
}

export const Cell = ({ column, row }) => {
  const dispatch = useDispatch();
  const { setToPosition } = figuresSlice.actions;
  const { getRookPosition, getKnightPosition, getCurrentFigure } = figuresSlice.selectors;
  const rookPosition = useSelector(getRookPosition);
  const knightPosition = useSelector(getKnightPosition);
  const currentFigure = useSelector(getCurrentFigure);
  const color = (column % 2 === row % 2) ? 'white' : 'black';

  const handleClick = () => {
    switch (currentFigure) {
      case 'rook':
        if (rookPosition.row === row && rookPosition.column === column) return;
        if (!validateRookMove(rookPosition.row, rookPosition.column, row, column, knightPosition)) return;
        break;
      case 'knight':
        if (knightPosition.row === row && knightPosition.column === column) return;
        if (!validateKnightMove(knightPosition.row, knightPosition.column, row, column, rookPosition)) return;
        break;
    }

    dispatch(setToPosition({ figure: currentFigure, row, column }));
  }

  const figure =
      column === rookPosition.column &&
      row === rookPosition.row ? 'rook' :
          column === knightPosition.column &&
          row === knightPosition.row ? 'knight' : null;

  return (
    <div className={clsx(classes.cell, classes[color], figure === currentFigure && classes.current)}
      onClick={handleClick}
    >
      {figure === 'rook' ? (
          <Rook />
      ) : figure === 'knight' && (
          <Knight />
      )}
    </div>
  )
}
