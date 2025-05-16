import classes from './Bindings.module.css'
import { Bind } from './Bind'
import { useEffect } from 'react'
import { bindSlice } from '../../store/slices/bind';
import { useDispatch } from 'react-redux';
import { positionSlice } from '../../store/slices/position';

export const Bindings = () => {
  const { setBind } = bindSlice.actions;
  const { setPause } = positionSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    const bindHandler = (e) => {
    }

    document.addEventListener('keydown', bindHandler);

    return () => document.removeEventListener('keydown', bindHandler);
  }, []);

  return (
    <div className={classes.bindings}>
      <Bind direction="up" />
      <Bind direction="down" />
      <Bind direction="left" />
      <Bind direction="right" />
    </div>
  )
}
