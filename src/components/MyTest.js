import React from 'react'
import { Button } from '@mui/material'
import LifeCircleDialog from './DialogTest/LifeCircleDialog'

const MyTest = props => {
  const [open, setOpen] = React.useState(false)
  const [isIn, setIsIn] = React.useState(false)

  const handleClickOpen = () => {
    setIsIn(true)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    // setIsIn(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      {
        isIn
          ? (
            <LifeCircleDialog
              open={open}
              handleClose={handleClose}
              setIsIn={setIsIn}
            />
          )
          : null
      }
    </div>
  )
}

export default MyTest