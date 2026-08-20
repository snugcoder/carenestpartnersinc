// create one card to duplicate for all partners
export default function PartnerCard({partnerName, partnerPicture, paragraph}){
    return (
        <>
        
            <div className="">
                <img className="h-100 w-90"  src={partnerPicture}/>
                <p>{paragraph}</p>
            </div>
 
        </>
    );
};