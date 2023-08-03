import React from 'react';


export default function ReportTable({ datahours }) {
  const hours = Array.from({ length: 13 }, (_, index) => {
    if (index === 0) return 'Location';
    else if (index <= 6) return `${index + 5}am`;
    else return `${index - 7}pm`;
  });

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

  return (
    <>
      {hours.length > 0 && (
        <table className="w-1/2 mx-auto my-4 border">
          <thead>
            <tr>
              {hours.map((hour, index) => (
                <th key={index} className="font-bold">
                  {hour}
                </th>
              ))}
              <th className="font-bold">Totals</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((entry, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="font-bold">{entry.location}</td>
                {hours.slice(1).map((_, hourIndex) => (
                  <td key={hourIndex}>{calculateTotalCookiesPerHour(hourIndex)}</td>
                ))}

                <td>{calculateTotalCookiesPerLocation(entry.location)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold">
              <th>Totals</th>
              {hours.slice(1).map((_, hourIndex) => (
                <td key={hourIndex}>{calculateTotalCookiesPerHour(hourIndex)}</td>
              ))}
              <td>{calculateTotalCookiesPerHour()}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
}