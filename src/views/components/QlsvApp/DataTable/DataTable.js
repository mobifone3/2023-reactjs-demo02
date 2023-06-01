import React, { useEffect, useState } from "react";
import axios from "axios";
import TableItem from "./TableItem";
import { callApis } from "../../../../apis";

export default function DataTable({ students, loading }) {
  console.log(students);
  return (
    <div className="card acik-renk-form overflow-auto" style={{ maxHeight: "70vh" }}>
      {students?.[0] ? (
        <table className="card-body table table-striped">
          <thead className="thead-dark sticky-top">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Thao Tác</th>
              <th scope="col">Tên</th>
              <th scope="col">Địa Chỉ</th>
            </tr>
          </thead>
          <tbody>
            {students.map((std, idx) => {
              return <TableItem key={idx} student={std} idx={idx} />;
            })}
          </tbody>
        </table>
      ) : loading ? (
        <div className="spinner-border" role="status"></div>
      ) : null}
    </div>
  );
}
