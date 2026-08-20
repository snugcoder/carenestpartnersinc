export default function AboutSummary() {
    return (
        <>
            <div className="">
                <div className="m-10 min-h-[550px] md:h-[200px] rounded-2xl relative overflow-hidden "
                    // grey overlay: after:absolute after:inset-0 after:bg-gray-500 after:opacity-50
                    style={{
                        backgroundImage:
                            "url('/images/about-us-img.jpg')",
                        backgroundSize: "cover",
                    }}></div>
                <div className="m-15">
                    <div id="p-1"> <p className="">At Carenest Partners Inc., we believe that finding the right per diem shift shouldn't feel like a numbers game. As a Maryland-based staffing partner, we specialize in connecting dedicated healthcare professionals — RNs, LPNs, CNAs, and more — with facilities that need their skills, when they need them. Our mission is simple: to make the job search process feel supported, not stressful, so you can focus on what matters most — delivering excellent patient care.</p> </div>
                    <br></br>
                    <div id="p-2" className="flex md:flex-row align-middle max-w-4xl gap-8">
                        <p className=""> What sets us apart is our size. As a small, dedicated team, we take a personal approach to every professional we work with. We don't believe in one-size-fits-all placements or letting candidates get lost in a crowded system. Instead, we take the time to understand your schedule, your goals, and your preferences, so we can match you with opportunities that truly fit your life. From your first inquiry to your first shift, we're here to guide, support, and advocate for you every step of the way — because we believe every healthcare professional deserves attention, respect, and a partner who's invested in their success.</p>
                        <img src="/images/working-prof.jpg" className="h-50 rounded-xl object-contain" />
                    </div>
                </div>
            </div>
        </>
    );
};