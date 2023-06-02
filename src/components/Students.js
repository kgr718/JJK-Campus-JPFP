import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudents,
  deleteStudentsAsync,
  selectStudents,
} from "./studentSlice.js";
import { selectCampuses } from "../campusSlice";
import { Link } from "react-router-dom";
import CreateStudent from "./createStudent.js";

const Students = () => {
  const dispatch = useDispatch();
  const allStudents = useSelector(selectStudents);
  const allCampuses = useSelector(selectCampuses);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, []);

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

  const handleDelete = (id) => {
    dispatch(deleteStudentsAsync(id));
  };

  const handledErrorAllStudents = () => {
    if (!Array.isArray(allStudents)) {
      return [];
    }
    return allStudents;
  };

  return (
    <div className="srcComponents">
      <div>
        <h1>Sorcerers</h1>
        <div className="makeSibling">
          <div className="leftSibling">
            {handledErrorAllStudents().map((student) => {
              return (
                <div key={student.id}>
                  <div id="studentDiv">
                    <Link
                      to={`/students/${student.id}`}
                      key={`All Students: ${student.id}`}
                    >
                      {student.firstName} {student.lastName}
                    </Link>{" "}
                    Attends: {getCampusName(student.campusId)}
                    <span>Email: {student.email}</span>
                    <span>GPA: {student.gpa}</span>
                    <img src={student.imageUrl} alt={student.name} />
                    <div className="delete-button">
                      <button onClick={() => handleDelete(student.id)}>
                        x
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <CreateStudent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;