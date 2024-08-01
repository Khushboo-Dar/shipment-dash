import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";


const RenderPieChart = ({ title, shipments }) => {
  function convertToDataArray(stateObject, colorPalette) {
    // Define a color palette if not provided
    const defaultColorPalette = [
      "#6B120A",
      "#EB5D50",
      "#F7A668",
      "#7BB896",
      "#d81b60",
      "#1073E6",
      "#856562",
    ];

    const colors = colorPalette || defaultColorPalette;

    // Sort the entries by value in descending order
    const sortedEntries = Object.entries(stateObject).sort(
      (a, b) => b[1] - a[1]
    );

    // Take the top 6 entries
    const topEntries = sortedEntries.slice(0, 6);

    // Sum the remaining entries for 'OTHER'
    const otherValue = sortedEntries
      .slice(6)
      .reduce((sum, entry) => sum + entry[1], 0);

    // Create the data array
    const dataArray = topEntries.map(([name, value], index) => ({
      name,
      value,
      color: colors[index % colors.length],
    }));

    // Add 'OTHER' if there are more than 6 entries
    if (otherValue > 0) {
      dataArray.push({
        name: "OTHER",
        value: otherValue,
        color: colors[6], // Use the last color for 'OTHER'
      });
    }

    return dataArray;
  }

  const [data, setData] = useState(null);
  useEffect(() => {
    if (shipments) setData(prev => convertToDataArray(shipments))
  }, []);

  return (
    <div className="pie-chart">
      {data && (
        <>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              innerRadius={70}
              outerRadius={120}
              labelLine={false}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <h3>{title}</h3>
          <div className="custom-legend">
            {data.map((entry, index) => (
              <div key={`legend-${index}`} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span className="legend-text">{entry.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RenderPieChart;
