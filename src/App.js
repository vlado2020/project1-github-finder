import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'

class App extends Component {

  constructor(){
    super();
    console.log(123);
  }

  render() {
    return (

    <div className='App'> 
        <Navbar title="Github tragač" icon = 'fab fa-github' />
        <UserItem/>
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