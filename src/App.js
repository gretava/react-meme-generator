import './App.css';
import { useState } from 'react';
import FormInput from './FormInput';
import Header from './Header';
import Images from './Images';

export default function App() {
  const images = [
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

  const [selectedImageId, setSelectedImageId] = useState(0);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  // const [selectedImageUrl, setSelectedImageUrl] = useState(images[0].value);
  const [generateMeme, setGenerateMeme] = useState(false);

  const handleSelectImage = (imageId) => {
    setSelectedImageId(imageId);
  };

  // const handleSelectImage = (imageId) => {
  //   setSelectedImageId(imageId);
  //   setSelectedImageUrl(images.find((image) => image.id === imageId).value);
  // };

  const handleGenerateMeme = () => {
    setGenerateMeme(true);
  };

  // const handleTopTextChange = (text) => {
  //   setTopText(text);
  // };

  // const handleBottomTextChange = (text) => {
  //   setBottomText(text);
  // };

  // const handleGenerateMeme = () => {
  // Modify the selected image URL by adding the text query parameters
  // const selectedImage = images[selectedImageId];
  // const textQuery = `?text=${encodeURIComponent(
  //   topText,
  // )}&bottom=${encodeURIComponent(bottomText)}`;
  // const generatedMemeUrl = `${selectedImage.value}${textQuery}`;
  // Set the selected image URL in your state
  // setSelectedImageUrl(images[selectedImageId].value);
  console.log('Generate Meme Button Clicked');
  // console.log(textQuery);

  // Set the generated meme URL in your state
  // setSelectedImageUrl(generatedMemeUrl);
  // };

  return (
    <div className="App">
      <Header />
      <FormInput
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
        onGenerateMeme={handleGenerateMeme} // Pass the generation function
      />
      <Images
        images={images}
        selectedImageId={selectedImageId}
        onSelectImage={handleSelectImage}
        topText={topText}
        bottomText={bottomText}
        // selectedImageUrl={selectedImageUrl} // Pass the selected image URL
        // generateMeme={generateMeme}
      />
      {/* <div className="MemeDisplay">
        <img src={selectedImageUrl} alt="Generated Meme" />
      </div> */}
    </div>
  );
}
