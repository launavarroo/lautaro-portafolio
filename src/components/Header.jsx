import '../styles/Header.css';
function Header({ studentName }) {
    return (
      <header className="header">
        <div className="header-content">
          <h1>Portafolio {studentName}</h1>
          <hr />
        </div>
      </header>
    );
  }
  
  export default Header;