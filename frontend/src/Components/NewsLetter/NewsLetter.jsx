import React, { useState } from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:4000/Submit', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setSubscribed(true);
            setEmail('');
            setError('');
        } else {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                setError(data.error || 'Something went wrong');
            } else {
                setError('Server returned an unexpected response');
            }
        }
    } catch (error) {
        setError('Something went wrong');
    }
};

const SubscriptionMessage = (subscribed)=> {
  return (
      <div>
          {subscribed ? (
              <p>Thank you for subscribing!</p>
          ) : (
              <p>Subscribe to stay updated</p>
          )}
      </div>
  );
}

  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p className="text" value="subscribed">{SubscriptionMessage()}</p>
      <div className="submit">
        <form onSubmit={handleSubmit}>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Exemple@gmail.com' required />
          <button type="submit">Subscribe</button>
        </form>
        {error && <p>{error}</p>}
     
      </div>
    </div>
  )
}

export default NewsLetter;
