import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import axios from "axios";
export default function EditExcercise() {
  const { id } = useParams();
  const [arrData, setArrData] = useState([]);
  const navigate=useNavigate()
  let [updateExercise, setUpdateExercise] = useState({
    username: "",
    description: "",
    activity: "",
    duration: "",
    date: "",
  });

  // const [updateData,setUpdateData]=useState({
  // username:name,
  // description:desc,
  // activity:activity,
  // duration:time,
  // date:date
  // })
  function fetchData() {
    axios.get("/excercises").then((res) => {
      // console.log("response data", res.data);
      setArrData(res.data);
    });
  }
  console.log(updateExercise);
  useEffect(() => {
    fetchData();
  }, []);
const upDateHandler=(e)=>{
  e.preventDefault()
  axios.post('/update/'+id,updateExercise)
  .then(res=>res.data)
  alert('Updated Data Sucessfully')
  navigate('/')
}
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={updateExercise.username}
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={(e) =>
              setUpdateExercise({ ...updateExercise, username: e.target.value })
            }
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            value={updateExercise.description}
            className="form-control"
            name="description"
            onChange={(e) =>
              setUpdateExercise({
                ...updateExercise,
                description: e.target.value,
              })
            }
            placeholder="Description"
            id="floatingTextarea2"
          ></textarea>
        </div>
        <div className="form-floating my-2">
          <select
            value={updateExercise.activity}
            className="form-select"
            id="floatingSelect"
            name="activity"
            onChange={(e) =>
              setUpdateExercise({ ...updateExercise, activity: e.target.value })
            }
            aria-label="Floating label select example"
          >
            <option value="activity">Activity</option>
            <option value="run">Run</option>
            <option value="bicycle">Bicycle</option>
            <option value="swim">Swim</option>
            <option value="walk">Walk</option>
            <option value="hike">Hike</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Time
          </label>
          <input
            value={updateExercise.duration}
            type="number"
            className="form-control"
            name="duration"
            onChange={(e) =>
              setUpdateExercise({ ...updateExercise, duration: e.target.value })
            }
            id="duration"
            placeholder="Enter in Minutes"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            value={updateExercise.date}
            type="date"
            date-format="dd-mm-yy"
            className="form-control"
            name="date"
            onChange={(e) =>
              setUpdateExercise({ ...updateExercise, date: e.target.value })
            }
            id="date"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit"onClick={upDateHandler} className="btn btn-bg-success bg-success btn-block mb-4 col-12 text-warning">Update</button>
      </form>
    </div>
  );
}
