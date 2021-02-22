import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";

const App =()=>{

  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
 


  // get single github user

  const getUser  =  async (username) =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}`);
    setUser(res.data)
    setLoading(false)
  }

  //get user repos

  const getUserRepos  =  async (username) =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    setRepos(res.data)
    setLoading(false)


  }

  //pretraga po imenu

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    
    setUsers([])
    setLoading(false);
  }
  //SetAlert

  const handleAlert = (poruka, type) => {
    setAlert({poruka, type});
    setTimeout(() => setAlert(null), 950);
  };

    return (
      <Router>
        <div className="App">
          <Navbar title="Github tražilica" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={handleAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About}/>
              <Route  exact path='/user/:login'
               render={props =>(
                  <User {...props} 
                  getUser={getUser}  
                  getUserRepos={getUserRepos}
                  user={user} 
                  repos={repos}
                  loading={loading}/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  
}
export default App;

// const name= 'Vladiša'
// const foo = ()=> "bar"
// return (
// <Fragment>
//   <h3>Tu je naslov</h3>
//   <h2>Doviđenja {name.toUpperCase()}</h2>
//   <h2>Adieu {foo()}</h2>
//   <h3>{this.met}</h3>

// </Fragment>
