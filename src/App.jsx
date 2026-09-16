import Header from './components/Header'
import Hero from './components/Hero'
import DemoCart from './components/DemoCart'
import NicheSelector from './components/NicheSelector'
import CaseGidrie from './components/CaseGidrie'
import Comparison from './components/Comparison'
import SheetManagement from './components/SheetManagement'
import Services from './components/Services'
import Process from './components/Process'
import Bonus from './components/Bonus'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <Header />
      <main>
        <Hero />
        <DemoCart />
        <NicheSelector />
        <CaseGidrie />
        <Comparison />
        <SheetManagement />
        <Services />
        <Process />
        <Bonus />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
