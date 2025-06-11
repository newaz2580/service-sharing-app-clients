import React from "react";
import { useLoaderData } from "react-router";
import DisplayAllBookedService from "./DisplayAllBookedService";

const TodoService = () => {
  const allBookedService = useLoaderData();
  console.log(allBookedService);
  return (
    <>
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-500">
	<h2 className="mb-4 text-2xl font-semibold leading-tight text-center">Service Todo List</h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup>
			<thead>
				<tr className="dark:bg-gray-300">
					<th className="p-3 text-2xl">#</th>
					<th className="p-3 text-2xl">Name</th>
					<th className="p-3 text-2xl">Service Description</th>
					<th className="p-3 text-2xl">Provider Email</th>
					<th className="p-3 text-2xl">Price</th>
					<th className="p-3 text-2xl">Date</th>
					<th className="p-3 text-2xl">
						<span className="p-3">Status</span>
					</th>
				</tr>
			</thead>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
			
        {allBookedService.map((bookService,index) => (
          <DisplayAllBookedService
            key={bookService._id}
            bookService={bookService}
            index={index}
          ></DisplayAllBookedService>
        ))}
    
				
			</tbody>
			
		</table>
	</div>
</div>
      {/* <div className="overflow-x-auto">
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
      </div> */}
    </>
  );
};

export default TodoService;
