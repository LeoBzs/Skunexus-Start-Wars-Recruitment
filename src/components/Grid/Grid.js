import './Grid.css';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Grid({data: {header = [], values = [], actions = []}}) {
  const [data, setData] = useState([]); 
  const [setActions] = useState([]); 

  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
            {!!actions.length && 
              <td className='gridActions'>
                {actions
                .map(({label, action}) => 
              <button onClick={() => action(row)}>

                {label === 'Go to Residents'  &&
                <Link to={`/residents/`} title={`goes to list`}>
                {label}
                </Link>
                }

              </button>)}
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
