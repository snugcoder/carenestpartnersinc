export const InfoForm = () => {
  return (
    <>
      <div className="form card">
        <h2 className="card-title">Ready to start your journey?</h2>
        <h3>Enter your details to join our community today!</h3>
        <br />

        <div className="form">
          {/* first name - last name */}
          <fieldset>
            <input type="text" placeholder="First Name" className="input-xl" />
            <input type="text" placeholder="Last Name" className="input-xl" />
            <br/>
            <div>
            <input type="text" placeholder="Email Address" className="input-xl" />
            <input type="text" placeholder="Inquiry Type" className="input-xl" />
            </div>
          </fieldset>
          {/* email + inquiry dropdown?  */}
        </div>
      </div>
    </>
  );
};