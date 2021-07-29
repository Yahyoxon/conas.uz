import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import NewsPage from './Pages/News'
import Repairs from './Pages/Repairs'
import Contact from './Pages/Contact'
import Worker from './Pages/Worker.jsx'
import NewsSingle from './Pages/NewsSingle'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import { Context } from './context/Context'
import Admin from './Pages/Admin'
import Write from "./Pages/Write/Write";


function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/admin">{user ? <Admin /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/repairs" component={Repairs}></Route>
          <Route path="/news" component={NewsPage}></Route>
          <Route path="/worker" component={Worker}></Route>
          <Route path="/contacts" component={Contact}></Route>
          <Route path="/articles" component={NewsSingle}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Router>
    </>
  );


}

export default App;
