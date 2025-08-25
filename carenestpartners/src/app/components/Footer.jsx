import Link from "next/link";

export default function Footer() {
  return (
      <footer className=" bg-[#16437E]">
        <div className="footer sm:footer-horizontal text-base-content p-10 flex justify-between">
        <aside className="flex gap-5">
          <img src="./images/carenest_fullimg.svg" alt="Carenest Partners Inc Logo." className="h-40" />
          <div className="pt-6 footer-text">
            <h1 className="logo-font text-2xl">
              CARENEST PARTNERS INC.
            </h1>
            <p>"enhancing healthcare quality with feasible solutions."</p>
          </div>
          {/* could place media here in the future */}
        </aside>

        <div className="footer-text pt-6 text-xl">
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
        <div className="footer-text flex justify-center pb-4 text-[#F9FBED]"><p> © 2025 Carenest Partners Inc. All rights reserved.</p></div>
      </footer>
  );
}