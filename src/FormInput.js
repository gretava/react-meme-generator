import React, { useState } from 'react';

export default function FormInput() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <div className="input-field">
      <label htmlFor="topText">
        <input
          type="topText"
          placeholder="Enter your text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </label>
      <label htmlFor="bottomText">
        <input
          type="bottomText"
          placeholder="Enter your text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </label>
      <br />
      <button className="generateBTN">Generate meme</button>
    </div>
  );
}
