import '../styles/Home.css';
import Header from './Header'; 
import Main from './Main';   
import Footer from './Footer';

function Home() {
  const student = {
    firstName: 'Lautaro',
    lastName: 'Navarro',
    university: 'Facultad Regional Tucumán',
    career: 'Tecnico en Programación',
    skills: ['C#', 'JavaScript', 'React', 'CSS', 'HTML', 'Python'],
    description: 'Me gusta trabajar en equipo, aprender todos los dias algo nuevo para superarme en cada ambito de la programacion',
    image: '/assets/portafolio.jpg',
    age: 19,
    pet: 'Tengo una gata llamada Kala',
    social: {
      instagram: 'https://www.instagram.com/launavarroo_/',
      tiktok: 'https://www.tiktok.com/@lautaronavarro91',
      X: 'https://x.com/launavarroo_'
    }
  };

  return (
    <div className="home">
      <Header studentName={`${student.firstName} ${student.lastName}`} />
      <Main student={student} />
      <Footer social={student.social} />
    </div>
  );
}

export default Home;