import React, { useState } from 'react';

function TrainSearch({ searchTrainById }) {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const trainId = parseInt(searchId);
    const result = searchTrainById(trainId);

    setSearchResult(result);
  };

  return (
    <div className="train-search">
      <h2>Search Train Schedule by ID</h2>
      <label>
        Train ID:
        <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          <h3>Search Result</h3>
          {searchResult ? (
            <p>
              Train {searchResult.trainNumber} - Departure: {searchResult.departureTime}, Arrival: {searchResult.arrivalTime}
            </p>
          ) : (
            <p>No matching train schedule found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TrainSearch;
