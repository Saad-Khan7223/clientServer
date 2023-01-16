import React from 'react'
import axios from 'axios'

import { useState } from 'react'
export default function Form() {
  let [name,setName]=useState("")
  let [desc,setDesc]=useState("")
  let [activity,setActivity]=useState("")
  let [time,setTime]=useState("")
  let [date,setDate]=useState('')

  
const submitHandler=(e)=>{

  console.log(e);
  e.preventDefault()
  
  const person={
    username:name,
    description:desc,
    activity:activity,
    duration:time,
    date:date
  }

  console.log(person)
  axios.post('/excercises/add',person)
  .then(response=>console.log(response.data))

  setName("")
  setDesc('')
  setActivity('activity')
  setTime("0")
  setDate("")
}

  return (
    <div className="container formDiv">
    <form >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input value={name} type="text" className="form-control"  placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}  id="name" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea value={desc} className="form-control" name='description' onChange={(e)=>setDesc(e.target.value)} placeholder="Description" id="floatingTextarea2"></textarea>
        </div>
        <div className="form-floating my-2">
            <select value={activity} className="form-select" id="floatingSelect" name='activity' onChange={(e)=>setActivity(e.target.value)} aria-label="Floating label select example">
              <option  value="activity">Activity</option>
              <option value="run">Run</option>
              <option value="bicycle">Bicycle</option>
              <option value="swim">Swim</option>
              <option value="walk">Walk</option>
              <option value="hike">Hike</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">Time</label>
            <input value={time} type="number" className="form-control" name='duration' onChange={(e)=>setTime(e.target.value)} id="duration"placeholder='Enter in Minutes' aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input value={date} type="date" date-format="dd-mm-yy" className="form-control"   name='date' onChange={(e)=>setDate(e.target.value)}  id="date" aria-describedby="emailHelp"/>
          </div>

          <button type="submit"onClick={submitHandler} className="btn btn-primary btn-block mb-4 col-12">Submit</button>
      </form>
     
   </div>
  )
}
