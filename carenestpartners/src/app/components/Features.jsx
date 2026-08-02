export const FeaturesSection = () => {

  const Calender = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={45} height={45} fill="#16437E">
      {/* <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
      <path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z" /></svg>
  );

  const Users = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={45} height={45} fill="#16437E">
        {/* <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        <path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z" /></svg>

  )

  const Headset = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={45} height={45} fill="#16437E">
      {/* <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
      <path d="M320 128C241 128 175.3 185.3 162.3 260.7C171.6 257.7 181.6 256 192 256L208 256C234.5 256 256 277.5 256 304L256 400C256 426.5 234.5 448 208 448L192 448C139 448 96 405 96 352L96 288C96 164.3 196.3 64 320 64C443.7 64 544 164.3 544 288L544 456.1C544 522.4 490.2 576.1 423.9 576.1L336 576L304 576C277.5 576 256 554.5 256 528C256 501.5 277.5 480 304 480L336 480C362.5 480 384 501.5 384 528L384 528L424 528C463.8 528 496 495.8 496 456L496 435.1C481.9 443.3 465.5 447.9 448 447.9L432 447.9C405.5 447.9 384 426.4 384 399.9L384 303.9C384 277.4 405.5 255.9 432 255.9L448 255.9C458.4 255.9 468.3 257.5 477.7 260.6C464.7 185.3 399.1 127.9 320 127.9z" /></svg>
  )

  const features = [
    {
      icon: Calender,
      title: "Shift Booking / On demand Scheduling",
      description: "Book shifts that fit your schedule with our flexible on-demand platform."
    },
    {
      icon: Users,
      title: "Job Matching & Placement",
      description: "Get matched with healthcare facilities that need your specific skills and expertise."
    },
    {
      icon: Headset,
      title: "Support Services",
      description: "24/7 dedicated support to help you succeed in your healthcare career."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Flexible nursing jobs, tailored to{" "}
              <span className="text-primary text-[#D8E594]">you.</span>
            </h2>

            {/* Decorative Elements */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-secondary-dark rounded-full"></div>
              <div className="w-5 h-5 bg-healthcare-green rounded-full"></div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group"
              >
                <div className="bg-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors flex gap-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};