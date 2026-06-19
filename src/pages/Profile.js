import {
    useEffect,
    useState
}
from "react";

import {
    FaUser,
    FaEnvelope,
    FaPhone
}
from "react-icons/fa";

import {
    getProfile
}
from "../services/profileService";

import "./Profile.css";

function Profile() {

    const [profile,
        setProfile]
        = useState(null);

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

    try {

        const data =
            await getProfile();

        console.log("PROFILE =", data);

        setProfile(data);

    } catch(error) {

        console.log("PROFILE ERROR =", error);

    }
};

    if (!profile) {

        return (
            <h3>
                Loading Profile...
            </h3>
        );
    }

    return (

        <div
            className=
            "container profile-container"
        >

            <div
                className=
                "profile-card"
            >

                <div
                    className=
                    "profile-header"
                >

                    <div
                        className=
                        "profile-avatar"
                    >
                        <FaUser />
                    </div>

                    <h2
                        className="mt-3"
                    >
                        Customer Profile
                    </h2>

                </div>

                <div
                    className=
                    "info-row"
                >

                    <span
                        className=
                        "info-label"
                    >

                        <FaUser />

                        {" "}
                        Name :

                    </span>

                    {" "}
                    {profile.userName}

                </div>

                <div
                    className=
                    "info-row"
                >

                    <span
                        className=
                        "info-label"
                    >

                        <FaEnvelope />

                        {" "}
                        Email :

                    </span>

                    {" "}
                    {profile.email}

                </div>

                <div
                    className=
                    "info-row"
                >

                    <span
                        className=
                        "info-label"
                    >

                        <FaPhone />

                        {" "}
                        Phone :

                    </span>

                    {" "}
                    {profile.phone}

                </div>

                <div
                    className=
                    "info-row"
                >

                    <span
                        className=
                        "info-label"
                    >
                        Preferences :
                    </span>

                    {" "}
                    {
                        profile.preferenceNotes
                    }

                </div>

                <div
                    className=
                    "profile-actions"
                >

                    <button
                        className=
                        "btn btn-primary me-2"
                    >
                        Edit Profile
                    </button>

                    <button
                        className=
                        "btn btn-success"
                    >
                        Manage Address
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Profile;