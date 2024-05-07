
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PieChart3 = ({ data }) => {
  return (
    <PieChart
      data={data}
      lineWidth={50}
      paddingAngle={5}
      startAngle={-90}
      viewBoxSize={[100, 100]}
      label={({ dataEntry }) => dataEntry.title + ': ' + dataEntry.value}
      labelStyle={{
        fontSize: '5px',
        fontFamily: 'sans-serif',
        fill: '#fff',
      }}
    />
  );
};

export default PieChart3;
