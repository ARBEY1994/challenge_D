import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Tareas from "./tareas";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <br />
      <Tareas />
      <Footer />
    </div>
  );
}
