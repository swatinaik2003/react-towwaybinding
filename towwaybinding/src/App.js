import React, { useState } from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = {
      firstName,
      lastName,
      email,
    };

    console.log('Submitting form with data:', formData); // Debugging line

    try {
      const response = await fetch('https://your-api-url.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Debugging response details
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      const responseText = await response.text(); // Fetch the response text
      console.log('Response text:', responseText);

      if (response.ok) {
        setSuccess('Form submitted successfully!');
        setError('');
        setFirstName('');
        setLastName('');
        setEmail('');
      } else {
        // Try parsing the response as JSON, if it fails, use the text response
        let errorMessage;
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = `Failed to submit form: ${errorData.message || 'Unknown error'}`;
        } catch (e) {
          errorMessage = `Failed to submit form: ${responseText || 'Unknown error'}`;
        }
        console.error('Error response data:', responseText);
        setError(errorMessage);
        setSuccess('');
      }
    } catch (error) {
      console.error('Fetch error:', error); // Debugging line
      setError(`Error submitting form: ${error.message}`);
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Submit Your Info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UserForm;
