import Header from './components/Header'
import Sidenav from './components/sidenav'
import Recommended from './components/recommended'
import Videos from './components/videos'
import SearchPage from './components/searchpage'
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        {/*Header*/}
        <Header />
        <Switch>
          <Route component="" path="/search" exact>
            <div className="flex ">
              <Sidenav />
              <SearchPage />
            </div>
          </Route>
          <Route component="" path="/" exact>
            <div className="flex ">
              <Sidenav />
              <Videos />
            </div>
          </Route>
        </Switch>
      </Router>


    </div>
  )
}

export default App;
