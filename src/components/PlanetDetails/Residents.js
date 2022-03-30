import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '../Grid';

const Residents = () => {

  const [data, setData] = useState([]); 

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://swapi.dev/api/people/"
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

const height = data.map(value => (
  <div className="content">
    <span className="value">Height: </span><span>{value.height}</span>
    <br /> <br />
    </div>));

const mass = data.map(value => (
  <div className="content">
    <span className="value">Mass: </span><span>{value.mass}</span>
    <br /> <br />
    </div>));

const hair_color = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.hair_color}</span>
    <br /> <br />
    </div>));

const skin_color = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.skin_color}</span>
    <br /> <br />
    </div>));

const eye_color = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.eye_color}</span>
    <br /> <br />
    </div>));

const birth_year = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.birth_year}</span>
    <br /> <br />
    </div>));

const gender = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.gender}</span>
    <br /> <br />
    </div>));

  const mapData = { 
    header: [
      'name', 
      'height',
      'mass', 
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
      'gender'
    ],
    values: [
      {
        "name": name, 
        "height": height, 
        "mass": mass, 
        "hair_color": hair_color, 
        "skin_color": skin_color, 
        "eye_color": eye_color, 
        "birth_year": birth_year, 
        "gender": gender
    }
    ],
    actions: [
      {
        label: 'Back to planets homepage',
        action: (row) => {   
        }
      },
    ]
  }
return (
  <div className='Residents'>
  <Grid data={mapData} />
  </div>
);
};
export default Residents;