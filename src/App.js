import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

import { ResultsGrid } from './Grid.js';

const App = () => {
  return (
    <div className="App">
      <section className="App-header-section">
        <h1>Historical Data</h1>
      </section>
      <section className="App-grid-section">
        <div className="App-grid-container">
          <ResultsGrid />
        </div>
      </section>
    </div>
  );
}

export default App;
