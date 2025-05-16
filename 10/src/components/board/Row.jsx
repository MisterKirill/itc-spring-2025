import classes from './Row.module.css'

export const Row = ({ children }) => {
  return (
    <div className={classes.row}>
      { children }
    </div>
  )
}
