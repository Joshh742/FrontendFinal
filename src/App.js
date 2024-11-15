import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Section />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
