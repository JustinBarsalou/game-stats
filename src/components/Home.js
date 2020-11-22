import '../assets/css/Home.css'
function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const options = {
    method: 'GET',
    url: 'https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/Chob%252321309/battle',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
    }
  };


    return (
      <div className='Home'>
        <section>
          Hello This is Section
        </section>
      </div>

    );
    
  }


export default Home;