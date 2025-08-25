import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-[#16437E] text-base-content p-10 flex justify-around">
      <aside className="flex gap-5">
        <img src="./images/carenest_fullimg.svg" alt="Carenest Partners Inc Logo." className="h-40"/>
        <div className="pt-6 footer-text">
        <h1 className="logo-font text-2xl">
          CARENEST PARTNERS INC.
        </h1>
        <p>"enhancing healthcare quality with feasible solutions."</p>
        </div>
        {/* could place media here in the future */}
      </aside>
      
      <div className="flex flex-row footer-text pt-6 gap-10">
      <nav>
        <Link href="/"><h6 className="footer-title flex">home.</h6></Link>
      </nav>
      <nav>
        <Link href="/about/"><h6 className="footer-title">about.</h6></Link>
        <a className="link link-hover">our story</a>
      </nav>
      <nav>
       <Link href="/contact-us/="> <h6 className="footer-title">contact us.</h6></Link>
      </nav>
      </div>
      {/* <div className="divider lg:divider footer-text"><p> © 2025 Carenest Partners Inc. All rights reserved.</p></div>
         */}
    </footer>
  );
}