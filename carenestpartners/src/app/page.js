import Image from "next/image";
import IntroBanner from "./components/IntroBanner";
import { Motivation } from "./components/Motivation";
import { Marquee } from "./components/Marquee";
import { FeaturesSection } from "./components/Features";

export default function HomePage() {
    return (
        <div className="body-gradient">
            <Marquee />
            <br></br>
            <div className="container mx-auto">
                <IntroBanner />
                <FeaturesSection/>
                <Motivation />
            </div>
        </div>
    )
};