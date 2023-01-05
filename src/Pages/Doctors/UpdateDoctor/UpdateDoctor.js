import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UpdateDoctor = () => {
    const [searchTerm, setSearchTerm] = useState(""); // value of the search input
    const [doctors, setDoctors] = useState([]); // list of doctors
    const [filteredNames, setFilteredNames] = useState([]); // list of names that match the search term
    console.log(doctors);

    //   search doctor by name

    useEffect(() => {
        fetch("http://localhost:5000/doctors")
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, []);
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearch = () => {
        const filteredNames = doctors.filter((doctor) => {
        doctor.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredNames(filteredNames);
        console.log(filteredNames);
    };

    return (
        <div style={{ height: "75vh" }}>
        {/* search box */}
        <input
            type="text"
            placeholder="Search Doctor"
            value={searchTerm}
            onChange={handleChange}
            style={{
            width: "100%",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "20px",
            }}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
            {filteredNames.map((name) => (
            <div>
                <li key={name}>{name.name}</li>
                <li key={name}>{name._id}</li>
            </div>
            ))}
        </ul>
        </div>
    );
};

export default UpdateDoctor;
