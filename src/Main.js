import React from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { ChartContainer } from './Chart.js';
import { ResultsGrid } from './Grid.js';


const Tabs = (props) => {
  const tabChanged = (e) => {
    setSelected(e.selected);
  };

  const ninety = () => {
    return window.innerWidth * 0.9;
  };

  const widthChanged = () => {
    setWidth(ninety() + 'px');
  };

  const [selected, setSelected] = React.useState(0);
  const [width, setWidth] = React.useState(ninety() + 'px');

  React.useEffect(() => {
    window.addEventListener('resize', widthChanged);
    return _ => {window.removeEventListener('resize', widthChanged)};
  });

  return (
    <TabStrip selected={selected} onSelect={tabChanged} className="Tabs">
      <TabStripTab title="Graph">
        <div className="ChartContainer" style={{ width: width }}>
          <ChartContainer
            data={props.data}
            filter={props.filter}
           />
         </div>
      </TabStripTab>
      <TabStripTab title="Data">
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
