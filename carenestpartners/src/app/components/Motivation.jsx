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

            <div className="flex flex-row gap-4">
              <div className="pt-8">
                <div className="healthcare-card relative max-w-md flex-col lg:flex-row mx-auto text-center rounded-xl shadow-2xl overflow-hidden">
                  {/* Image fills the entire card */}
                  <img
                    src="/images/ai_d_banner.jpeg"
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
                <div className="healthcare-card relative max-w-md flex-col lg:flex-row mx-auto text-center rounded-xl shadow-2xl overflow-hidden">
                  {/* Image fills the entire card */}
                  <img
                    src="/images/admin_ai.webp"
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