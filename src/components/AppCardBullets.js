import React from 'react';

const AppCardBullets = ({date, bullets}) => (
    <div>
      <hr />
      <h5>{date}</h5>
      <ul>
        {bullets.map((bullet, index) => (<li key={index}><strong>{bullet.type}</strong> {bullet.title}</li>))}
      </ul>
      <hr />
    </div>
);
    

export default AppCardBullets;