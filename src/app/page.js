<script src="http://localhost:8097"></script>
import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Nav/>
      <div className="container mx-auto px-12 py-4">
        <Hero/>
      </div>
    </main>
  );
}
