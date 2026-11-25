import { useEffect, useState } from "react";
import { info, pembuka, momen, penutup, pesanTerakhir } from "../data/ucapan";

const hearts = [
  { l: "6%", s: 18, d: 0, t: 11 }, { l: "20%", s: 28, d: 4, t: 13 }, { l: "36%", s: 16, d: 8, t: 10 },
  { l: "54%", s: 26, d: 2, t: 14 }, { l: "70%", s: 18, d: 6, t: 11 }, { l: "86%", s: 30, d: 3, t: 12 },
];

export default function Letter() {
  const [last, setLast] = useState(false);
  const [burst, setBurst] = useState([]);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const bukaLast = () => {
    setLast(true);
    setBurst(Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2, r = 90 + Math.random() * 90;
      return { x: Math.cos(a) * r, y: Math.sin(a) * r - 40 };
    }));
  };

  return (
    <main className="letter-page">
      {hearts.map((h, i) => (
        <span key={i} className="heart" aria-hidden="true"
          style={{ left: h.l, fontSize: h.s, animationDelay: `${h.d}s`, animationDuration: `${h.t}s` }}>♥</span>
      ))}
      <div className="sheet">
        <h2 className="greet">Hai {info.nama},</h2>
        <p className="rv">{pembuka}</p>
        <ul className="moments">
          {momen.map((m, i) => (
            <li key={i} className="rv" style={{ transitionDelay: `${i * 120}ms` }}>
              <h3>{m.judul}</h3>
              <p>{m.teks}</p>
            </li>
          ))}
        </ul>
        <p className="rv">{penutup}</p>
        <p className="hand sign rv">Dari aku,<br />{info.dari}</p>
        <div className="last">
          {!last && <button type="button" onClick={bukaLast}>Satu hal lagi</button>}
          <div className="burst" aria-hidden="true">
            {burst.map((b, i) => <span key={i} className="b" style={{ "--x": `${b.x}px`, "--y": `${b.y}px` }}>♥</span>)}
          </div>
          {last && <p className="last-msg">{pesanTerakhir}</p>}
        </div>
      </div>
    </main>
  );
}
