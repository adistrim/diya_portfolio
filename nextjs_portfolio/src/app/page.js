import Intro from './components/intro';
import LandingArea from './components/ladingArea';
import Projects from './components/projects';

const Home = () => {
  return (
    <div>
      <LandingArea />
      <Intro />
      <Projects />
    </div>
  );
};

export default Home;
