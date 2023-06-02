import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editStudentAsync } from "./studentSlice";
import { fetchSingleStudent } from "./singleStudentSlice";

const EditStudent = () => {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [campus, setCampus] = useState("");
    const [campusId, setCampusId] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(editStudentAsync({ id, firstName, lastName, email, campus, campusId }));
        await dispatch(fetchSingleStudent(id))
        setId("")
        setFirstName("");
        setLastName("");
        setEmail("");
        setCampus("");
        setCampusId("");
    };

  return (
    <form onSubmit={handleSubmit} id="formId">

    <label htmlFor="id">ID:</label>
      <input
        name="id"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
        
      <label htmlFor="firstName">First Name:</label>
      <input
        name="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        name="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
    
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="campus">Campus:</label>
      <input
        name="campus"
        value={campus}
        onChange={(event) => setCampus(event.target.value)}
      />

      <label htmlFor="campusId">Campus ID:</label>
      <input
        name="campusId"
        value={campusId}
        onChange={(event) => setCampusId(event.target.value)}
      />
    
      <button type="submit">Update</button>
      <Link to="/">Go back</Link>
    </form>
  );
};

export default EditStudent;