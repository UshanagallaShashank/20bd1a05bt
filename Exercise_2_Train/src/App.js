import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TrainList from './components/TrainList';
import TrainSearch from './components/TrainSearch';

export default function App() {
 
  
 
  const [trainSchedules, setTrainSchedules] = useState([]);
const [token,settoken]=useState("")

useEffect(() => {
  // Fetch authentication token on component mount
  fetchAuthToken();
}, []);

const fetchAuthToken = async () => {
  try {
    const response = await fetch('http://20.244.56.144/train/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "companyName": "Shashank",
        "clientID": "e70c9b7c-7a6a-4202-9bac-3bb04b6adb05",
        "clientSecret": "elNipGLXawNpUCRN",
        "ownerName": "Shashank",
        "ownerEmail": "shashanknani1312@gmail.com",
        "rollNo": "20bd1a05bt"
      })
    });

    if (response.ok) {
      const data = await response.json();
      // settoken(data.access_token);
      fetchTrainSchedules(data.access_token)
    }
  } catch (error) {
    console.error('Error fetching authentication token:', error);
  }
};
const fetchTrainSchedules = async (token) => {
  try {
    const response = await fetch('http://20.244.56.144/train/trains', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":`Bearer ${token}`
      },
      
    });
          const data = await response.json();
    console.log(data)
    // Assuming the response is an object with a "data" property containing the array
   
      setTrainSchedules(data);
   
  } catch (error) {
    console.error('Error fetching train schedules:', error);
  }
};
  // useEffect(() => {
  //   fetchTrainSchedules();
  // }, [ token]);

 
  const searchTrainById = async (trainId) => {
    try {
      const response = await fetch(`http://20.244.56.144/train/trains/${trainId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching for train schedule:', error);
      return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <TrainList trainSchedules={trainSchedules} />
      {/* <TrainSearch searchTrainById={searchTrainById} /> */}
    </div>
  );
}
