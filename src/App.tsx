/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import IntroVideo from './components/IntroVideo';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';
import FAB from './components/FAB';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-sbi-blue/20 selection:text-sbi-dark">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <IntroVideo />
        <About />
        <Services />
        <Location />
      </main>
      <Footer />
      <FAB />
    </div>
  );
}
