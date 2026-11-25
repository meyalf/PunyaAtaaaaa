import { info } from "../data/ucapan";

export default function Envelope({ stage, onOpen }) {
  return (
    <section className={`intro ${stage === "leaving" ? "leaving" : ""}`}>
      <h1>Ada surat buat kamu, {info.nama}</h1>
      <p>Klik amplopnya ya.</p>
      <button
        className={`envelope ${stage !== "closed" ? "open" : ""}`}
        onClick={onOpen}
        aria-label="Buka amplop"
      >
        <span className="paper" />
        <span className="front" />
        <span className="flap" />
        <span className="seal">♥</span>
      </button>
    </section>
  );
}
