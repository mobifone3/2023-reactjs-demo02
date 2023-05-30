import React, { useEffect, useState } from "react";
import axios from "axios";
import TableItem from "./TableItem";
import { callApis } from "../../../../apis";

export default function DataTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (!students?.[0]) {
      callApis.get('/students').then((res) => setStudents(res.data));
    }
  }, [students]);

  return (
    <div className="card acik-renk-form overflow-auto" style={{ maxHeight: "70vh" }}>
      <table className="card-body table table-striped h-100">
        <thead className="thead-dark sticky-top">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Thao Tác</th>
            <th scope="col">Tên</th>
            <th scope="col">Địa Chỉ</th>
          </tr>
        </thead>
        {students?.[0] ? (
          <tbody>
            {students.map((std, idx) => {
              return <TableItem key={idx} student={std} idx={idx} />;
            })}
          </tbody>
        ) : (
          <div class="spinner-border" role="status"></div>
        )}
      </table>
    </div>
  );
}
