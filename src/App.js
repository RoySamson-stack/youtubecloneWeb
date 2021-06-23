import {BrowserRouter, Route, Switch } from 'react-router-dom'
import SideBar from './components/sidenav'
import Home from './components/home'
import NavBar from './components/navbar'

function App() {
  return (
    <BrowserRouter>
      <SideBar/>
      <NavBar/>
      <hr className="pr-24 mt-2"/>
      <Switch>
        <Route component={Home} path="/home" exact />
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
