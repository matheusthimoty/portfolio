import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseGidrie from './components/CaseGidrie';
import Comparison from './components/Comparison';
import DemoCart from './components/DemoCart';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseGidrie />
        <Comparison />
        <DemoCart />
        <Process />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}