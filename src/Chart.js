import React from 'react';
import {
      Chart,
      ChartYAxis,
      ChartYAxisItem,
      ChartLegend,
      ChartSeries,
      ChartSeriesItem
} from '@progress/kendo-react-charts';
import { filterBy } from '@progress/kendo-data-query';



export const ChartContainer = (props) => {
  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          type="scatter"
          data={filterBy(props.data, props.filter)}
          xField="dateTime"
          yField="download.megabytes"
        />
        <ChartSeriesItem
          type="scatter"
          data={filterBy(props.data, props.filter)}
          xField="dateTime"
          yField="upload.megabytes"
        />
      </ChartSeries>
      <ChartYAxis>
        <ChartYAxisItem title={{ text: "Speed (mbps)" }} />
      </ChartYAxis>
      <ChartLegend />
    </Chart>
  );
};
