import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCampusAsync} from "../campusSlice";
import { fetchSingleCampus } from "./singleCampusSlice";

const EditCampus = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
      event.preventDefault();
      await dispatch(editCampusAsync({ id, name, address, description }));
      await dispatch(fetchSingleCampus(id))
      setId("")
      setName("");
      setAddress("");
      setDescription("");
    };

  return (
    <form onSubmit={handleSubmit} id="formId">

    <label htmlFor="campusId">Campus ID:</label>
    <input
      name="campusId"
      value={id}
      onChange={(event) => setId(event.target.value)}
    />

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

    <button type="submit">Update</button>
    
    <Link to="/">Go back</Link>
  </form>
  );
};

export default EditCampus;