import React from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { ChartContainer } from './Chart.js';
import { ResultsGrid } from './Grid.js';


const Tabs = (props) => {
  const [selected, setSelected] = React.useState(0);
  const tabChanged = (e) => {
    setSelected(e.selected);
  };
  const width = '800px';

  return (
    <TabStrip selected={selected} onSelect={tabChanged} className="Tabs">
      <TabStripTab title="Chart" className="Tabs-strip">
        <div className="ChartContainer" style={{ width: width }}>
          <ChartContainer
            data={props.data}
            filter={props.filter}
           />
         </div>
      </TabStripTab>
      <TabStripTab title="Grid">
        <ResultsGrid
          data={props.data}
          filter={props.filter}
         />
      </TabStripTab>
    </TabStrip>
  );
};

export const Main = (props) => {
  return (
    <main className="Main">
      <Tabs 
        data={props.data}
        filter={props.filter}
       />
    </main>
  );
};
