import React, { Component} from "react";
import "./App.css";
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'

class App extends Component {

  state = {
    users: [],
    loading: false
  }


//početni useri
async componentDidMount() {
  this.setState({loading: true})
  const res  = await axios.get('https://api.github.com/users')
  this.setState({users: res.data, loading: false})
}


//search Github users

searchUsers = async (text)=>{
  this.setState({loading: true})
  const res  = await axios.get(`https://api.github.com/search/users?q=${text}`)
  this.setState({users: res.data.items, loading: false})
}


// Clear users from state
clearUsers = () => this.setState({ users: [], loading: false });



  render() {
    return (

    <div className='App'> 
        <Navbar title="Github tragač" icon = 'fab fa-github' />
        <div className='container'>

          <Search 
            searchUsers = {this.searchUsers}
            clearUsers = {this.clearUsers}
            showClear = {this.state.users.length>0 ? true : false}
          
          />
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
        
    </div>

    

    );
 }
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