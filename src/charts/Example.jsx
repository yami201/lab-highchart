import Chart from "./Chart";


// Sample data for the column chart
const data = [
  { year: 2010, movies: 10 },
  { year: 2011, movies: 15 },
  { year: 2012, movies: 20 },
  { year: 2013, movies: 12 },
  { year: 2014, movies: 17 }
];

const Example = () => {
  // Prepare the chart options
  const options = {
    chart: {
      type: 'column', // Column chart type
    },
    title: {
      text: 'Movies Released Per Year', // Title of the chart
    },
    xAxis: {
      categories: data.map((item) => item.year), // X-axis labels are the years
      title: {
        text: 'Year', // Label for the x-axis
      },
    },
    yAxis: {
      title: {
        text: 'Number of Movies', // Label for the y-axis
      },
    },
    series: [
      {
        name: 'Movies', // Name of the series
        data: data.map((item) => item.movies), // Data for the column chart
      },
    ],
  };

  return <Chart options={options} />;
};

export default Example;
