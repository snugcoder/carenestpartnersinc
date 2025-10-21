export const Motivation = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-healthcare-cream">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Work where you're needed.{" "}
              <br />
              <span className="text-primary">Thrive where you belong.</span>
            </h2>

            {/* Logo
          <div className="flex justify-center py-8">
            <Image 
              src="/images/carenestpartnerslogo.png"
              alt="Carenest Partners" 
              className="h-16 w-16 opacity-80"
              width={50}
              height={50}
            />
          </div>
          
          // Testimmonial
          <blockquote className="text-xl lg:text-2xl text-foreground font-medium max-w-2xl mx-auto">
            "We love carenest because of the guarantee of proper care"
          </blockquote> */}


              {/* <div className="pt-8">
              <div className="healthcare-card card max-w-md mx-auto text-center bg-card rounded-xl shadow-2xl p-6">
                <figure>
                  <img src="images/nurse_laptop_ai.webp" alt="nurse on laptop"/>
                </figure>
                <div className="card-overlay"></div>
                <p className="text-muted-foreground mb-6">
                  Join thousands of healthcare professionals who trust Carenest with their careers.
                </p>
                <div className="space-y-3">
                  <button className="btn-healthcare-primary px-5 py-3 rounded-lg font-medium mx-auto">
                    Join as Healthcare Professional
                  </button>
                </div>
              </div>
            </div> */}
            <div className="flex flex-row gap-4">
              <div className="pt-8">
                <div className="healthcare-card relative max-w-md max-h-60 mx-auto text-center rounded-xl shadow-2xl overflow-hidden">
                  {/* Image fills the entire card */}
                  <img
                    src="images/nurse_laptop_ai.webp"
                    alt="nurse on laptop"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay tint */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  {/* Text + Button content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-10 text-white">
                    <p className="mb-6 text-lg font-medium">
                      Join thousands of healthcare professionals who trust Carenest with their careers.
                    </p>
                    <button className="btn-healthcare-primary">
                      Join as Healthcare Professional
                    </button>
                  </div>
                </div>
              </div>



              <div className="pt-8">
                <div className="healthcare-card relative max-w-md max-h-60 mx-auto text-center rounded-xl shadow-2xl overflow-hidden">
                  {/* Image fills the entire card */}
                  <img
                    src="images/admin_ai.webp"
                    alt="nurse on laptop"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay tint */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-10 text-white">
                    <p className="mb-6 text-lg font-medium">
                      Join care facilities who trust Carenest with supportive nursing professionals.
                    </p>
                    <button className="btn-healthcare-primary">
                      See Solutions a Care Facility
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};