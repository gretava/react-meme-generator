import React, { useState } from 'react';

function Images() {
  const urls = [
    {
      id: 0,
      value: 'https://api.memegen.link/images/doge.png',
      alt: 'doge meme',
    },
    {
      id: 1,
      value: 'https://api.memegen.link/images/ggg.png',
      alt: 'good guy greg meme',
    },
    {
      id: 2,
      value: 'https://api.memegen.link/images/money.png',
      alt: 'fry take my money meme',
    },
    {
      id: 3,
      value: 'https://api.memegen.link/images/disastergirl.png',
      alt: 'disaster girl meme',
    },
    {
      id: 4,
      value: 'https://api.memegen.link/images/success.png',
      alt: 'success kid meme',
    },
    {
      id: 5,
      value: 'https://api.memegen.link/images/facepalm.png',
      alt: 'faceplam meme',
    },
  ];

  const [sliderData, setSliderData] = useState(urls[0]);
  const handleCLick = (index) => {
    console.log(index);
    const slider = urls[index];
    setSliderData(slider);
  };

  return (
    <div className="Images">
      <img
        src={sliderData.value}
        alt={urls.alt}
        style={{ width: 500, height: 400 }}
      />
      <div className="flex-row">
        {urls.map((data, i) => (
          <button
            type="button"
            key={data.id}
            onClick={() => handleCLick(i)}
            onKeyDown={() => handleCLick(i)}
          >
            <img
              src={data.value}
              alt={data.alt}
              style={{ width: 100, height: 70 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Images;
