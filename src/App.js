import {BrowserRouter, Route, Switch } from 'react-router-dom'
import SideNav from './components/sidenav'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <SideNav/>
      <Switch>
        <Route component={Home} path="home" exact />
        <Route component={Home} path="home" />
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
