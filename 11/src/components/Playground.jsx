import { Board } from "./Board"
import { Boxes } from "./Boxes"
import classes from './Playground.module.css'

export const Playground = () => {
  return (
    <div className={classes.playground}>
      <Board />
      <Boxes />
    </div>
  )
}
