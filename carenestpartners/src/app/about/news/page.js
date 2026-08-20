import NewsBanner from "@/app/components/NewsBanner";
import NewsCard from "@/app/components/NewsCard";

export default function News(){
    return(
        <>
        <section id="news-banner">
            <NewsBanner imageUrl={"https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Carenest Partners Inc. News"} blurb={"Providing your information, fresh off the press"} author={"CARENEST PARTNERS"} readinglength={"2 mins"}/>
        </section>
        <section id="populate-stories">
        <div>
        <NewsCard imageUrl={"https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Trustworthy Healthcare News in the Current Administration"} author={"Kacey Lin"}/>
        </div>
        </section>
        </>
    )
};