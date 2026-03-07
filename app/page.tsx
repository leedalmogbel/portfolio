import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-12 font-sans md:px-8 md:py-20 lg:flex lg:justify-between lg:gap-16 lg:px-12 lg:py-0">
      <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24">
        <Sidebar />
      </aside>

      <main className="pt-12 lg:w-[58%] lg:py-24 lg:pt-24">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
