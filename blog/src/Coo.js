import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div>
      <h1>Fetched Data</h1>
      <ul>
      
      {data.map(item => (
        <div>
          <li key={item.id}>{item.title}</li>
          <li key={item.id}>{item.body}</li>
          </div>
    
        ))}
      </ul>
    </div>
    </>
  );
};

export default DataFetchingComponent;
