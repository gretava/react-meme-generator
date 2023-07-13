import React, { useState } from 'react';

// import Images from './Images';

function ChooseMeme() {
  const [template, setTemplate] = useState();
}

function SelectMeme({ template, setTemplate }) {
  function chooseTemplate(e) {
    setTemplate(e.target.value);
  }

  return (
    <div>
      <label htmlFor="memeTemplate">Choose your template</label>
      <select value={template} onChange={chooseTemplate}>
        {/* <option value={money}>Take My Money</option> */}
        {/* <option value={ermg}>Ermahgerd girl</option>
        <option value={doge}>Doge</option>
            <option value={disastergirl}>Disaster Girl</option>
        <option value={distracted}>Distracted Boyfriend</option>
        <option value={scumbag}>Scumbag Steve</option> */}
      </select>
    </div>
  );
}

export default SelectMeme;
