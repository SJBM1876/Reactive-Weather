import React, { useState } from 'react'; // Import useState


const Form = ({ location, setLocation, typedLocation, setTypedLocation }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setLocation(typedLocation); // Update location state with typed input
    setTypedLocation(''); // Reset typedLocation to empty string
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input type="text" value={typedLocation} onChange={(e) => setTypedLocation(e.target.value)} />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;