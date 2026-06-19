import {
    useEffect,
    useState
}
from "react";

import {
    getAddresses,
    addAddress
}
from "../services/addressService";

import {
    FaHome,
    FaMapMarkerAlt
}
from "react-icons/fa";

import "./Address.css";

function Address() {

    const [addresses,
        setAddresses]
        = useState([]);

    const [form,
        setForm]
        = useState({

        addressType:"",
        street:"",
        city:"",
        state:"",
        zipCode:""
    });

    useEffect(() => {

        fetchAddresses();

    }, []);

    const fetchAddresses =
        async () => {

        try {

            const data =
                await getAddresses();

            setAddresses(data);

        } catch(error) {

            console.log(error);
        }
    };

    const handleSubmit =
        async (e) => {

        e.preventDefault();

        try {

            await addAddress(form);

            alert(
                "Address Added Successfully"
            );

            setForm({
                addressType:"",
                street:"",
                city:"",
                state:"",
                zipCode:""
            });

            fetchAddresses();

        } catch(error) {

            console.log(error);
        }
    };

    return (

        <div
            className=
            "container address-container"
        >

            <h2 className="mb-4">
                🏠 Address Book
            </h2>

            {/* Add Address Form */}

            <div
                className=
                "address-form"
            >

                <h4>
                    Add New Address
                </h4>

                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    <input
                        className=
                        "form-control mb-3"
                        placeholder=
                        "Address Type (Home/Office)"
                        value={
                            form.addressType
                        }
                        onChange={(e)=>
                            setForm({
                                ...form,
                                addressType:
                                e.target.value
                            })
                        }
                    />

                    <input
                        className=
                        "form-control mb-3"
                        placeholder="Street"
                        value={form.street}
                        onChange={(e)=>
                            setForm({
                                ...form,
                                street:
                                e.target.value
                            })
                        }
                    />

                    <input
                        className=
                        "form-control mb-3"
                        placeholder="City"
                        value={form.city}
                        onChange={(e)=>
                            setForm({
                                ...form,
                                city:
                                e.target.value
                            })
                        }
                    />

                    <input
                        className=
                        "form-control mb-3"
                        placeholder="State"
                        value={form.state}
                        onChange={(e)=>
                            setForm({
                                ...form,
                                state:
                                e.target.value
                            })
                        }
                    />

                    <input
                        className=
                        "form-control mb-3"
                        placeholder="Zip Code"
                        value={form.zipCode}
                        onChange={(e)=>
                            setForm({
                                ...form,
                                zipCode:
                                e.target.value
                            })
                        }
                    />

                    <button
                        className=
                        "btn btn-primary"
                    >
                        Save Address
                    </button>

                </form>

            </div>

            {/* Address Cards */}

            <div className="row">

                {
                    addresses.map(
                        address => (

                        <div
                            className=
                            "col-md-6"
                            key={
                                address.id
                            }
                        >

                            <div
                                className=
                                "address-card"
                            >

                                <h5
                                    className=
                                    "address-title"
                                >

                                    <FaHome />

                                    {" "}

                                    {
                                        address.addressType
                                    }

                                </h5>

                                <p>

                                    <FaMapMarkerAlt />

                                    {" "}

                                    {
                                        address.street
                                    }

                                </p>

                                <p>
                                    {
                                        address.city
                                    },
                                    {" "}
                                    {
                                        address.state
                                    }
                                </p>

                                <p>
                                    ZIP :
                                    {" "}
                                    {
                                        address.zipCode
                                    }
                                </p>

                                <button
                                    className=
                                    "btn btn-warning btn-sm me-2"
                                >
                                    Edit
                                </button>

                                <button
                                    className=
                                    "btn btn-danger btn-sm"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default Address;