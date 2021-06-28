import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Sidenav from './components/sidenav'
import Recommended from './components/recommended'

function App() {
  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="flex">
       <Sidenav/>
        <Recommended />
      </div>
    </div>
  )
}

export default App;
