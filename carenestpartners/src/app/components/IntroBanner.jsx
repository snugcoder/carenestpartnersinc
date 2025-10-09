import Image from "next/image";
import Link from "next/link";
export default function IntroBanner() {
    return (
        // <div id="infobanner" className="flex items-center justify-center gap-6">
        //                 <div className="banner-container flex flex-col items-center gap-30">
        //                     <div id="infotitle" className="px-15">
        //                         <h1 className="text-4xl lg:text-5xl font-bold">Smart Staffing For A Healthier Tomorrow</h1>
        //                         </div>

        //                     <button className="banner-btn flex gap-3 text-lg items-center hover:shadow-xl">
        //                        <Link href="/join-our-network/page.js">Join Our Network</Link> 
        //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="30" height="30">
        //                             {/* <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        //                             <path fill="#f9fbed" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" /></svg>
        //                     </button>
        //                 </div>

        //                 <div>
        //                     <Image className="rounded-xl shadow-2xl" src={"/images/nappy-unsplash.jpg"} width={600} height={400} alt="Nurse Image From Nappy Unsplash" />
        //                 </div>
        //             </div>

        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url('images/ai_banner.jpeg')",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Smarter Staffing for a Healthier Tomorrow</h1>
                    <p className="mb-5 text-white">
                        At Carenest Partners Inc. we make it our priority to develop an intelligent workforce.  
                    </p>
                    <button className="btn btn-primary text-white">Join Our Network</button>
                    <button className="btn btn-primary text-white">Explore Solutions</button>
                </div>
            </div>
        </div>
    );
}