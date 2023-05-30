import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Route, Routes } from "react-router";

import FormDemo from "./components/QlsvApp/FormDemo";
import Header from "./components/QlsvApp/Header";
import DataTable from "./components/QlsvApp/DataTable/DataTable";
import { callApis } from "../apis";

export default function QlsvApp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [students, setStudents] = useState([]);

  // ----------------------------------------------------------------------------------
  useEffect(() => {
    setLoading(true);
    handleGetAllStudents();
  }, []);

  // ----------------------------------------------------------------------------------
  const handleGetAllStudents = async () => {
    const response = await callApis.get('/students');
    const data = response?.data?.[0] ? response.data : [];
    setLoading(false);
    setStudents(data);
  }

  /**
   * Hàm xử lý khi form thay đổi
   * @param {*} e : input element nhận vào
   */
  const handleOnChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = () => {
    if (!formData["address"] || !formData["name"]) return alert("Không Có Address");
    const postData = { ...formData, createdAt: new Date() };
    setLoading(true);
    callApis.post("/students", postData).then(async (res) => {
      if (res?.data?.id) {
        await handleGetAllStudents();
      }
    });
  };


  // ----------------------------------------------------------------------------------
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
          <div className="row" style={{ maxHeight: "70vh", overflow: "auto" }}>
            <div className="col-12">
              <FormDemo loading={loading} formData={formData} handleOnChangeForm={handleOnChangeForm} handleSubmitForm={handleSubmitForm} />
            </div>
            <div className="col-12">
              <DataTable students={students} loading={loading}/>
            </div>
          </div>
          {/* ------------------------------- LỖI SWITCH ROUTE Ở ĐÂY NHÉ !!!!-------------------------------  */}
          {/* <Routes>
            <Route path="/table" element={<DataTable loading={loading} students={students} />}></Route>
            <Route path="/form" element={<FormDemo loading={loading} formData={formData} handleOnChangeForm={handleOnChangeForm} handleSubmitForm={handleSubmitForm} />} />
          </Routes> */}
          {/* <Outlet /> */}
        </div>
      </section>
    </>
  );
}

// anonymous function (es5) es6 arrow function
