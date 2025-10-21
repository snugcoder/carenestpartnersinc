import Image from "next/image";
import IntroBanner from "./components/IntroBanner";
import { Motivation } from "./components/Motivation";
import { Marquee } from "./components/Marquee";
import { FeaturesSection } from "./components/Features";
import { InfoForm } from "./components/InfoForm";

export default function HomePage() {
    return (
        <div className="body-gradient">
            <Marquee />
            <br></br>
            <IntroBanner />
            <div className="container mx-auto">
                
                <FeaturesSection/>
                <Motivation />
                <InfoForm/>
            </div>
        </div>
    )
};