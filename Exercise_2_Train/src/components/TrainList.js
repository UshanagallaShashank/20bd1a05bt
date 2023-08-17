import React from 'react';

function TrainList({ trainSchedules }) {
  return (
    <div className="train-list">
      <h2>Train Schedules</h2>
      <ul>
        {trainSchedules.map((schedule, index) => (
          <li key={index}>
          <p>Train Name: {schedule.trainName}</p>
          <p>Train Number: {schedule.trainNumber}</p>
          <p>Departure Time: {schedule.departureTime.Hours}:{schedule.departureTime.Minutes}</p>
          <p>Price - Sleeper: {schedule.price.sleeper}, AC: {schedule.price.AC}</p>
          <p>Seats Available - Sleeper: {schedule.seatsAvailable.sleeper}, AC: {schedule.seatsAvailable.AC}</p>
          <p>Delayed By: {schedule.delayedBy} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainList;
