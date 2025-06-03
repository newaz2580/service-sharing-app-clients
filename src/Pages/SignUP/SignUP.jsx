import React from 'react';
import { Link } from 'react-router';

const SignUP = () => {
    return (
                <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Please Register Now!</h1>

        <form>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your name" />
          <label className="label">Photo</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
          <p>Already have an Account ? please <Link to='/login' className='text-green-700 underline'>Login</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUP;