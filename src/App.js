import React from 'react';
import './App.scss';

import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';

import data from "./data.json";

const App = () => {
  const [filter] = React.useState({
    logic: 'and',
    filters: []
  });

  const cooked = data.filter(
	    result => result.type == "result"
          ).map(result => {
    let newResult = {...result};
    newResult.dateTime = new Date(result.timestamp);
    newResult.download.megabytes = newResult.download.bytes / 1000000;
    newResult.upload.megabytes = newResult.upload.bytes / 1000000;
    return newResult;
  }).sort((a, b) => b.dateTime > a.dateTime ? 1 : -1);

  return (
    <div className="App">
      <Header />
      <Main 
       data={cooked}
       filter={filter}
       />
      <Footer />
    </div>
  );
}

export default App;
