import { Link } from 'react-router-dom'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center justify-between px-4 z-50">
      {/* Hamburger Menu */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="w-8 h-8 flex flex-col justify-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span className="w-6 h-0.5 bg-black block"></span>
        <span className="w-6 h-0.5 bg-black block"></span>
        <span className="w-6 h-0.5 bg-black block"></span>
      </button>

      {/* Logo */}
      <Link to="/" className="text-2xl font-light tracking-widest">
        <img src="/malva-logo.svg" alt="malva-logo" />
      </Link>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button aria-label="Search" className="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
          </svg>
        </button>
        <button aria-label="Account" className="w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
          </svg>
        </button>
        <Link aria-label="Cart" className="w-6 h-6" to="/cart-page">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" />
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header