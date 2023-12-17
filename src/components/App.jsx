//import { useState } from 'react'
import Header from './header.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import '../styles/App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <Header />
        </div>
        <div>
            <WelcomeComponent />
        </div>
    </>
  )
}

export default App
