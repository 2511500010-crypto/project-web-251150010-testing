import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroTea from "@/assets/hero-tea.jpg";
import serviceCups from "@/assets/service-cups.jpg";
import serviceTasting from "@/assets/service-tasting.jpg";
import servicePottery from "@/assets/service-pottery.jpg";
import aboutStudio from "@/assets/about-studio.jpg";
import mapWarm from "@/assets/map-warm.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teh Kotak — Studio Teh & Keramik Handmade" },
      {
        name: "description",
        content:
          "Studio teh dan keramik buatan tangan. Cicipi teh seduh tangan, ikut kelas keramik, dan bawa pulang kehangatan kami.",
      },
      { property: "og:title", content: "Teh Kotak — Studio Teh & Keramik Handmade" },
      {
        property: "og:description",
        content:
          "Studio teh dan keramik buatan tangan. Cicipi teh seduh tangan, ikut kelas keramik, dan bawa pulang kehangatan kami.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#kontak", label: "Kontak" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Header menuOpen={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, onToggle }: { menuOpen: boolean; onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 border-b border-ink/10 bg-white/50 backdrop-blur-xl" />
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#beranda" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-[10px] bg-primary font-display text-lg font-semibold text-primary-foreground">
            T
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Teh&nbsp;Kotak
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#kontak"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Kunjungi kami
          </a>
          <button
            type="button"
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            onClick={onToggle}
            className="grid size-9 place-items-center rounded-full border border-input text-foreground md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="relative border-b border-ink/10 bg-white/80 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onToggle}
                className="rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-mist via-background to-background" />
      <div className="absolute -top-10 -right-10 size-96 rounded-full bg-amber/30 blur-3xl drift-slow" />
      <div className="absolute top-24 -left-16 size-80 rounded-full bg-terracotta/25 blur-3xl drift-slower" />
      <div className="absolute top-40 right-1/4 size-72 rounded-full bg-sage/25 blur-3xl drift-slow" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="rise inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            UMKM · Kerajinan lokal · Sejak 2019
          </p>
          <h1 className="rise mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl xl:text-6xl">
            Sudut hangat untuk teh, keramik & sore yang santai
          </h1>
          <p className="rise mt-5 max-w-[52ch] text-base text-pretty text-muted-foreground sm:text-lg">
            Teh Kotak adalah studio kecil yang menuang teh seduhan tangan dan
            membentuk terracotta di bawah matahari sore. Datang, duduk, dan
            nikmati pelan-pelan.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3">
            <a
              href="#layanan"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-colors hover:bg-primary/90"
            >
              Lihat layanan
            </a>
            <a
              href="#kontak"
              className="rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-foreground ring-1 ring-ink/10 backdrop-blur transition-colors hover:bg-white/80"
            >
              Pesan meja
            </a>
          </div>
        </div>
        <div className="rise relative">
          <div className="absolute -inset-4 rounded-[26px] bg-white/40 ring-1 ring-white/50 backdrop-blur-md" />
          <img
            src={heroTea}
            alt="Secangkir teh hangat dan teko terracotta di atas meja kayu yang disinari matahari"
            width={1024}
            height={1024}
            className="relative aspect-[9/10] w-full rounded-[22px] object-cover outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    image: serviceCups,
    alt: "Koleksi cangkir keramik buatan tangan dengan glazur warna hangat",
    title: "Cangkir keramik handmade",
    text: "Stoneware dari roda putar dengan glazur lembut, masing-masing dibentuk untuk menyimpan kehangatan di telapak tangan.",
    cta: "Pesan satu set",
  },
  {
    image: serviceTasting,
    alt: "Sesi mencicipi teh dengan teko kecil dan kue hangat di atas nampan kayu",
    title: "Teh sore bersama",
    text: "Sesi mencicipi teh daun pilihan yang diseduh perlahan, ditemani kudapan hangat khas lokal.",
    cta: "Pesan kursi",
  },
  {
    image: servicePottery,
    alt: "Tangan membentuk tanah liat di atas roda keramik dalam cahaya hangat",
    title: "Kelas keramik",
    text: "Kelas kelompok kecil tempat pemula pulang sambil memegang cangkir yang mereka bentuk sendiri.",
    cta: "Ikut kelas",
  },
];

function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 sm:px-8">
      <div className="max-w-[40ch]">
        <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          Yang kami buat untukmu
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Tiga cara untuk membawa sedikit kehangatan ke rumahmu.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="relative overflow-hidden rounded-[20px] ring-1 ring-black/5 transition-transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-white/45 backdrop-blur-md" />
            <div className="relative p-6">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[16/10] w-full rounded-[14px] object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{service.text}</p>
              <a
                href="#kontak"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
              >
                {service.cta} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16 sm:px-8">
      <div className="relative overflow-hidden rounded-[26px] ring-1 ring-black/5">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
        <div className="relative grid items-center gap-8 p-6 sm:p-10 md:grid-cols-2">
          <img
            src={aboutStudio}
            alt="Interior studio yang hangat dengan rak kayu, pot terracotta, dan cahaya sore"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-[4/3] w-full rounded-[18px] object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold leading-tight text-balance sm:text-3xl">
              Cerita kami
            </h2>
            <p className="mt-4 max-w-[48ch] text-pretty text-muted-foreground">
              Teh Kotak dimulai dari satu teko, roda pinjaman, dan sudut halaman
              rumah nenek. Kini kami menjaga irama yang sama — teh dituang dengan
              tangan, tanah liat dibentuk dengan rasa, dan setiap tamu dipersilakan
              menikmati cangkir kedua.
            </p>
            <p className="mt-3 max-w-[48ch] text-pretty text-muted-foreground">
              Semua yang kami buat dikerjakan dalam jumlah kecil agar tidak ada yang
              terasa produksi massal. Kami memang bisnis kecil, dan kami menyukainya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontak" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-16 sm:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[26px] ring-1 ring-black/5">
          <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
          <div className="relative p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold leading-tight text-balance sm:text-3xl">
              Kirim pesan untuk kami
            </h2>
            <p className="mt-2 text-pretty text-muted-foreground">
              Ada pertanyaan soal kelas, pesanan cangkir khusus, atau sekadar
              menyapa?
            </p>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-secondary/70 p-6 text-center">
                <p className="font-display text-lg font-semibold text-foreground">
                  Terima kasih, pesanmu sudah kami terima!
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kami biasanya membalas dalam satu hari kerja.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Nama</span>
                    <input
                      type="text"
                      required
                      placeholder="Nama kamu"
                      className="mt-1 w-full rounded-xl bg-background/70 px-3 py-2 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-primary/40"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      className="mt-1 w-full rounded-xl bg-background/70 px-3 py-2 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-primary/40"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm text-muted-foreground">Pesan</span>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ceritakan apa yang kamu butuhkan"
                    className="mt-1 w-full rounded-xl bg-background/70 px-3 py-2 text-sm outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-primary/40"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-colors hover:bg-primary/90"
                >
                  Kirim pesan
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="lg:pt-6">
          <h3 className="font-display text-2xl font-semibold leading-tight text-balance">
            Mampir ke studio
          </h3>
          <dl className="mt-6 space-y-5 text-sm">
            <div className="flex gap-4">
              <dt className="w-24 shrink-0 text-muted-foreground/70">Studio</dt>
              <dd className="text-pretty">
                Jl. Kenanga 12, Kota Tua
                <br />
                Yogyakarta, Indonesia
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 shrink-0 text-muted-foreground/70">Jam buka</dt>
              <dd className="text-pretty">
                Selasa–Minggu, 10.00–18.00
                <br />
                Tutup hari Senin
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 shrink-0 text-muted-foreground/70">Hubungi</dt>
              <dd className="text-pretty">
                <a href="mailto:halo@tehkotak.id" className="text-primary hover:underline">
                  halo@tehkotak.id
                </a>
                <br />
                <a href="tel:+6281234567890" className="text-primary hover:underline">
                  +62 812 3456 7890
                </a>
              </dd>
            </div>
          </dl>
          <img
            src={mapWarm}
            alt="Peta ilustrasi hangat lokasi studio di sudut jalan"
            loading="lazy"
            width={1024}
            height={1024}
            className="mt-6 aspect-[16/9] w-full rounded-[18px] object-cover outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="relative overflow-hidden rounded-[26px] ring-1 ring-black/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-amber/90" />
        <div className="relative flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-semibold leading-tight text-balance text-primary-foreground sm:text-3xl">
              Kehangatan, sebulan sekali
            </h2>
            <p className="mt-2 max-w-[46ch] text-pretty text-primary-foreground/85">
              Racikan teh baru, jadwal kelas, dan catatan kecil dari studio — tanpa
              berisik, hanya hal-hal yang menyenangkan.
            </p>
          </div>
          {subscribed ? (
            <p className="rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-foreground">
              Terima kasih sudah berlangganan!
            </p>
          ) : (
            <form
              className="flex w-full gap-2 sm:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <input
                type="email"
                required
                placeholder="Email kamu"
                className="min-w-0 flex-1 rounded-full bg-white/90 px-4 py-2 text-sm text-foreground outline-none ring-1 ring-white/40 sm:w-64"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background ring-1 ring-foreground transition-colors hover:bg-foreground/90"
              >
                Berlangganan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid items-start gap-10 sm:grid-cols-2">
          <div>
            <a href="#beranda" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-[10px] bg-primary font-display text-lg font-semibold text-primary-foreground">
                T
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Teh&nbsp;Kotak
              </span>
            </a>
            <p className="mt-4 max-w-[38ch] text-pretty text-muted-foreground">
              Bisnis lokal kecil yang menuang teh handmade dan membentuk terracotta,
              satu sore yang santai demi satu sore berikutnya.
            </p>
            <div className="mt-5 flex gap-2">
              {["Instagram", "WhatsApp", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="rounded-full bg-white/60 px-3 py-1.5 text-sm text-muted-foreground ring-1 ring-ink/10 backdrop-blur transition-colors hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:justify-items-end">
            <nav className="space-y-3 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
                Jelajahi
              </p>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="block hover:text-foreground">
                  {link.label}
                </a>
              ))}
            </nav>
            <nav className="space-y-3 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
                Studio
              </p>
              <a href="#layanan" className="block hover:text-foreground">
                Kelas keramik
              </a>
              <a href="#layanan" className="block hover:text-foreground">
                Menu teh
              </a>
              <a href="#kontak" className="block hover:text-foreground">
                Pesanan grosir
              </a>
              <a href="#kontak" className="block hover:text-foreground">
                Kartu hadiah
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>&copy; 2026 Teh Kotak. Hak cipta dilindungi.</p>
          <p className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              Privasi
            </a>
            <a href="#" className="hover:text-foreground">
              Ketentuan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
