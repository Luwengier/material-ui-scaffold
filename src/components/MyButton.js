import React from 'react'
import logProps from './logProps'

const MyButton = React.forwardRef((props, ref) => {
  const onButtonClick = () => {
    props.setSomeState('xxx')
  }

  console.log('MyButton', props)

  return (
    <button ref={ref} className="MyButton" onClick={onButtonClick}>
      {props.children}
    </button>
  )
})

export default logProps(MyButton)