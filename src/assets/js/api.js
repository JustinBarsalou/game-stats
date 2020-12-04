const API = require('call-of-duty-api')();


// login
function login() {
    try {
        await API.login("username", "password");
        console.log('login');
    
     } catch(err) {
        console.log('Error:' + err)
    }

}

//get data
function getData() {
    try {
        const result = await API.MWleaderboard(1, "psn");
        console.log("Data: " + result)
     } 
     catch(err) {
        console.log('Error:' + err)
     }

}

login()
getData()