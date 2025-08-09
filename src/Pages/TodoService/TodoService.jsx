import React from "react";
import { useLoaderData } from "react-router";
import DisplayAllBookedService from "./DisplayAllBookedService";

const TodoService = () => {
  const allBookedService = useLoaderData();



  return (
    <div className="container p-4 mx-auto bg-white text-black dark:bg-gray-800 dark:text-white">
      <h2 className="mb-6 text-3xl font-semibold text-center">Service Todo List</h2>

      {allBookedService.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
            No service booked yet.
          </p>
        </div>
      ) : (
        <>
         
          <div className="overflow-x-auto hidden md:block lg:px-30">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-600 dark:text-white text-black ">
                  <th className="p-3">#</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Service Description</th>
                  <th className="p-3">Booking Email</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="dark:bg-gray-800 dark:text-white">
                {allBookedService.map((bookService, index) => (
                  <DisplayAllBookedService
                    key={bookService._id}
                    bookService={bookService}
                    index={index}
                    isMobile={false}
                  />
                ))}
              </tbody>
            </table>
          </div>

          
          <div className="md:hidden space-y-4">
            {allBookedService.map((bookService, index) => (
              <DisplayAllBookedService
                key={bookService._id}
                bookService={bookService}
                index={index}
                isMobile={true}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoService;
