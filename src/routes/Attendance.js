import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../components/Navbar';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import '../components/Attendance.css'

const Attendance = () => {
  // State for the code generator
  const [code, setCode] = useState('');

  // State for the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // State for username and code input
  const [username, setUsername] = useState('');
  const [inputCode, setInputCode] = useState('');

  // Function to generate a random 6-digit code
  const generateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000);
    setCode(newCode);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if the input code matches the generated code
    if (inputCode !== code.toString()) {
      alert('Invalid code');
      return;
    }

    try {
      // Assuming you have an API endpoint to update the database with username and date
      const response = await axios.post('http://localhost:5000/attendance', {
        username,
        date: selectedDate.toISOString() // Convert date to ISO string for consistency
      });
      
      // Handle success response
      console.log('Attendance marked successfully:', response.data);
      
      // Clear input fields
      setUsername('');
      setInputCode('');
    } catch (error) {
      // Handle error
      console.error('Error marking attendance:', error);
      alert('Error marking attendance. Please try again.');
    }
  };

  // Render the component
  return (
    <div class="container-text-center">
      <Navbar></Navbar>
      <div className='title'>
      <h1>Attendance Page</h1>
      </div>
      <div className='date-selector' >
        {/* Date Selector (Only visible to admin) */}
        <label>Select Date:  </label>
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      </div>
      <div className='code-container'>
        {/* Code Generator (Only visible to admin) */}
        <button onClick={generateCode}>Generate Code</button>
        <p className='code'>Generated Code: {code}</p>
      </div>
      <div className='or'>
        {/* OR */}
        <p>OR</p>
      </div>
      <div className='submit-form'>
        {/* Form for code and username input */}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter Code" 
            value={inputCode} 
            onChange={e => setInputCode(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Enter Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
