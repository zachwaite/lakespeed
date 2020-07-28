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
  const [paging, setPaging] = React.useState({
    skip: 0,
    take: 10,
  });

  const pageChanged = (e) => {
    setPaging({skip: e.page.skip, take: e.page.take});
  };

  return (
    <Grid
    data={cooked.slice(paging.skip, paging.take + paging.skip)}
    pageable={true}
    onPageChange={pageChanged} 
    skip={paging.skip}
    pageSize={paging.take}
    total={cooked.length}
    >
      <Column field="dateTime" title="Date/Time" format="{0:g}" />
      <Column field="ping.latency" title="Ping (ms)" />
      <Column field="download.megabytes" title="Download (mbps)" />
      <Column field="upload.megabytes" title="Upload (mbps)" />
    </Grid>
  );
};
