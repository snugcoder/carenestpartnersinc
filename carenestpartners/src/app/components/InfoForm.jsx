export const InfoForm = () => {
  return (
    <>
      <form className="w-full max-w-sm">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="card-title text-4xl">Ready to start your journey?</h2>
          <h3 className="text-xl">Enter your details to join our community today!</h3>
          <br />

          <div className="form flex flex-col">
            <div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2">
                  First Name
                </label>
                <input className="appearance-none block-w-full   border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whitebg-gray-200" placeholder="Jane" />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2">
                  Last Name
                </label>
                <input className="appearance-none block-w-full   border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whitebg-gray-200" placeholder="Doe" />
              </div>
            </div>
            <br />
            <div>
              <div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2">
                    email address
                  </label>
                  <input className="appearance-none block-w-full   border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whitebg-gray-200" placeholder="jdoe@email.com" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-s text-gray-500 font-bold mb-2" htmlFor="form-select">
                    inquiry type
                  </label>
                  <div class="relative">
                    <select id="form-select" className="form-select block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value={"General Information"}>General Information</option>
                      <option value={"Special Inquiry"}>Special Inquiry</option>
                      <option value={"Open House Visit"}>Oppen House Visit</option>
                    </select>
                    </div>
                    <input className="appearance-none block-w-full   border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-whitebg-gray-200" placeholder="General Information" />
                  </div>
                </div>
              </div>
              {/* email + inquiry dropdown?  */}
            </div>
          </div>
      </form>
    </>
  );
};