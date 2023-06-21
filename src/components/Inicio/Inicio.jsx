import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <div className='fondo__inicio'>
        <h1>Tendencias Session 23 <hr /></h1>
        <div className='carrusel'>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="foto "
                    src="./src/assets/carrusel1.jpg"
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="foto"
                    src="./src/assets/carrusel2.jpg"
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    
                    className="foto"
                    src="./src/assets/carrusel3.jpg"
                    alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    
                    className="foto"
                    src="./src/assets/carrusel4.jpg"
                    alt="Fourth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    
                    className="foto"
                    src="./src/assets/carrusel5.jpg"
                    alt="Fifth slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    
                    className="foto"
                    src="./src/assets/carrusel6.jpg"
                    alt="Sixth slide"
                    />

                </Carousel.Item>       
            </Carousel>

        </div>
    </div>
  );
}

export default IndividualIntervalsExample;