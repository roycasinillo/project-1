
import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router";

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";

function Navigation() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="mx-auto flex max-w-5xl gap-6">
        <Link to="/" className="font-semibold hover:underline">
          Home
        </Link>

        <Link to="/about" className="font-semibold hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navigation />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>,
);