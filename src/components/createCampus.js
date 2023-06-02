import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCampusesAsync } from "../campusSlice";

const CreateCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(addCampusesAsync({ name, address, description }));
    setName("");
    setAddress("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} id="formId">
      <label htmlFor="campusName">Campus Name:</label>
      <input
        name="campusName"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="address">Address:</label>
      <input
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <input
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Create</button>
      
      <Link to="/">Go back</Link>
    </form>
  );
};

export default CreateCampus;