import React, { Component } from 'react';
import firebase from './firebase'
// import Login from './Login'
import DailyBooking from './DailyBooking'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      email:null,
      dates: []
    }
  }

  componentDidMount(){

    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Sept", "Nov", "Dec"]

    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    //get current date - booking a month ahead

    const numbers = [ 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']
    
    let numberString = ''
    const today = new Date();
    let numberedDate = today.getDate()

    if(numberedDate>9){
      const dateIndex = numberedDate.split('')[1]
      numberString = numbers[dateIndex]
    }else{
      numberString = numbers[numberedDate]
    }

    //Add one for the next month (Bookings for one month ahead)
    const monthIndex = today.getMonth() + 1
    //get weekday in a number form
    
    
    //loop for the week

    const dateArray = [...Array(7)]

    dateArray.forEach((_,index)=>{
  //DEALING WITH DAYS THAT GO PAST MONTH???
        numberedDate = today.getDate() + index
        
        const dayIndex = new Date(`${months[monthIndex]} ${numberedDate}, ${today.getFullYear()}`).getDay()
        const date = weekdays[dayIndex] + " " + numberedDate + numberString + " " + months[monthIndex]
        dateArray[index] = date

    })

    this.setState({
      dates: dateArray
    })

    //skip over saturday and sunday
    //every week , arrow to show the next week
  }

  componentDidUpdate(){

  }

  handleSubmit = (email) => {

    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'https://www.example.com/finishSignUp?cartId=1234',
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'example.page.link'
    };

    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function() {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
      });
  }
  
  render(){
    return (
      <div>
        {/* {this.state.user 
        ?
        <div>
          <h1>Silofit</h1>
          <p>{this.state.email}</p>
          <DailyBooking
            date={this.state.date}
          />
        </div>
        :
        <Login
          handleSubmit={this.handleSubmit}
        />
        } */}

        <div>
          <h1>Silofit</h1>
          <p>{this.state.email}</p>
          <DailyBooking
            dates={this.state.dates}
          />
        </div>
      </div>
    )
  }
}

export default App;
