import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCampuses,
  deleteCampusesAsync,
  selectCampuses,
} from "../campusSlice";
import { Link } from "react-router-dom";
import CreateCampus from "./createCampus";


const Campuses = () => {
  const dispatch = useDispatch();
  const allCampuses = useSelector(selectCampuses);

  const handledErrorAllCampuses = () => {
    if (!Array.isArray(allCampuses)) {
      return [];
    }
    return allCampuses;
  };

  const students = useSelector((state) => state.students);

  const getEnrollmentCount = (campusId) => {
    if (!Array.isArray(students)) {
      return [];
    }
    return students.filter((student) => student.campusId === campusId).length;
  };

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteCampusesAsync(id));
  };

  return (
    <div className="srcComponents">
      <div>
        <h1>Campuses</h1>
        <div className="makeSibling">
          <div className="leftSibling">
            {handledErrorAllCampuses().map((campus) => {
              const enrollmentCount = getEnrollmentCount(campus.id);

              return (
                <div key={campus.id}>
                  <div id="campusesDiv">
                    <Link
                      to={`/campuses/${campus.id}`}
                      key={`All Campuses: ${campus.id}`}
                    >
                      {campus.name}
                    </Link>
                    <span>Address: {campus.address}</span>
                    <span>Description: {campus.description}</span>
                    <span>Enrollments: {enrollmentCount}</span>
                    <img src={campus.imageUrl} alt={campus.name} />
                    <div className="delete-button">
                      <button onClick={() => handleDelete(campus.id)}>
                        x
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <CreateCampus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campuses;