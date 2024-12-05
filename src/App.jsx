import React from 'react';
import RuntimeRatingChart from "./charts/RuntimeRatingChart";
import MoviesByYearChart from './charts/MoviesByYearChart';
import GenreDistributionChart from "./charts/GenreDistributionChart";
import RatingChart from "./charts/RatingChart";
import TopHighestRatedMoviesBubbleChart from "./charts/TopHighestRatedMoviesBubbleChart";
import data from "./assets/data.json";
import Example from './charts/Example';

const App = () => {
  return <Example />;
  return (
    <div className="h-screen bg-gradient-to-r from-slate-100 to-slate-500 p-4">
      <div className="grid grid-cols-6 gap-6 h-full">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden col-span-2 h-full">
          <MoviesByYearChart data={data} />
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden col-span-2 h-full">
          <GenreDistributionChart data={data} />
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden col-span-2 h-full">
          <RatingChart data={data} />
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden col-span-3 h-full">
          <RuntimeRatingChart data={data} />
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden col-span-3 h-full">
          <TopHighestRatedMoviesBubbleChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
