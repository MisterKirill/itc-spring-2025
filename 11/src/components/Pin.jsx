import classes from './Pin.module.css'
import clsx from 'clsx'

export const Pin = ({ color, value }) => {
  return (
    <div className={clsx(
      classes.pin,
      {[classes.orange]: color === 'orange'},
      {[classes.green]: color === 'green'},
    )}>
      <div className={classes.title}>
        { value }
      </div>
    </div>
  )
}
