import React from 'react';
import Select from 'react-select';
import './Form.css';

export const Form = () => {
  const options = [
    { value: 'desert', label: 'desert' },
    { value: 'grasslands, mountains', label: 'grasslands, mountains' },
    { value: 'jungle, rainforests', label: 'jungle, rainforests' },
    { value: 'tundra, ice caves, mountain ranges', label: 'tundra, ice caves, mountain ranges' },
    { value: 'swamp, jungles', label: 'swamp, jungles' },
    { value: 'gas giant', label: 'gas giant' },
    { value: 'grassy hills, swamps, forests, mountains', label: 'grassy hills, swamps, forests, mountains' },
    { value: 'ocean', label: 'ocean' },
    { value: 'cityscape, mountains', label: 'cityscape, mountains' }
  ]
  return (
    <form>
      <div className="form-group">
        <label className='form-label' htmlFor="name">Name</label>
        <input className="form-control" id="name" placeholder='name your planet'/>
      </div>
      <br></br>
      <div className="form-group">
        <label className='form-label' htmlFor="rotation_period">Rotation period</label>
        <input type="rotation_period" className="form-control" id="rotation_period" placeholder="Enter rotational period"/>
      </div>
      <br></br>
      <div className="form-group">
        <label className='form-label' htmlFor="orbital_period">Orbital period</label>
        <input id="orbital_period" className="form-control" placeholder='Enter orbitational period'/>
      </div>
      <br></br>
      <div className="form-group">
        <label className='form-label' htmlFor="diameter">Diameter</label>
        <input id="diameter" placeholder="Enter diameter" className="form-control"/>
      </div>
      <br></br>
      <div className="form-group">
        <label className='form-label' htmlFor="name">Climate</label>
        <input className="form-control" id="climate" placeholder='Enter climate' />
      </div>
      <br></br>
      <div className="form-group">
        <label className='form-label' htmlFor="gravity">gravity</label>
        <input className="form-control" id="gravity" placeholder="Enter gravity"/>
      </div>
      <br></br>
      <div className="form-group">
        <label className='form-label' htmlFor="terrain">Terrain</label>
        <Select className="terrain_dropdown" id="terrain" options={options} />
      </div>
      <br></br>
      <div className="form-group">
        <label className='form-label' htmlFor="surface_water">surface water</label>
        <input className="form-control" id="surface_water" placeholder="enter surface water"/>
      </div>
      <br></br>
      <div className="form-group">
        <button className='submit-form' type="submit">
          Submit
        </button>
      </div>
      <br></br>
    </form>
  );
};
export default Form;
