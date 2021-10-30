import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
 
  return <section>
    <div className="title">
      <h2>{tours.length < 0 ? 'No tour place left' : 'our tour'  }</h2>
      <div className="underlinn"></div>
    </div>
    <div className="div">
      {
        tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} ></Tour>
        })
      }
    </div>
  </section>;
};

export default Tours;
