import './Navigation.css'

export default function Navigation({ onNavigate }) {
  return (
    <nav className="Navigation">
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page0')}
      >
        Page0
      </button>
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page1')}
      >
        Page1
      </button>
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page2')}
      >
        Page2
      </button>
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page3')}
      >
        Page3
      </button>
    </nav>
  )
}
