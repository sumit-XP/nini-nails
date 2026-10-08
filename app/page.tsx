'use client'

import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Camera,
  MapPin,
  Menu,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Wine,
  X,
} from 'lucide-react'
import { useState } from 'react'

const services = [
  { name: 'Manicures', description: 'Shape, care, and a polished finish.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85' },
  { name: 'Pedicures', description: 'A restorative ritual from heel to toe.', image: 'https://images.unsplash.com/photo-1519014816548-bf5c6f3c47a9?auto=format&fit=crop&w=900&q=85' },
  { name: 'Gel & Dipping', description: 'Long-lasting color with a flawless finish.', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85' },
  { name: 'Nail Art', description: 'Small details, made unmistakably yours.', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85' },
]

const locations = [
  { name: 'Dallas', detail: 'Dallas, TX', rating: '4.7', reviews: '140+ Google reviews', image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Farmers Branch', detail: 'Farmers Branch, TX', rating: 'Rating details coming soon', reviews: '', image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Carrollton', detail: 'Carrollton, TX', rating: 'Rating details coming soon', reviews: '', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=85' },
]

const gallery = [
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1519014816548-bf5c6f3c47a9?auto=format&fit=crop&w=1000&q=85',
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf8] text-[#252321]">
      <div className="topbar"><span>Three locations across North Dallas</span><span className="hidden sm:inline">•</span><span>Clean beauty. Thoughtful details.</span></div>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="NINI Nail Bar home"><span>NINI</span><small>NAIL BAR</small></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#locations">Locations</a><a href="#gallery">Gallery</a><a href="#experience">About</a><a href="#gift">Gift Cards</a>
        </nav>
        <a href="#book" className="button button-dark header-book">Book now <ArrowRight aria-hidden="true" /></a>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#locations" onClick={() => setMenuOpen(false)}>Locations</a><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a><a href="#experience" onClick={() => setMenuOpen(false)}>About</a><a href="#gift" onClick={() => setMenuOpen(false)}>Gift Cards</a><a href="#book" className="button button-dark" onClick={() => setMenuOpen(false)}>Book an appointment <ArrowRight /></a></nav>}

      <section id="top" className="hero">
        <div className="hero-copy"><p className="eyebrow">Nail care, elevated</p><h1>Beautifully<br /><em>in your element.</em></h1><p className="hero-text">A considered nail experience for polished results, restorative rituals, and a little more time to exhale.</p><div className="hero-actions"><a className="button button-dark" href="#book">Book an appointment <ArrowRight /></a><a className="text-link" href="#locations">Find your NINI <MapPin /></a></div><div className="hero-proof"><span className="stars">★★★★★</span><span><strong>4.7</strong> on Google in Dallas · 140+ reviews</span></div></div>
        <div className="hero-image-wrap"><img className="hero-image" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=90" alt="A detailed neutral manicure at NINI Nail Bar" /><div className="hero-note"><Sparkles /><span>Details make<br />the difference.</span></div></div>
      </section>

      <section className="trust-strip"><div><ShieldCheck /><span><strong>Hospital-grade sterilization</strong><small>Because clean is non-negotiable.</small></span></div><div><Sparkles /><span><strong>Skilled nail artists</strong><small>Careful work, beautiful results.</small></span></div><div><Wine /><span><strong>Complimentary sips</strong><small>Wine, margaritas, and more.</small></span></div></section>

      <section id="services" className="section services-section"><div className="section-heading"><div><p className="eyebrow">The NINI menu</p><h2>Your best nails<br /><em>start here.</em></h2></div><a className="text-link" href="#book">Explore all services <ArrowRight /></a></div><div className="service-grid">{services.map((service) => <a className="service-card" href="#book" key={service.name}><img src={service.image} alt={service.name} /><div className="service-overlay"><span>{service.name}</span><small>{service.description}</small><ArrowRight /></div></a>)}</div></section>

      <section id="experience" className="experience-section"><div className="experience-image"><img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85" alt="Relaxing spa chair and calm salon interior" /></div><div className="experience-copy"><p className="eyebrow">More than a manicure</p><h2>Come for the nails.<br /><em>Stay for the feeling.</em></h2><p>At NINI, your appointment is a pause in the day. Settle into a comfortable chair, let our artists take care of the details, and enjoy a complimentary drink while you unwind.</p><div className="drink-list"><span>Wine</span><span>Margaritas</span><span>Mixed drinks</span><span>Soft drinks</span></div><a href="#book" className="button button-outline">Plan your visit <ArrowRight /></a></div></section>

      <section id="locations" className="section locations-section"><div className="section-heading"><div><p className="eyebrow">Find your NINI</p><h2>Three places<br /><em>to feel cared for.</em></h2></div><p className="heading-note">Choose the location that fits your day.<br />Every NINI is committed to the same thoughtful experience.</p></div><div className="location-grid">{locations.map((location) => <article className="location-card" key={location.name}><img src={location.image} alt={`${location.name} NINI Nail Bar`} /><div className="location-content"><div className="location-title"><h3>{location.name}</h3><span>{location.detail}</span></div>{location.reviews ? <div className="location-rating"><Star fill="currentColor" /> <strong>{location.rating}</strong> <span>{location.reviews}</span></div> : <p className="pending">{location.rating}</p>}<div className="location-actions"><a href="#book" className="button button-dark">Book here <ArrowRight /></a><a href="#contact" className="icon-link" aria-label={`Get directions to ${location.name}`}><MapPin /> Directions</a></div></div></article>)}</div></section>

      <section className="review-section"><div className="review-mark"><Quote /></div><p className="eyebrow">Loved by Dallas</p><blockquote>“The attention to detail was incredible. The salon was clean, the staff was so friendly, and my nails have never looked better.”</blockquote><div className="review-footer"><span className="stars">★★★★★</span><span>Google review · Dallas</span><a href="#reviews">Read more reviews <ExternalLink /></a></div></section>

      <section id="gallery" className="section gallery-section"><div className="section-heading"><div><p className="eyebrow">The NINI look</p><h2>Made to be<br /><em>noticed.</em></h2></div><a className="text-link" href="#instagram">Follow along <Camera /></a></div><div className="gallery-grid">{gallery.map((image, index) => <img key={image} src={image} alt={`NINI Nail Bar nail work ${index + 1}`} />)}</div></section>

      <section id="gift" className="gift-section"><div><p className="eyebrow">A little NINI time</p><h2>Give the gift<br /><em>of feeling good.</em></h2><p>For birthdays, celebrations, or simply because. A NINI gift card is always the right fit.</p><a href="#contact" className="button button-light">Buy a gift card <ArrowRight /></a></div><div className="gift-stamp"><span>NINI</span><small>NAIL BAR</small><div>THE PERFECT<br />LITTLE LUXURY</div></div></section>

      <section id="book" className="booking-section"><div><p className="eyebrow">Ready when you are</p><h2>Make time<br /><em>for you.</em></h2></div><div className="booking-panel"><p>Choose your NINI location to start your appointment.</p><div className="booking-select"><span><MapPin /> Select a location</span><ChevronDown /></div><a href="#locations" className="button button-dark">Choose a location <ArrowRight /></a></div></section>

      <footer id="contact" className="footer"><div className="footer-brand"><a href="#top" className="brand"><span>NINI</span><small>NAIL BAR</small></a><p>Premium nail care across<br />North Dallas.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#services">Services</a><a href="#locations">Locations</a><a href="#gallery">Gallery</a></div><div><strong>Visit</strong><a href="#book">Book an appointment</a><a href="#gift">Gift cards</a><a href="#contact">Contact us</a></div></div><div className="footer-bottom"><span>© 2026 NINI Nail Bar</span><span>Clean beauty. Thoughtful details.</span></div></footer>
      <a className="sticky-book" href="#book">Book now <ArrowRight /></a>
    </main>
  )
}
