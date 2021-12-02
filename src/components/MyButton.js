import React from 'react'
import { Button } from '@mui/material'
import logProps from './logProps'

const MyButton = React.forwardRef((props, ref) => {
  const onButtonClick = () => {
    props.setSomeState('xxx')
  }

  console.log('MyButton', props)

  return (
    <Button ref={ref} variant="contained" className="MyButton" onClick={onButtonClick}>
      {props.children}
    </Button>
  )
})

export default logProps(MyButton)