import '../styles/Main.css';

function Main({ student }) {
    return (
      <main className="main">
        <div className="card">
        <img src={student.image} alt="Profile" className="card-image" />
          <h2>{student.firstName} {student.lastName}</h2>
          <p><strong>Universidad:</strong> {student.university}</p>
          <p><strong>Carrera:</strong> {student.career}</p>
          <p><strong>Edad:</strong> {student.age} años</p>
          <p><strong>Lenguajes Aprendidos:</strong> {student.skills.join(', ')}</p>
          <p><strong>Descripción:</strong> {student.description}</p>
          <p><strong>Mascota:</strong> {student.pet}</p>
        </div>
      </main>
    );
  }
  
  export default Main;