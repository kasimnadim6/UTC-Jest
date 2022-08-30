import React from 'react';
import { useState } from 'react';

const Company = ({ name }) => {
  const [country, setCountry] = useState('');
  const inputHandler = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div data-testid="companyNameEL">
      Company name is: {name}
      <h2>Welcome to my Company's official website</h2>
      <p data-testid="employee-count" style={{ color: 'green' }}>
        Employee count 3,18,400
      </p>
      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={inputHandler}
      />
      <button className="btn" role="join-cognizant">
        Join
      </button>
    </div>
  );
};

export default Company;
