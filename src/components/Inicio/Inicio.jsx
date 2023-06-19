import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <div className='fondo__inicio'>
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
            </Carousel>

        </div>
    </div>
  );
}

export default IndividualIntervalsExample;