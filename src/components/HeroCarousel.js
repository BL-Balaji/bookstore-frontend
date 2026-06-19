import Carousel from "react-bootstrap/Carousel";

function HeroCarousel() {

    return (

        <Carousel className="mb-5 shadow">

            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                    alt="Books"
                    style={{
                        height: "450px",
                        objectFit: "cover"
                    }}
                />

                <Carousel.Caption>

                    <h2>
                        📚 Learn New Skills
                    </h2>

                    <p>
                        Java, Spring Boot,
                        React & Microservices
                    </p>

                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                    alt="Programming"
                    style={{
                        height: "450px",
                        objectFit: "cover"
                    }}
                />

                <Carousel.Caption>

                    <h2>
                        🚀 Upgrade Your Career
                    </h2>

                    <p>
                        Best Programming Books
                    </p>

                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                    alt="Sale"
                    style={{
                        height: "450px",
                        objectFit: "cover"
                    }}
                />

                <Carousel.Caption>

                    <h2>
                        🔥 Summer Sale
                    </h2>

                    <p>
                        Up To 70% Off
                    </p>

                </Carousel.Caption>

            </Carousel.Item>

        </Carousel>
    );
}

export default HeroCarousel;