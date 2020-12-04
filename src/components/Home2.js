import React from 'react';
import axios from 'axios'
import '../assets/css/Home.css'
// const API = require('call-of-duty-api')();
const API = require('call-of-duty-api')({ platform: "battle" });


class HomeTwo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ""
    }

    this.getData = this.getData.bind(this);
  }

   async login(e) {
    e.preventDefault();
    try {
      const result = await API.login("jbarustin@gmail.com", "Justintime8");
      console.log('login')
    }
     catch(err){
      console.log('Error:' + err)
    }

  }

  async getData(e) {
    e.preventDefault();
    try {
        const result = await API.MWleaderboard(1, "psn");
        console.log("Data: " + result)
     } 
     catch(err) {
        console.log('Error:' + err)
     }
  }

  
  render() {
    return (
      <div className='Home'>
        <section>
           <button onClick={this.login}>Login</button>
           <button onClick={this.getData}>Get Data</button>
       </section>
     </div>
    );
  }
}

export default HomeTwo;