import React from "react";
import { useLoaderData } from "react-router";
import DisplayAllBookedService from "./DisplayAllBookedService";

const TodoService = () => {
  const allBookedService = useLoaderData();
  console.log(allBookedService);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>specialInstruction</th>
              <th>price</th>
              <th>Date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div>
        {allBookedService.map((bookService) => (
          <DisplayAllBookedService
            key={bookService._id}
            bookService={bookService}
          ></DisplayAllBookedService>
        ))}
      </div>
    </>
  );
};

export default TodoService;
