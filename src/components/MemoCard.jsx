export default function MemoCard({ memo, index }) {
  return (
    <div className="memo-card">
      <p className="memo-origin">{memo.tempat}</p>
      <h3 className="memo-name">{memo.judul}</h3>
      <span className="memo-roast">{memo.rasa}</span>
      <p className="memo-notes">{memo.cerita}</p>
      <p className="memo-price">Kenangan #{index + 1} <span className="memo-weight">/ {memo.tanggal}</span></p>
    </div>
  );
}
