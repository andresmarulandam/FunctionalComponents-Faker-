import React from 'react';

interface Student {
  fullname: string;
  programmingExperience: number;
}

const CardStudent: React.FC<Student> = ({
  fullname,
  programmingExperience,
}) => {
  return (
    <div style={{ display: 'flex', gap: 30 }}>
      <img
        src={`https://ui-avatars.com/api/?name=${fullname}`}
        className="w-100"
        alt={`Avatar de ${fullname}`}
      />
      <div
        style={{
          margin: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>{fullname}</h2>
        <h2>
          Coding Experience:
          {programmingExperience} años
        </h2>
      </div>
    </div>
  );
};

export default CardStudent;
