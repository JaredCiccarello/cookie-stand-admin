import React from 'react';
import { global } from 'styled-jsx/css';


export default function Table({location, minCust, maxCust, avgCookie}){
  return (
      // location.length > 0 ? (
      <table className="w-1/2 mx-auto my-4 border">
        <thead>
          <tr>
            <th>Location</th>
            <th>Min / Cust</th>
            <th>Max / Cust</th>
            <th>Avg Cookie / Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-black">location</td>
            <td>6am</td>
            <td>7am</td>
            <td>8am</td>
            <td>9am</td>
            <td>10am</td>
            <td>11am</td>
            <td>12pm</td>
            <td>01pm</td>
            <td>01pm</td>
            <td>03pm</td>
            <td>04pm</td>
            <td>05pm</td>
          </tr> 
          <tr>  
          <td className="p-2 border border-black">hourly_sales</td>
            <td>48</td>
            <td>42</td>
            <td>30</td>
            <td>24</td>
            <td>42</td>
            <td>24</td>
            <td>36</td>
            <td>42</td>
            <td>42</td>
            <td>48</td>
            <td>36</td>
            <td>42</td>
            <td>24</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Dubai</td>
            <td>11</td>
            <td>38</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Paris</td>
            <td>20</td>
            <td>38</td>
            <td>2.3</td>
          </tr>
          <tr>
            <td>Lima</td>
            <td>2</td>
            <td>16</td>
            <td>4.6</td>
          </tr>
        </tbody>
      </table>
  // ) : (
    // <h2>No Cookie Stands Available</h2>
  // )
  )
  
}