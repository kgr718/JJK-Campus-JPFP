import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSingleCampus, selectSingleCampus } from "./singleCampusSlice"

import { selectStudents, unregisterStudentAsync } from "./studentSlice";

import { Link } from "react-router-dom";
import EditCampus from "./editCampus.js";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const singleCampus = useSelector(selectSingleCampus);
  const { name, imageUrl, address, description } = singleCampus;
  const { campusId } = useParams();
  const allStudents = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  const getEnrolledStudents = (campusId) => {
    if (!Array.isArray(allStudents)) {
      return [];
    }
    return allStudents.filter(
      (student) => student.campusId === Number(campusId)
    );
  };

  const enrolledStudents = getEnrolledStudents(campusId);

  const handleUnregister = async (studentId) => {
    await dispatch(unregisterStudentAsync({ id: studentId, campusId: null }));
  };

  return (
    <div id="singleCampusDiv">
      <div id="campusDiv">
        <h1>{name}</h1>
        <span>Address: {address}</span>
        <span>Description: {description}</span>
        <img src={imageUrl} alt={name} />
        <h4>Enrolled Students:</h4>
        {enrolledStudents.map((student) => (
          <div key={student.id}>
            <div id="studentDiv">
              <Link
                to={`/students/${student.id}`}
                key={`All Students: ${student.id}`}
              >
                {student.firstName} {student.lastName}
              </Link>
              <div className="delete-button">
                <button onClick={() => handleUnregister(student.id)}>
                  Unregister
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1> Update Student</h1>
        <EditCampus />
      </div>
    </div>
  );
};
export default SingleCampus;