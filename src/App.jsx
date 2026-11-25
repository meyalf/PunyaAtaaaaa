import { useState } from "react";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import "./index.css";

export default function App() {
  const [stage, setStage] = useState("closed"); // closed -> opening -> leaving -> open

  const buka = () => {
    if (stage !== "closed") return;
    setStage("opening");
    setTimeout(() => setStage("leaving"), 1700);
    setTimeout(() => setStage("open"), 2500);
  };

  return stage === "open" ? <Letter /> : <Envelope stage={stage} onOpen={buka} />;
}
