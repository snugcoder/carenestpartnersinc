import Image from "next/image";
import IntroBanner from "./components/IntroBanner";
import { Motivation } from "./components/Motivation";
import { Marquee } from "./components/Marquee";


export default function HomePage() {
    return (
        <div className="body-gradient">
            <Marquee />
            <br></br>
            <div className="container mx-auto">
                <IntroBanner />

                <Motivation />
            </div>
        </div>
    )
};