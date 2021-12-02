import React, { useState, useRef } from 'react'
import { Box } from '@mui/system'
import ColorModeRadio from './ColorModeRadio'
import { Counter } from '../features/counter/Counter'
import { useGetPokemonByNameQuery } from '../slices/pokemonApiSlice'

import MyButton from './MyButton'

const MyTest = props => {
  const [someState, setSomeState] = useState('zzz')
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  const buttonRef = useRef(null)

  console.log(data)
  console.log(error)
  console.log(isLoading)

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