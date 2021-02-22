import './Navigation.css'

import { ReactComponent as page0PNG } from '../../images/page0.png'
import { ReactComponent as page1PNG } from '../../images/page1.png'
import { ReactComponent as page2PNG } from '../../images/page2.png'
import { ReactComponent as page3PNG } from '../../images/page3.png'

export default function Navigation({ onNavigate }) {
  // const iconPage0 = <iconPage0 />

  return (
    <nav className="Navigation">
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page0')}
      >
        <page0PNG />
      </button>
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page1')}
      >
        <page1PNG />
      </button>
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page2')}
      >
        <page2PNG />
      </button>
      <button
        className="Navigation__button"
        onClick={() => onNavigate('Page3')}
      >
        <page3PNG />
      </button>
    </nav>
  )
}
