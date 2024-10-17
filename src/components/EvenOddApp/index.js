import React, { Component } from 'react';
import './index.css'

class EvenOddApp extends Component {
    state = {
      randomNumber: 0,
      message: '',
    };

  // Function to generate a random number between 1 and 100
  generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generates a number from 1 to 100
    this.setState({ randomNumber: randomNum });

    // Check if the number is even
    if (randomNum % 2 === 0) {
      this.setState({ message: 'Count is Even' });
    } else {
      this.setState({ message: 'Count is Odd' });
    }
  };

  render() {
    const { randomNumber, message } = this.state;

    return (
      <div className='container'>
          <div className='list-container'>
            <h1 className='count'>Count: {randomNumber}</h1>
            {message && <p className='message'>{message}</p>} {/* Display the message if it's not empty */}
            <button className='button' onClick={this.generateRandomNumber}>Increment</button>
            <p className='paragraph'>*Increase By Random Number between 0 to 100</p>
         </div>
      </div>
    );
  }
}
 
export default EvenOddApp;
