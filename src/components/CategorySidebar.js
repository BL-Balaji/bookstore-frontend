function CategorySidebar({
    categories,
    onSelect
}) {

    return (

        <div
            className="card p-3"
        >

            <h4>
                📚 Categories
            </h4>

            <hr />

            {
                categories.map(
                    category => (

                    <div
                        key={category.id}
                        style={{
                            cursor:"pointer",
                            marginBottom:"10px"
                        }}
                        onClick={() =>
                            onSelect(
                                category.id
                            )
                        }
                    >

                        {category.name}

                    </div>
                ))
            }

        </div>
    );
}

export default CategorySidebar;