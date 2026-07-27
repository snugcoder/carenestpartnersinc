import Link from "next/link";

export default function Footer() {
  return (
      <footer className=" bg-[#16437E]">
        <div className="flex flex-col justify-between md:flex-row text-base-content p-10 ">
        
        <aside className="flex flex-col gap-5">
          <div>
          <img src="./images/carenest_fullimg.svg" alt="Carenest Partners Inc Logo." className="h-40" />
          <div className="pt-6 footer-text">
            <h1 className="logo-font text-3xl">
              CARENEST PARTNERS INC.
            </h1>
            <p>"enhancing healthcare quality with feasible solutions."</p>
          </div>
          </div>
          <div className="flex flex-row gap-7">
            {/* media attribution - <a href="https://www.flaticon.com/free-icons/brands-and-logotypes" title="brands and logotypes icons">Brands and logotypes icons created by Magnific - Flaticon</a> */}
            <div>
              <img src="./images/instagram.png" alt="instagram" className="h-8"/>
            </div>
            <div>
              
              <img src="./images/facebook.png" alt="facebook" className="h-8"/>
            </div>
            <div>
              <img src="./images/twitter.png" alt="twitter/X" className="h-8"/>
            </div>
            <div>
              <img src="./images/linkedin.png" alt="linkedin" className="h-8"/>
            </div>
          </div>
        </aside>
        <div className="footer-text pt-6 pl-4 text-2xl">
          <nav>
            <Link href="/"><h6 className="footer-title flex">home.</h6></Link>
          </nav>
          <nav>
            <Link href="/about/"><h6 className="footer-title">about.</h6></Link>
          </nav>
          <nav>
            <Link href="/contact-us/"> <h6 className="footer-title">services.</h6></Link>
          </nav>

          <nav>
            <Link href="/contact-us/"> <h6 className="footer-title">contact us.</h6></Link>
          </nav>
        </div>
        </div>
        <div className="footer-text copyright flex justify-center pb-4 text-[#F9FBED]"><p> © 2026 Carenest Partners Inc. All rights reserved.</p></div>
      </footer>
  );
}