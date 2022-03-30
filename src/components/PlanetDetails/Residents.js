import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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

  const mapData = () => {
    if(data && data.length > 0) {
       return (
         <>
          {data.map(item => (
            <div className="itemContainer" key={item.name}>
              <div className="image"><img src="" alt=""/></div>

              <div className="content">
                <span className="title">Name: </span><span className="name">{item.name}</span>
                <br />
                <span className="title">Birthyear: </span><span className="name">{item.birth_year}</span>
                <br />
                <span className="title">Homeworld: </span><span className="name">{item.homeworld}</span>
              </div>
            </div>
          ))} 
        </>
       )
    } 
  }

 return (
    <div className="container"> 
       {mapData()}
	   <Link to={`/`} title={`return to planet details list`} className="returnButton">
		<h3>Return</h3>
	    </Link>
    </div>
 );
}

export default Residents;

/*
grid

{actions.splice(1) &&
                <Link to={`/residents/`} title={`goes to list`}>
                {label}
                </Link>
                }
*/