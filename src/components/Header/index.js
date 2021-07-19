import Nav from '../Nav';


function Header () {
    return(
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <Nav></Nav>
      </header>
      )
}

export default Header;