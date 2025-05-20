import classes from './Bindings.module.css'
import { Bind } from './Bind'
import { useEffect } from 'react'
import { bindSlice } from '../../store/slices/bind';
import { useDispatch } from 'react-redux';
import { positionSlice } from '../../store/slices/position';

export const Bindings = () => {
  const { setBind, selectDirection } = bindSlice.actions;
  const { setPause } = positionSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    const bindHandler = (e) => {
      dispatch(setBind(e.key));
      dispatch(selectDirection(null));
      dispatch(setPause(false));
    }

    document.addEventListener('keydown', bindHandler);

    return () => document.removeEventListener('keydown', bindHandler);
  }, [dispatch, setBind, setPause, selectDirection]);

  return (
    <div className={classes.bindings}>
      <Bind direction="up" />
      <Bind direction="down" />
      <Bind direction="left" />
      <Bind direction="right" />
    </div>
  )
}
