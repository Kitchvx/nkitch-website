import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Nav/>
      <div className="container mt-20 px-12 py-4">
        <Hero/>
        <About/>
        <Projects/>
      </div>
    </main>
  );
}
