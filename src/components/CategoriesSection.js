function CategoriesSection() {

    const categories = [

        "☕ Java",
        "🌱 Spring Boot",
        "⚛️ React",
        "☁️ AWS",

        "🐳 Docker",
        "🔗 Microservices",
        "🗄️ Database",
        "🏗️ System Design"
    ];

    return (

        <div className="container mb-5">

            <h2 className="mb-4">
                📚 Browse Categories
            </h2>

            <div className="row">

                {
                    categories.map(category => (

                        <div
                            className="col-lg-3 col-md-4 col-sm-6 mb-3"
                            key={category}
                        >

                            <div
                                className="card shadow-sm p-4 text-center"
                                style={{
                                    cursor:"pointer",
                                    borderRadius:"15px"
                                }}
                            >

                                <h5>
                                    {category}
                                </h5>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default CategoriesSection;