import "./NavBar.css";

const navItems = ["Affiliate", "Pricing", "Testimonials", "Help Center"];

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo-new-violet.webp" alt="logo" className="logo-icon" />
        <h5>Afforai</h5>
      </div>

      <div className="nav-items">
        {navItems.map((item) => (
          <button key={item} className="nav-item">
            {item}
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="btn">Log in</button>
        <button className="gradient-btn">Try for free</button>
      </div>
    </div>
  );
};

export default NavBar;
