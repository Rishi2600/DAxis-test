import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Industries from "../sections/Industries";
import WhyUs from "../sections/WhyUs";
import Clients from "../sections/Clients";
import Testimonials from "../sections/Testimonials";
import Team from "../sections/Team";

export default function Home() {
  const location = useLocation();

  // When navigating from another route (e.g. /contact → click "About" in nav),
  // React Router passes { state: { scrollTo: "about" } }. We honour that here.
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Small delay so the DOM has painted
      const t = setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Clients />
      <Testimonials />
      <Team />
    </>
  );
}