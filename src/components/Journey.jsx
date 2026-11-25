import { perjalanan } from "../data/ucapan";

export default function Journey() {
  return (
    <section className="section" id="perjalanan">
      <p className="section-eyebrow">Dari awal sampai akhir</p>
      <h2 className="section-title">Perjalanan</h2>
      <div className="journey-grid">
        {perjalanan.map((s) => (
          <div key={s.num} className="journey-step">
            <div className="journey-num">{s.num}</div>
            <h3 className="journey-step-title">{s.judul}</h3>
            <p className="journey-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
