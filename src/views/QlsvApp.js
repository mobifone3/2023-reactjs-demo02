import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router";

import FormDemo from "./components/QlsvApp/FormDemo";
import Header from "./components/QlsvApp/Header";
import DataTable from "./components/QlsvApp/DataTable/DataTable";

export default function () {
  // const [students, setStudents] = useState([]);

  const handleAddStudent = (_formData) => {
    // setStudents([...students, _formData]);
    axios.post("https://5f9b85e1856f4c00168c26e6.mockapi.io/students", { ..._formData, createdAt: new Date() });
  };

  return (
    <>
      <Header />
      <section className="search-banner text-white py-3 form-arka-plan" id="search-banner">
        <div className="container py-5 my-5">
          <div className="row text-center pb-4">
            <div className="col-md-12">
              <h2 className="text-secondary">Web Gì Đó</h2>
            </div>
          </div>
          {/* <div className="row" style={{ maxHeight: "70vh", overflow: "auto" }}>
            <div className="col-12">
              <FormDemo handleAddStudent={handleAddStudent} />
            </div>
            <div className="col-12">
              <DataTable />
            </div>
          </div> */}
          {/* ------------------------------- LỖI SWITCH ROUTE Ở ĐÂY NHÉ !!!!-------------------------------  */}
          {/* <Routes>
            <Route path="/table" element={<DataTable />}></Route>
            <Route path="/form" element={<FormDemo handleAddStudent={handleAddStudent} />} />
          </Routes> */}
        </div>
      </section>
    </>
  );
}

// anonymous function (es5) es6 arrow function
