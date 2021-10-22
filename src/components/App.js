import React from 'react'
import { Checkbox, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  '&.Mui-checked': {
    color: theme.palette.secondary.light,
  },
}))


class App extends React.Component {

  render() {
    return (
      <div>
        <CustomCheckbox defaultChecked />
        <Button>123</Button>
        <Button color="secondary">456</Button>
        <Button color="neutral" variant="contained">456</Button>
      </div>
    )
  }
}

export default App