import LayoutMain from './component/layout/Main';
import Slider from './component/sections/SliderSection';
import OptionsSection from './component/sections/OptionsSection';
import Hero from './component/sections/Hero';

function App() {
  return (
    <LayoutMain>
      <Slider />
      <OptionsSection />
      <Hero />
    </LayoutMain>
  );
}

export default App;
