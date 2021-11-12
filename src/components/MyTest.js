import React, { useState, useRef } from 'react'
import { Box } from '@mui/system'
import ColorModeRadio from './ColorModeRadio'
import { Counter } from '../features/counter/Counter'

import MyButton from './MyButton'

// const audio = document.createElement('audio')
// audio.setAttribute('id', 'my-audio')
const MyTest = props => {
  const [someState, setSomeState] = useState('zzz')
  const buttonRef = useRef(null)

  console.log(buttonRef)
  console.log(props)

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <ColorModeRadio />
      <Counter />
      <MyButton
        ref={buttonRef}
        someState={someState}
        setSomeState={setSomeState}
      >
        I am Button
      </MyButton>
    </Box>
  )
}

export default MyTest