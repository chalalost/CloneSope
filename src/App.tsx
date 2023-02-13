import { useState } from 'react'
import useRouteElements from './useRouteElements'

function App() {
  const [count, setCount] = useState(0)
  const routeElements = useRouteElements()
  return (
    <div >
      {routeElements}
    </div>
  )
}

export default App
