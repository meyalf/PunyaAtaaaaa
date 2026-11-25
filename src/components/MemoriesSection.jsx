import { useState } from "react";
import { kenangan, tempat, rasa } from "../data/ucapan";
import MemoCard from "./MemoCard";

function FilterGroup({ label, options, active, onChange }) {
  return (
    <div className="filter-group">
      <span className="filter-label">{label}</span>
      <div className="filter-pills">
        {options.map((opt) => (
          <button
            key={opt}
            className={`pill ${active === opt ? "pill-active" : ""}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function MemoriesSection() {
  const [t, setT] = useState("Semua");
  const [r, setR] = useState("Semua");

  const filtered = kenangan.filter(
    (k) => (t === "Semua" || k.tempat === t) && (r === "Semua" || k.rasa === r)
  );

  return (
    <section className="section" id="kenangan">
      <p className="section-eyebrow">Koleksi kita</p>
      <h2 className="section-title">Kenangan</h2>

      <div className="filters">
        <FilterGroup label="Tempat" options={tempat} active={t} onChange={setT} />
        <FilterGroup label="Rasa" options={rasa} active={r} onChange={setR} />
      </div>

      <p className="memo-count">Menampilkan {filtered.length} dari {kenangan.length} kenangan</p>

      <div className="memo-grid">
        {filtered.length > 0 ? (
          filtered.map((k, i) => <MemoCard key={k.id} memo={k} index={i} />)
        ) : (
          <p className="no-results">Belum ada kenangan yang cocok. Coba kombinasi lain.</p>
        )}
      </div>
    </section>
  );
}
