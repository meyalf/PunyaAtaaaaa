import { info, hero } from "../data/ucapan";

const hearts = [
  { l: "8%", s: 18, d: 0, t: 9 }, { l: "22%", s: 26, d: 3, t: 11 }, { l: "40%", s: 16, d: 6, t: 8 },
  { l: "58%", s: 30, d: 1, t: 12 }, { l: "74%", s: 20, d: 4, t: 10 }, { l: "90%", s: 24, d: 7, t: 9 },
];

export default function Hero() {
  return (
    <section className="hero">
      {hearts.map((h, i) => (
        <span key={i} className="heart" aria-hidden="true"
          style={{ left: h.l, fontSize: h.s, animationDelay: `${h.d}s`, animationDuration: `${h.t}s` }}>♥</span>
      ))}
      <p className="eyebrow">Untuk {info.nama} · {info.tanggal}</p>
      <h1>{hero.judul[0]}<br />{hero.judul[1]}</h1>
      <p className="hero-desc">{hero.deskripsi}</p>
      <a href="#kenangan" className="cta-btn">Lihat kenangan</a>
    </section>
  );
}
