const Nav = ({ home, about, specs, contact }) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className="navigation">
      <button className="nav-btn" onClick={home}>Home</button>
      <button className="nav-btn" onClick={() => openInNewTab('https://tokisuno.rocks/blog')}>Blog</button>
      <button className="nav-btn" onClick={about}>About</button>
      <button className="nav-btn" onClick={specs}>Specs</button>
      <button className="nav-btn" onClick={contact}>Contact</button>
    </div>
  )
}

export default Nav;
