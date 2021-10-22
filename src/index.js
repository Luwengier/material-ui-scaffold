import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { orange } from '@mui/material/colors';
import App from './components/App'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#cb115f',
    },
    secondary: {
      main: orange[500],
    },
    neutral: {
      main: '#64748B',
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
)