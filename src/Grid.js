import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import raw from './data.json';

const cooked = raw.map(result => {
  let newResult = {...result};
  newResult.dateTime = new Date(result.timestamp);
  newResult.download.megabytes = newResult.download.bytes / 1000000;
  newResult.upload.megabytes = newResult.upload.bytes / 1000000;
  return newResult;
}).sort((a, b) => b.dateTime > a.dateTime ? 1 : -1);


export const ResultsGrid = (props) => {
  return (
    <Grid
    data={[...cooked]}
    >
      <Column field="dateTime" title="Date/Time" format="{0:g}" />
      <Column field="ping.latency" title="Ping (ms)" />
      <Column field="download.megabytes" title="Upload (mbps)" />
      <Column field="upload.megabytes" title="Upload (mbps)" />
    </Grid>
  );
};
