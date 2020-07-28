import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';


export const ResultsGrid = (props) => {
  const [paging, setPaging] = React.useState({
    skip: 0,
    take: 10,
  });

  const cooked = props.data.map(result => {
    let newResult = {...result};
    newResult.dateTime = new Date(result.timestamp);
    newResult.download.megabytes = newResult.download.bytes / 1000000;
    newResult.upload.megabytes = newResult.upload.bytes / 1000000;
    return newResult;
  }).sort((a, b) => b.dateTime > a.dateTime ? 1 : -1);

  const pageChanged = (e) => {
    setPaging({skip: e.page.skip, take: e.page.take});
  };

  const filterChanged = (e) => {
    props.setFilter(e.filter);
  };

  return (
    <Grid
    data={filterBy(cooked, props.filter).slice(paging.skip, paging.take + paging.skip)}
    pageable={true}
    onPageChange={pageChanged} 
    skip={paging.skip}
    pageSize={paging.take}
    total={filterBy(cooked, props.filter).length}
    filterable={true}
    filter={props.filter}
    onFilterChange={filterChanged}
    >
      <Column field="dateTime" title="Date/Time" format="{0:g}" filter="date" />
      <Column field="ping.latency" title="Ping (ms)" />
      <Column field="download.megabytes" title="Download (mbps)" />
      <Column field="upload.megabytes" title="Upload (mbps)" />
    </Grid>
  );
};
