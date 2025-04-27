import '../styles/Footer.css';

function Footer({ social }) {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>Encuentrame en:</p>
          <div className="social-links">
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={social.X} target="_blank" rel="noopener noreferrer">X</a>
        </div>
          <p>&copy; 2025 Facultad Regional Tucuman. Universidad Tecnologica Nacional</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;