import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function Card() {
  const [arrData, setArrData] = useState([]);
  const navigate=useNavigate();
  function fetchData(){
    axios
    .get("/excercises")
    .then((res) => setArrData(res.data));
  }
  useEffect(() => {
   fetchData()
  }, []);
  const DeleteHandler=(e)=>{
    let id = e;
    axios.delete('/excercises/'+id)
    .then(res=>console.log(res))
    // window.location.reload()
    fetchData()

  }
  const updateHandler=(e)=>{

    let id=e;
    console.log(id)
    navigate(`/edit/${id}`)
  }
  return (
    <div>
      <h3 className="fw-bold text-center mt-3">Your Activites</h3>
      <div className="container cardContainer">
        <div className="row">
          {arrData.map((data) => (
            <div key={data._id} className="col-12 col-md-3 col-lg-4">
              <div>
                <div
                  className="card border-info mb-3"
                  style={{ maxWidth: "100vw" }}
                >
                  <div className="card-header text-dark">{data.username}</div>
                  <div className="card-body text-dark">
                    <h5 className="card-title">{data.activity}</h5>
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{data.description}</p>
                    <p className="card-text">Duration:{data.duration}</p>
                    <p className="card-text">Date:{data.date}</p>
                  </div>
                  <button type="button" onClick={()=>updateHandler(data._id)} className="btn btn-outline-success">
                    Update
                  </button>
                  <button type="button" onClick={()=>DeleteHandler(data._id)} className="btn btn-outline-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
