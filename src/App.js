import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

import { ResultsGrid } from './Grid.js';
import { ChartContainer } from './Chart.js';
import data from "./data.json";

const App = () => {
  const [filter, setFilter] = React.useState({
    logic: 'and',
    filters: []
  });

  const cooked = data.map(result => {
    let newResult = {...result};
    newResult.dateTime = new Date(result.timestamp);
    newResult.download.megabytes = newResult.download.bytes / 1000000;
    newResult.upload.megabytes = newResult.upload.bytes / 1000000;
    return newResult;
  }).sort((a, b) => b.dateTime > a.dateTime ? 1 : -1);

  return (
    <div className="App">
      <section className="App-header-section">
        <p><strong>Historical Speedtest Results:</strong></p>
        <p>2219 County Route 47, Salem, NY</p>
      </section>
      <section className="App-chart-section">
        <div className="App-chart-container-outer">
          <div className="App-chart-container-inner">
          <ChartContainer data={cooked} />
          </div>
        </div>
      </section>
      <section className="App-grid-section">
        <div className="App-grid-container">
          <ResultsGrid 
           data={cooked}
           filter={filter}
           setFilter={setFilter}
          />
        </div>
      </section>
      <section className="App-footer-section">
	<div className="App-footer-container">
          <p>Data acquired using <a href="https://www.speedtest.net/apps/cli">Speedtest</a></p>
	</div>
      </section>
    </div>
  );
}

export default App;
