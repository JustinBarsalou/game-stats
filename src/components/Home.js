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
