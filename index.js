import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>🌍 Dayak Kaltim Connect</h1>
      <p>Platform komunitas budaya Dayak se-Kalimantan Timur</p>
      <ul>
        <li><Link href="/admin">Admin Panel</Link></li>
        <li><Link href="/kamus">Kamus</Link></li>
        <li><Link href="/peta">Peta Acara</Link></li>
        <li><Link href="/about">Tentang Aplikasi</Link></li>
      </ul>
      <Footer />
    </div>
  );
}
