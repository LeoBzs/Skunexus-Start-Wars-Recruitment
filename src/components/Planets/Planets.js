import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '../Grid';

function Planets(){

  const [data, setData] = useState([]); 
  const [url, setURL] = useState(`https://swapi.dev/api/planets/`);

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setData(res?.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const mapData = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    values: [],
    actions: [
      {
        label: 'Go to Films',
        action: (row) => {   
        }
      },
      {
        label: 'Go to Residents',
        action: (row) => {   
        }
      },
      {
        label: 'Add new Planet!',
        action: (row) => {  
        }
      },
    ]
  }

function fetchPlanets(){

  const name = data.map(value => (
      <div>
      <span></span>
      <span>{value.name}</span>
      <br /> <br />
      </div>));

  const rotation_period = data.map(value => (
    <div className="content">
      <span className="value">Id: </span><span>{value.rotation_period}</span>
      <br /> <br />
      </div>));

  const orbital_period = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.orbital_period}</span>
      <br /> <br />
      </div>));
    
    const diameter = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.diameter}</span>
      <br /> <br />
      </div>));
    
    const climate = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.climate}</span>
      <br /> <br />
      </div>));
    
    const gravity = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.gravity}</span>
      <br /> <br />
      </div>));
    
    const terrain = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.terrain}</span>
      <br /> <br />
      </div>));
    
    const surface_water = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.surface_water}</span>
      <br /> <br />
      </div>));
    
    const population =
    data
    .map(value => (
      <div>
      <span>{value.population}</span>
      </div>));


// ------------------------------------------------------

    const names = Object.values(name);
    names.forEach((name, value) => { 
    const getsJson = 
  {
    'name': name,
    'rotation_period': '',
    'orbital_period': '',
    'diameter': '',
    'climate': '',
    'gravity': '',
    'terrain': '',
    'surface_water': '',
    'population': ''
  }
     mapData.values.push(getsJson); } );
  }

return (
  <div className='App'>
  {fetchPlanets()}
  <Grid data={mapData} />
  </div>
);
};
export default Planets;

/** ------------------------------------------------------------------------------------------------------
 * 'name': name,
    'rotation_period': rotation_period,
    'orbital_period': orbital_period,
    'diameter': diameter,
    'climate': climate,
    'gravity': gravity,
    'terrain': terrain,
    'surface_water': surface_water,
    'population': population




      function fetchPlanets(){

  const name = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.name}</span>
      <br /> <br />
      </div>));

  const rotation_period = data.map(value => (
    <div className="content">
      <span className="value">Id: </span><span>{value.rotation_period}</span>
      <br /> <br />
      </div>));

  const orbital_period = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.orbital_period}</span>
      <br /> <br />
      </div>));
    
    const diameter = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.diameter}</span>
      <br /> <br />
      </div>));
    
    const climate = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.climate}</span>
      <br /> <br />
      </div>));
    
    const gravity = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.gravity}</span>
      <br /> <br />
      </div>));
    
    const terrain = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.terrain}</span>
      <br /> <br />
      </div>));
    
    const surface_water = data.map(value => (
    <div className="content">
      <span className="value"></span><span>{value.surface_water}</span>
      <br /> <br />
      </div>));
    
    const population =
    data
    .map(value => (
      <div>
      <span>{value.population}</span>
      </div>));


// ------------------------------------------------------

    const names = Object.values(name);
    names.forEach((name, value) => { 
    const getsJson = 
  {
    'name': name,
    'population': population
  }
     mapData.values.push(getsJson); } );
  }
 */