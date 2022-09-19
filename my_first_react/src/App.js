import React from 'react';

function App() {

  const [value, setValue] = React.useState('Promotional');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


  return (
    <>
    <div>
      <label>
      Card Set: 
        <select   value={value} onChange={handleChange}>
          <option value="Promotional">Promotional</option>
          <option value="The Fellowship of the Ring">The Fellowship of the Ring</option>
          <option value="Mines of Moria">Mines of Moria</option>
          <option value="Realms of the Elf-lords">Realms of the Elf-lords</option>
          <option value="The two Towers">The two Towers</option>
          <option value="Battle of helo's Deep">Battle of helo's Deep</option>
          <option value="Ents of Fangorn">Ents of Fangorn</option>
          <option value="The Return of the King">The Return of the King</option>
          <option value="Siege of Gondor">Siege of Gondor</option>
          <option value="Reflections">Reflections</option>
          <option value="Mount Doom">Mount Doom</option>
          <option value="Shadows">Shadows</option>
          <option value="Black Rider">Black Rider</option>
          <option value="Bloodlones">Bloodlones</option>
          <option value="Expanded Middle-earth">Expanded Middle-earth</option>
          <option value="The Hunters">The Hunters</option>
          <option value="The Wraith Collection">The Wraith Collection</option>
          <option value="Rise of Saruman">Rise of Saruman</option>
          <option value="Treachery & Deceit">Treachery & Deceit</option>
          <option value="Ages End">Ages End</option>
      </select>
    </label>
    <p>Selected set: {value}</p>
  </div>
    </>
  );
}

export default App;
