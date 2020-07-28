import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

import { ResultsGrid } from './Grid.js';

const App = () => {
  return (
    <div className="App">
      <section className="App-header-section">
        <p><strong>Historical Speedtest Results:</strong></p>
	<p>2219 County Route 47,  Salem, NY</p>
      </section>
      <section className="App-grid-section">
        <div className="App-grid-container">
          <ResultsGrid />
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
