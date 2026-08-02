"use client";
import { use, useState } from "react";

export default function InfoForm (){
  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('database-api', {method: form.method, body: formData });
  }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      {/* form styling from tailwind documentation: https://v1.tailwindcss.com/components/forms */}
        <div className="shadow-lg shadow-[#aab5c4] max-w-md rounded-lg px-14 py-10 my-10 mx-auto">
        <form className=" mb-4 w-full max-w-sm"  method="post" onSubmit={handleSubmit}>
          <h2 className="card-title text-4xl">Ready to start your journey?</h2>
          <h3 className="text-xl">Enter your details to join our community today!</h3>

          <br/>
          <div className="flex flex-wrap -mx-4 mb-8 gap-y-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2">
                First Name
              </label>
              <input className="appearance-none block w-full   border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-1 focus:bg-white bg-gray-200" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2">
                Last Name
              </label>
              <input className="appearance-none block not-first:w-full   border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-1 focus:bg-white bg-gray-200" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2">
                email address
              </label>
              <input className="appearance-none block w-full   border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-1 focus:bg-white bg-gray-200" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2" htmlFor="form-select" name="inquiry">
                inquiry type
              </label>
              <div className="relative">
                <select id="form-select" className="form-select block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value={"General Information"}>General Information</option>
                  <option value={"Special Inquiry"}>Special Inquiry</option>
                  <option value={"Open House Visit"}>Open House Visit</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button className="flex-shrink-1 bg-[#16437E] hover:bg-[#0f3566] border-[#16437E] hover:border-[#0f3566] text-lg border-4 text-[#F9FBED] py-3 px-3 rounded" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        </div>
    </>
  );
};