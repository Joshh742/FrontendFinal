import TopPicks from "../TopPicks";
import PopularMovies from "../PopularMovies/Index";
import TrendingMovies from "../TrendingMovies";
import Suggested from "../Suggested";
import Parallex from "../Parallex";
import Trending from "../Trending";
import Recommended from "../Recommended";

const Hero = () => {
  return (
    <div className="main-content">
      <TopPicks />
      <PopularMovies />
      <TrendingMovies />
      <Suggested />
      <Parallex />
      <Trending />
      <Recommended />
    </div>
  );
};

export default Hero;
