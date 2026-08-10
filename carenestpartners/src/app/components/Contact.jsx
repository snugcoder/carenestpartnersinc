export default function Contact(){
    return (
        <>
        <div className="max-w-4xl mx-auto mb-15">
            <div className="flex flex-col justify-evenly space-10">
                <div className="mb-10 mt-20">
                <h1 className="text-5xl font-bold text-#D8E594" >Let's Stay In Touch</h1>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:space-6">
                    <div className=""> 
                        {/* phone-no. */}
                        <div className="flex">
                        <img src="/images/phone-call.png" alt="carenest contact number" className="p-2 shadow rounded-xl h-11 w-auto"></img>
                        </div>
                        <p className="text-md">(123)-456-7890</p>
                    </div>
                    <div className="">
                        {/* email */}
                       <div className="flex">
                        <img src="/images/email.png" alt="carenest email" className="p-2 shadow rounded-xl h-11 w-auto"></img>
                        </div>
                        <p className="text-md">carenestpartnersinc@hotmail.com</p>
                    </div>
                    <div className="">
                        {/* location */}
                        <div className="flex">
                        <img src="/images/pin.png" alt="carenest address" className="p-2 shadow rounded-xl h-11 w-auto"></img>
                        </div>
                        <p className="text-md">123 Anywhere Street, Laurel MD, 20773</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}