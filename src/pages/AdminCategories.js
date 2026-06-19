import {
    useEffect,
    useState
}
from "react";

import {
    getCategories,
    addCategory
}
from "../services/categoryService";

function AdminCategories() {

    const [name,
        setName]
        = useState("");

    const [categories,
        setCategories]
        = useState([]);

    useEffect(() => {

        loadCategories();

    }, []);

    const loadCategories =
        async () => {

        const data =
            await getCategories();

        setCategories(data);
    };

    const handleAdd =
        async () => {

        await addCategory(name);

        setName("");

        loadCategories();
    };

    return (

        <div>

            <h2>
                Categories
            </h2>

            <input
                value={name}
                onChange={(e)=>
                    setName(
                        e.target.value)}
            />

            <button
                onClick={handleAdd}
            >
                Add Category
            </button>

            {
                categories.map(cat => (

                    <div
                        key={cat.id}
                    >

                        {cat.name}

                    </div>

                ))
            }

        </div>
    );
}

export default AdminCategories;