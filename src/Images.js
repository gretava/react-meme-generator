import React, { useEffect, useState } from 'react';

function Images({
  images,
  selectedImageId,
  topText,
  bottomText,
  generateMeme,
}) {
  const [sliderData, setSliderData] = useState(images[0]);
  // const [generateMeme, setGenerateMeme] = useState(false); // New state

  // const handleGenerateMeme = () => {
  //   const textQuery = `?text=${encodeURIComponent(
  //     topText,
  //   )}&bottom=${encodeURIComponent(bottomText)}`;
  //   const generatedMemeUrl = `${sliderData.value}${textQuery}`;
  //   setSliderData({
  //     ...sliderData,
  //     value: generatedMemeUrl,
  //   });
  //   setGenerateMeme(false);
  // };
  // Use useEffect to update the selected image URL when the text or image changes
  // useEffect(() => {
  //   const selectedImage = images.find((image) => image.id === selectedImageId);
  //   setSliderData(selectedImage);
  // }, [selectedImageId, images]);

  // const handleCLick = (index) => {
  //   const selectedImage = images[index];
  //   setSliderData(selectedImage);
  // };

  // try number 3

  useEffect(() => {
    const selectedImage = images.find((image) => image.id === selectedImageId);
    setSliderData(selectedImage);
  }, [selectedImageId, images]);

  useEffect(() => {
    if (generateMeme) {
      const textQuery = `?text=${encodeURIComponent(
        topText,
      )}&bottom=${encodeURIComponent(bottomText)}`;
      const generatedMemeUrl = `${sliderData.value}${textQuery}`;
      setSliderData({
        ...sliderData,
        value: generatedMemeUrl,
      });
    }
  }, [generateMeme, sliderData, topText, bottomText]);

  return (
    // try number 3

    <div className="Images">
      <div className="flex-row">
        {images.map((data, i) => (
          <button
            type="button"
            key={data.id}
            onClick={() => setSliderData(data)}
          >
            <img
              src={data.value}
              alt={data.alt}
              style={{ width: 100, height: 70 }}
            />
          </button>
        ))}
      </div>
      <div className="selected-image">
        {sliderData && (
          <img
            src={sliderData.value}
            alt="Selected Meme"
            style={{ width: 500, height: 400 }}
          />
        )}
        {generateMeme && (
          <div>
            <div className="top-text">{topText}</div>
            <div className="bottom-text">{bottomText}</div>
          </div>
        )}
      </div>
      {/* <button className="generateBTN" onClick={handleGenerateMeme}>
        Generate meme
      </button> */}
    </div>

    // <div className="Images">
    //   <div className="flex-row">
    //     {images.map((data, i) => (
    //       <button
    //         type="button"
    //         key={data.id}
    //         onClick={() => handleCLick(data.id)}
    //       >
    //         <img
    //           src={data.value}
    //           alt={data.alt}
    //           style={{ width: 100, height: 70 }}
    //         />
    //       </button>
    //     ))}
    //   </div>
    //   <div className="selected-image">
    //     {sliderData && (
    //       <img
    //         src={sliderData.value}
    //         alt="Selected Meme"
    //         style={{ width: 500, height: 400 }}
    //       />
    //     )}
    //     {generateMeme && (
    //       <div>
    //         <div className="top-text">{topText}</div>
    //         <div className="bottom-text">{bottomText}</div>
    //       </div>
    //     )}
    //     <div className="top-text">{topText}</div>
    //     <div className="bottom-text">{bottomText}</div>
    //   </div>
    //   <button className="generateBTN" onClick={() => setGenerateMeme(true)}>
    //     Generate meme
    //   </button>

    // {/* <img
    //   src={sliderData.value}
    //   alt={images.alt}
    //   style={{ width: 500, height: 400 }}
    // />
    // <div className="flex-row">
    //   {images.map((data, i) => (
    //     <button
    //       type="button"
    //       key={data.id}
    //       onClick={() => handleCLick(i)}
    //       onKeyDown={() => handleCLick(i)}
    //     >
    //       <img
    //         src={data.value}
    //         alt={data.alt}
    //         style={{ width: 100, height: 70 }}
    //       />
    //     </button>
    //   ))}
    // </div> */}
    // </div>
  );
}

export default Images;
