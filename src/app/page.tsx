// app/page.tsx
import Header from './components/Header';
import Section1 from './components/Seccion1';
import Section2 from './components/Seccion2';
import Section3 from './components/Seccion3';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}
