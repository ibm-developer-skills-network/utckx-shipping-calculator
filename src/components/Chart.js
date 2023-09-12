import React from 'react';

const Chart = ({ freightRates, packageWeightUnit }) => {
  return (
    <div className="chart-container">
      <h2>Shipping Rate Chart</h2>
      <table>
        <thead>
          <tr>
            <th>Package Weight</th>
            {/* Create a table column for Destination */}

            {/* Create a table column for Shipping Rate */}
            
          </tr>
        </thead>
        <tbody>
          {freightRates.map((rate, index) => (
            <tr key={index}>
              <td>{/* Complete: Display the package size and weight unit here */}</td>
              <td>{/* Complete: Display the destination here */}</td>
              <td>{/* Complete: Display the shipping rate here */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
