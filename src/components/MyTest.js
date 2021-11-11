import React, { useState, useEffect, useMemo } from 'react'
import { Box } from '@mui/system'
import ColorModeRadio from './ColorModeRadio'
import { Counter } from '../features/counter/Counter'

// const audio = document.createElement('audio')
// audio.setAttribute('id', 'my-audio')


const MyTest = () => {
  const [myDOM, setMyDOM] = useState(null)

  const memoAudio = useMemo(() => {
    const audio = document.createElement('audio')
    audio.setAttribute('id', 'my-audio')
    return audio
  }, [])

  useEffect(() => {
    setMyDOM(memoAudio)
  }, [memoAudio])

  console.log(myDOM)

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
    </Box>
  )
}

export default MyTest