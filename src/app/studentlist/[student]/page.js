"use client"
export default function StudentList({params}) {

    console.log({params})
  return (
    <div>
      <h1> Student Details</h1>
      <h4>Student name {params.student}</h4>
    </div>
  );
}
