import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Sidenav from './components/sidenav'
import Recommended from './components/recommended'
import Videos from './components/videos'

function App() {
  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="flex">
        <Sidenav />
        <Recommended />
       <Videos />
      </div>
    </div>
  )
}

export default App;
