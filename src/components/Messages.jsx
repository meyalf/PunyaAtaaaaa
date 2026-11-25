import { pesan } from "../data/ucapan";

export default function Messages() {
  return (
    <section className="section" id="pesan">
      <p className="section-eyebrow">Dari orang-orang yang bakal kangen</p>
      <h2 className="section-title">Pesan</h2>
      <div className="msg-grid">
        {pesan.map((p, i) => (
          <div key={i} className="msg-card">
            <p className="msg-quote">"{p.quote}"</p>
            <p className="msg-name">— {p.nama}, {p.peran}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
