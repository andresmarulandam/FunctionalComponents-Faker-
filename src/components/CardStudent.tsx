import React from 'react';
import { faker } from '@faker-js/faker';

interface Student {
  fullname: string;
  programmingExperience: number;
}

const CardStudent: React.FC<Student> = ({
  fullname,
  programmingExperience,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        border: '1px solid #ccc',
        margin: '15px',
        borderRadius: '10px',
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra sutil para dar profundidad
        transition: 'transform 0.2s',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img
          src={faker.image.avatar()}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%', // Imagen circular
            border: '2px solid #007BFF', // Borde azul para la imagen
            objectFit: 'cover', // Asegura que la imagen se recorte adecuadamente
          }}
          alt={`Avatar de ${fullname}`}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: '#ccc',
          }}
        >
          <h2 style={{ fontSize: '24px', color: '#007BFF', margin: '0' }}>
            {fullname}
          </h2>
          <h2 style={{ fontSize: '18px', color: '#666', margin: ' 0' }}>
            Coding Experience: {programmingExperience} años
          </h2>
        </div>
      </div>
      <div>
        <h1>parte 2</h1>
      </div>
    </div>
  );
};

export default CardStudent;
