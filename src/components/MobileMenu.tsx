'use client'
export default function MobileMenu() {
  const toggle = () => {
    document.getElementById('navLinks')?.classList.toggle('open')
  }
  return (
    <button className="menu-btn" onClick={toggle} aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  )
}
