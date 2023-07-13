import './App.css';
import FormInput from './FormInput';
// import { useState } from 'react';
import Header from './Header';
import Images from './Images';
import SelectMeme from './SelectMeme';

export default function App() {
  return (
    <div className="App">
      <Header />
      <FormInput />
      <SelectMeme />
      <Images />
    </div>
  );
}
