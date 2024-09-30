import React from 'react';
import './pages.css';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Categoria() {
  const coleccionCards = [
    {
      title: 'Xilófono',
      subTitle: 'Instrumento de aire',
      image: 'https://images.pexels.com/photos/26545471/pexels-photo-26545471/free-photo-of-enfoque-selectivo-del-xilofono.jpeg',
      content: 'El xilófono es un instrumento musical de percusión que consta de diferentes láminas de madera ubicadas de modo horizontal.'
    },
    {
      title: 'Redoblante',
      subTitle: 'Instrumento de percusión',
      image: 'https://images.pexels.com/photos/5650792/pexels-photo-5650792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Tambor de caja prolongada, sin bordones en la cara inferior, usado en las orquestas y bandas militares.'
    },
  ]

  return (
    <div className="Categoria">
      <h1 className='titulo'>Categorías</h1>

      <div className='colec-cards'>
        {coleccionCards.map((card, index) => (
          <Card key={index} title={card.title} subTitle={card.subTitle}
            footer={
              <div className='flex flex-wrap justify-content-center gap-2'>
                <Button label="Save" icon="pi pi-check" className='btn-save' />
                <Button label="Cancel" icon="pi pi-times" className='btn-delete' />
              </div>
            }
            header={
              <img alt="Card" src={card.image} className='img-card' />
            }
            className="md:w-25rem">
            <p className="m-0">
              {card.content}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categoria;