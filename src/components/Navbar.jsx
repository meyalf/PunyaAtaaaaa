import { info } from "../data/ucapan";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">{info.nama}</div>
      <div className="nav-links">
        <a href="#kenangan">Kenangan</a>
        <a href="#perjalanan">Perjalanan</a>
        <a href="#pesan">Pesan</a>
        <a href="#penutup">Penutup</a>
      </div>
    </nav>
  );
}
