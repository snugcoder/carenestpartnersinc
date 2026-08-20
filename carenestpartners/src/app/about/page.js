import AboutSummary from "../components/AboutSummary";
import MissionInfo from "../components/MissionInfo";
import PartnerCard from "../components/PartnerCard";

export default function About() {
    return (
        <>
            <div className="container mx-auto">
                <section id="about-summary"> <AboutSummary /> </section>

                <section id="partners" className="">

                    <div id="carousel" className="p-8 bg-[#16437e] align-middle"><h2 className="text-[#D8E594] font-bold text-2xl ">Meet Our Partners</h2></div>
                    <div className="flex md:flex-row justify-between py-10">
                        <PartnerCard />
                        <PartnerCard />
                        <PartnerCard />
                    </div>
                </section>

                <section id="mission"> <MissionInfo /> </section>
            </div>
        </>
    )
};