import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchSingleStudent, selectSingleStudent } from "../singleStudentSlice";
import { selectCampuses } from "../campusSlice.js";
import EditStudent from "./editStudent";


const SingleStudent = () => {
  const dispatch = useDispatch();
  const singleStudent = useSelector(selectSingleStudent);
  const { firstName, lastName, email, imageUrl, gpa } = singleStudent;
  const { studentId } = useParams();
  const allCampuses = useSelector(selectCampuses);

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  const handledErrorAllCampuses = () => {
    if (!Array.isArray(allCampuses)) {
      return [];
    }
    return allCampuses;
  };

  const getCampusName = (campusId) => {
    const campus = handledErrorAllCampuses().find(
      (campus) => campus.id === campusId
    );
    return campus ? campus.name : "No Campus";
  };

  return (
    <div id="studentDivCard">
      <div id="studentDiv">
        <h1>
          {firstName} {lastName}
        </h1>
        <span>Email: {email}</span>
        <span>GPA: {gpa}</span>
        <img src={imageUrl} />
        <div>
          Enrolled at:{" "}
          <Link to={`/campuses/${singleStudent.campusId}`}>
            {getCampusName(singleStudent.campusId)}
          </Link>
        </div>
      </div>

      <div>
        <h1> Update Student</h1>
        <EditStudent />
      </div>
    </div>
  );
};

export default SingleStudent;