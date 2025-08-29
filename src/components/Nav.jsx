const Nav = ({ home, about, specs, contact }) => {
  return (
    <div className="navigation">
      <button className="nav-btn" onClick={home}>Home</button>
      <button className="nav-btn" onClick={about}>About</button>
      <button className="nav-btn" onClick={specs}>Specs</button>
      <button className="nav-btn" onClick={contact}>Contact</button>
    </div>
  )
}

export default Nav;
