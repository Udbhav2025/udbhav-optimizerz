import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/home' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Predict', to: '/predict' },
  { label: 'About', to: '/about' },
  { label: 'Feedback', to: '/feedback' }
]

function Navbar() {
  return (
    <nav className="global-navbar">
      <div className="brand">Cardio360</div>
      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link--active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="nav-end">Live</div>
    </nav>
  )
}

export default Navbar

