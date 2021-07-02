import Header from './components/Header'
import Sidenav from './components/sidenav'
import Recommended from './components/recommended'
import Videos from './components/videos'
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom"

function App() {
  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="flex ">
        <Sidenav />
          <Videos />
      </div>
     
    </div>
  )
}

export default App;
