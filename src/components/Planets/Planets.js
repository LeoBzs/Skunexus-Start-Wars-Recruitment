import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '../Grid';

function Planets(){

  const [data, setData] = useState([]); 

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://swapi.dev/api/planets/"
      );
      setData(res?.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
const name = data.map(value => (
      <div className="content">
        <span className="value">Name: </span><span>{value.name}</span>
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

const population = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.population}</span>
    <br /> <br />
    </div>));

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
    values: [
      {
        'name': name,
        'rotation_period': rotation_period,
        'orbital_period': orbital_period,
        'diameter': diameter,
        'climate': climate,
        'gravity': gravity,
        'terrain': terrain,
        'surface_water': surface_water,
        'population': population
    }
    ],
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
      }
    ]
  }

return (
  <div className='App'>
  <Grid data={mapData} />
  </div>
);
};
export default Planets;