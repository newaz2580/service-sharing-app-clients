import React from 'react';
import { useLoaderData } from 'react-router';
import DisplayAllBookedService from './DisplayAllBookedService';

const TodoService = () => {
    const allBookedService=useLoaderData()
    console.log(allBookedService)
    return (

        <>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
 
      
      
    
    </tbody>
  </table>
</div>
          <div>
            {
                allBookedService.map(bookService=><DisplayAllBookedService key={bookService._id} bookService={bookService}></DisplayAllBookedService>)
            }
        </div>
        </>
      
    );
};

export default TodoService;