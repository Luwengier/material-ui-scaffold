import React from 'react'

// function logProps(Component) {
//   class LogProps extends React.Component {
//     componentDidMount() {
//       console.log('logProps:', this.props);
//     }

//     componentDidUpdate(prevProps) {
//       console.log('old props:', prevProps);
//       console.log('logProps:', this.props);
//     }

//     render() {
//       const { forwardedRef, ...rest } = this.props;

//       // Assign the custom prop "forwardedRef" as a ref
//       return <Component ref={forwardedRef} {...rest} />;
//     }
//   }

//   // Note the second param "ref" provided by React.forwardRef.
//   // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
//   // And it can then be attached to the Component.
//   return React.forwardRef((props, ref) => {
//     return <LogProps {...props} forwardedRef={ref} />;
//   });
// }

function logProps(Component) {
  const LogProps = React.forwardRef((props, ref) => {
    React.useEffect(() => {
      console.log('logProps', props)
    })

    const { forwardedRef, ...rest } = props

    return <Component ref={ref} {...rest} />
  })

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return LogProps
}


export default logProps