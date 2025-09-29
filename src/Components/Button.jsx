import React from 'react';
import '../style/Button.css';

const Button = ({ callApi, loading }) => {
  return (
    <div className='button'>
      <button onClick={callApi} disabled={loading}>
        {loading ? "Loading..." : "Click to generate a joke."}
      </button>
    </div>
  );
};

export default Button;
