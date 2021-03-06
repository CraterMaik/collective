import LayoutMain from './component/layout/Main';
import Slider from './component/sections/SliderSection';
import OptionsSection from './component/sections/OptionsSection';
import ProductsSection from './component/sections/ProductsSection';
import RegisterSection from './component/sections/RegisterSection';
import ClientsSection from './component/sections/ClientsSection';
import AboutSection from './component/sections/AboutSection';
import ContactSection from './component/sections/ContactSection';
import BlogSection from './component/sections/BlogSection';

function App() {
  return (
    <LayoutMain>
      <Slider />
      
      <OptionsSection />
      <ProductsSection />
      <BlogSection />
      <RegisterSection />
      <ClientsSection />
      <AboutSection />
      <ContactSection />
      
    </LayoutMain>
  );
}

export default App;
