import React, {useEffect} from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Alert} from './Alert'
import {SnackbarProps} from '@material-ui/core/Snackbar/Snackbar'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

interface SnackBarProps extends SnackbarProps {
  severity?: 'success' | 'info' | 'warning' | 'error'
  handleClose: Function
}

export const SnackBar: React.FunctionComponent<SnackBarProps> = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  
  useEffect(() => {
    setOpen(!!props.open)
  }, [props.open])

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    props.handleClose()
  }

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={props.autoHideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  )
}
