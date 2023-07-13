import React from 'react';

export default function Form() {
  // inside parenthesesinclude setTopText, setBottomText, topText, bottomText
  return (
    <div className="input-field">
      <label htmlFor="topText">
        <input
          type="topText"
          placeholder="Enter your text"
          // value={topText}
          // onChange={(e) => setTopText(e.target.value)}
        />
      </label>
      <label htmlFor="bottomText">
        <input
          type="bottomText"
          placeholder="Enter your text"
          // value={bottomText}
          //   onChange={(e) => setBottomText(e.target.value)}
        />
      </label>
      <br />
      <button className="generateBTN">Generate meme</button>
      {/* <div className="meme-image">
        <img
          className="image"
          src="https://api.memegen.link/images/doge.png"
          alt="doge"
        />
      </div> */}
    </div>
  );
}

// For the select box (maybe separate component)

// export default function FruitPicker() {
//   return (
//     <label>
//       Pick a fruit:
//       <select name="selectedFruit">
//         <option value="apple">Apple</option>
//         <option value="banana">Banana</option>
//         <option value="orange">Orange</option>
//       </select>
//     </label>
//   );
// }
