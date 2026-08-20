"use client";
import { use, useState } from "react";

export default function InfoForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('database-api', { method: form.method, body: formData });
  }
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <div className="max-w-4xl mx-auto mb-8 px-4 sm:px-6">
        <div className="">
          <form>
            <div className="border-t border-gray-200 pb-12">
              <div><h1 className="font-semibold pt-8">Personal Information</h1></div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="full-name" className="block text-sm/7 font-medium text-black">Full Name</label>
                  <div className="mt-2">
                    <input id="full-name" type="text" name="full-name" autoComplete="given-name" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#16437E] md:text-sm/6" value={fullName} onChange={e=>setFullName(e.target.value)} />
                  </div>
                </div>



                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-black">Email Address</label>
                  <div className="mt-2">
                    <input id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#16437E] md:text-sm/6" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium text-black">Phone Number</label>
                  <div className="mt-2">
                    <input id="phone-number" type="text" name="phone-number" autoComplete="phone number" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300  placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#16437E] md:text-sm/6" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium text-black">Occupation</label>
                  <div className="mt-2">
                    <input id="occuptation" type="text" name="occupation" autoComplete="occupation" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300  placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#16437E] md:text-sm/6" value={occupation} onChange={e => setOccupation(e.target.value)}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full mb-5">
              <label htmlFor="about" className="block text-md/6 font-semibold text-black">Inquiry Details</label>
              <div className="sm:col-span-3">
                <label htmlFor="inquiry-type" className="block text-sm/6 font-medium text-black">Inquiry Type</label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="inquiry-select" name="inquiry-select" autoComplete="inquiry-select" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-[#16437E] md:text-sm/6" htmlFor="form-select">
                    <option >General Information</option>
                    <option>Special Inquiry</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="mt-3 text-sm/6 text-gray-600 font-bold">Kindly provide details about your inquiry.</p>
              <div className="mt-2">
                <textarea id="about" name="about" rows="3" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#16437E] md:text-sm/6"></textarea>
              </div>

            </div>
            <div className="w-full flex justify-end">
              <button className="flex-shrink-1 bg-[#16437E] hover:bg-[#0f3566] border-[#16437E] hover:border-[#0f3566] text-lg border-4 text-[#F9FBED] py-3 px-3 rounded" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* form styling from tailwind documentation: https://v1.tailwindcss.com/components/forms */}
      {/* <div className="shadow-lg shadow-[#aab5c4] max-w-md rounded-lg px-14 py-10 my-10 mx-auto">
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
        </div> */}
    </>
  );
};