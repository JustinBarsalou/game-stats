import '../assets/css/Home.css'
// const axios = require('axios');

const API = require('call-of-duty-api')();


function Home() {
  const log = process.env.REACT_APP_API_KEY;
  console.log(log);
  
  // const API_KEY = process.env.REACT_APP_API_KEY
  // const gamertag = 'kdkt_moist'
  // const platform = 'xbl'


  // fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/Chob%252321309/battle", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-key": API_KEY,
  //     "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/"+ {gamertag} + "/" + {platform}
  //   }
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // });


  

    return (
      <div className='Home'>
        <section>
          Hello i am section 
        </section>
      </div>

    );
    
  }


export default Home;
///////////////////////////////////////////////////////////////////////////////////////////////////////





// import React from 'react';
// import axios from 'axios'
// import '../assets/css/Home.css'
// const API = require('call-of-duty-api')();


// class Home extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       data: ""
//     }

//     this.getData = this.getData.bind(this);
//   }

//   async function login(e) {
//     e.preventDefault();
//     try {
//       // await API.login(<username>, <password>);
//       console.log('login')
//     }
//      catch(err){
//       console.log('Error:' + err)
//     }

//   }

//   async getData(e) {
//     e.preventDefault();

//   }

  
//   render() {
//     return (
//       <div className='Home'>
//         <section>
//            Hello i am section 
//        </section>
//      </div>
//     );
//   }
// }

// export default Home;
