import './Grid.css';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Example from '../Modal/Modal';

function Grid({data: {header = [], values = [], actions = []}}) {
  
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
                <Link to={`/residents/`} title={`check residents`} className='grid_link'>
                {label}
                </Link>
                }
                {label === 'Go to Films'  &&
                <Link to={`/films`} title={`check films`} className='grid_link'>
                {label}
                </Link>
                }
                {label === 'Add new Planet!'  &&
                <span className='grid_link'>
                {Example()}
                </span>
                }
                {label === 'Back to planets homepage'  &&
                <Link to={`/`} title={`back to planets`} className='grid_link'>
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
