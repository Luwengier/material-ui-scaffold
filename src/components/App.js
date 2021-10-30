import React from 'react'
import { Box } from '@mui/system'
import ColorModeRadio from './ColorModeRadio'
import withCustomizedTheme from './withCustomizedTheme'
import MyTest from './MyTest'


class App extends React.Component {

  render() {
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
        <MyTest />
      </Box>
    )
  }
}

export default withCustomizedTheme(App)