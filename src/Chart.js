import React from 'react';
import {
      Chart,
      ChartYAxis,
      ChartYAxisItem,
      ChartLegend,
      ChartSeries,
      ChartSeriesItem,
      ChartTitle
} from '@progress/kendo-react-charts';
import { RadioGroup } from '@progress/kendo-react-inputs';

import { filterBy } from '@progress/kendo-data-query';

const _options = [
  {label: 'Download', value: 'download', dataField: 'download.megabytes', ylabel: 'Speed (MB/sec)'},
  {label: 'Upload', value: 'upload', dataField: 'upload.megabytes', ylabel: 'Speed (MB/sec)'},
  {label: 'Ping', value: 'ping', dataField: 'ping.latency', ylabel: 'Latency (sec)'}
];

const options = _options.map(x => { return { label: x.label, value: x.value }});

const ControlPanel = (props) => {
  return (
    <div className="ControlPanel">
      <div className="ControlPanel-control">
        <strong>Avg. Value:&nbsp;</strong>
        {props.avg}
      </div>
      <div className="ControlPanel-control">
        <RadioGroup
         data={options}
         layout="horizontal"
         value={props.selected}
         onChange={props.selectedChanged}
        />
      </div>
    </div>
  );
};


export const ChartContainer = (props) => {
  const [selected, setSelected] = React.useState('download');
  const selectedOption = _options.find(x => x.value === selected);
  const data = filterBy(props.data, props.filter);
  const cumVal = data.reduce((acc, cur) => {
    const prefix = selectedOption.dataField.split(".")[0];
    const suffix = selectedOption.dataField.split(".")[1];
    acc += cur[prefix][suffix];
    return acc;
  }, 0);
  const N = data.length;
  const avgVal = Math.round(cumVal / N * 100) / 100;

  const selectedChanged = (e) => {
    setSelected(e.value);
  };

  return (
    <React.Fragment>
      <ControlPanel
       selected={selected}
       selectedChanged={selectedChanged}
       avg={avgVal}
       />
      <Chart>
        <ChartTitle text="Historical Speedtest Results" />
        <ChartSeries>
          <ChartSeriesItem
            type="scatter"
            data={data}
            xField="dateTime"
            yField={selectedOption.dataField}
            markers={{ border: {color: 'darkgreen' } }}
          />
        </ChartSeries>
        <ChartYAxis>
          <ChartYAxisItem title={{ text: selectedOption.ylabel }} />
        </ChartYAxis>
        <ChartLegend position="top" />
      </Chart>
    </React.Fragment>
  );
};
