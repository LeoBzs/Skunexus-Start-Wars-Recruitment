import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '../Grid';

const Films = () => {

  const [data, setData] = useState([]); 

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://swapi.dev/api/films/"
      );
      setData(res?.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  
const title = data.map(value => (
      <div className="content">
        <span className="value">Name: </span><span>{value.title}</span>
        <br /> <br />
        </div>));

const episode_id = data.map(value => (
  <div className="content">
    <span className="value">Id: </span><span>{value.episode_id}</span>
    <br /> <br />
    </div>));

const opening_crawl = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.opening_crawl}</span>
    <br /> <br />
    </div>));

const director = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.director}</span>
    <br /> <br />
    </div>));

const producer = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.producer}</span>
    <br /> <br />
    </div>));

const release_date = data.map(value => (
  <div className="content">
    <span className="value"></span><span>{value.release_date}</span>
    <br /> <br />
    </div>));

  const mapData = { 
    header: [
      'title',
      'episode_id',
      'opening_crawl',
      'director',
      'producer',
      'release_date'
    ],
    values: [
      {
        "title": title, 
        "episode_id": episode_id, 
        "opening_crawl": opening_crawl, 
        "director": director, 
        "producer": producer, 
        "release_date": release_date
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
  <div className='Films'>
  <Grid data={mapData} />
  </div>
);
};
export default Films;
