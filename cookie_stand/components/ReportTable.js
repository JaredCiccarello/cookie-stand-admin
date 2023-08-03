import React from 'react';
import  datahours  from '../hours'; // Make sure to import 'hours' correctly



export default function ReportTable({ }) {
  const hours = Array.from({ length: 13 }, (_, index) => {
    if (index === 0) return 'Location';
    else if (index <= 6) return `${index + 5}am`;
    else return `${index - 7}pm`;
  });
  const seattle = {hourly_sales: ["Seattle", 48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]}
  const datahours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  const calculateTotalCookiesPerHour = (hourIndex) => {
    let total = 0;
    hours.forEach((entry) => {
      // Simulate the number of customers for this hour
      const customersThisHour = Math.floor(
        Math.random() * (entry.maxCust - entry.minCust + 1) + entry.minCust
      );
      // Calculate the number of cookies sold for this hour
      total += customersThisHour * entry.avgCookie;
    });
    return total.toFixed(1);
  };

  const calculateTotalCookiesPerLocation = (location) => {
    let total = 0;
    hours.forEach((entry) => {
      if (entry.location === location) {
        total += (entry.avgCookie * (entry.maxCust + entry.minCust)) / 2;
      }
    });
    return total.toFixed(1);
  };
    console.log('hours', hours)
  return (
    <>
      {hours.length > 0 && (
        <table className="w-1/2 mx-auto my-4 border">
          <thead>
            <tr>
              {datahours.map((hour, index) => (
                <th key={index} className="font-bold">
                  {hour}
                </th>
              ))}
              <th className="font-bold">Totals</th>
            </tr>
          </thead>
          <tbody>
            {seattle.hourly_sales.map((entry, index) => (
            
                <td className="font-bold">{entry}</td>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold">
              <th>Totals</th>
              {/* {hours.slice(1).map((_, hourIndex) => (
                <td key={hourIndex}>{calculateTotalCookiesPerHour(hourIndex)}</td>
              ))}
              <td>{calculateTotalCookiesPerHour()}</td> */}
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
}