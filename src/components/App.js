import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import withCustomizedTheme from './withCustomizedTheme'

const MyTest = lazy(() => import('./MyTest'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route exact path="/" element={<MyTest />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default withCustomizedTheme(App)