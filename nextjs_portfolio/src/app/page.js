import Intro from './components/intro';
import LandingArea from './components/ladingArea';
import Projects from './components/projects';
import Contact from './components/contact';

const Home = () => {
  return (
    <div>
      <LandingArea />
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
