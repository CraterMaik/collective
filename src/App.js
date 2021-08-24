import LayoutMain from './component/layout/Main';
import Slider from './component/sections/SliderSection';
import OptionsSection from './component/sections/OptionsSection';
import ProductsSection from './component/sections/ProductsSection';
import Hero from './component/sections/Hero';

function App() {
  return (
    <LayoutMain>
      <Slider />
      <OptionsSection />
      <ProductsSection />
      <Hero />
    </LayoutMain>
  );
}

export default App;
