import React from "react";
import React from "./components/about";
import React from "./components/contact";
import React from "./components/footer";
import React from "./components/header";
import React from "./components/navbar";
import React from "./components/projects";

import './App.css';

export default function App() {
  return (
    <main className= "text-gray-400 bg-gray-900 body-fonts">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
      <Contact />
    </main>
  );
}

export default App;
