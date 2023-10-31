import React, { useState } from 'react';

export default function FormInput() {
  // topText,
  // setTopText,
  // bottomText,
  // setBottomText,
  // onGenerateMeme,
  const [meme, setMeme] = useState('doge');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [generateMeme, setGenerateMeme] = useState(
    `https://api.memegen.link/images/doge.png`,
  );

  function generate(e) {
    e.preventDefault();
    let memeUrl = `https://api.memegen.link/images/${meme}.jpg`;

    if (topText) {
      memeUrl = `https://api.memegen.link/images/${meme}/${topText}.jpg`;
    }

    if (bottomText) {
      memeUrl = `https://api.memegen.link/images/${meme}/_/${bottomText}.jpg`;
    }

    if (topText && bottomText) {
      memeUrl = `https://api.memegen.link/images/${meme}/${topText}/${bottomText}.jpg`;
    }
    setGenerateMeme(memeUrl);
  }

  // const handleClick = () => {
  //   const url = generateMeme;
  // };

  return (
    <div className="input-field">
      <label htmlFor="topText">
        <input
          type="text"
          placeholder="Enter your text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
      </label>
      <label htmlFor="bottomText">
        <input
          type="text"
          placeholder="Enter your text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </label>
      <br />
      <button className="generateBTN" onClick={generate}>
        Generate meme
      </button>
    </div>
  );
}
