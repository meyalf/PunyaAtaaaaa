import { info, penutup } from "../data/ucapan";

export default function Footer() {
  return (
    <>
      <section className="closing" id="penutup">
        <p className="closing-text">{penutup}</p>
        <p className="closing-from">Dari {info.dari}</p>
      </section>
      <footer className="footer">
        <div className="footer-logo">{info.nama}</div>
        <p className="footer-copy">Dibuat dengan sayang oleh {info.dari}</p>
      </footer>
    </>
  );
}
