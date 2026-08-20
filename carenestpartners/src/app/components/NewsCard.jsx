export default function NewsCard({ imageUrl, altText, title, author}) {
    return (
        <>
            <div className="container mx-auto">
                <div className="m-8 w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src={imageUrl} alt={altText} className="w-full h-70 object-cover" />
                    <div className="flex flex-col p-5">
                        <p className="text-bold text-md">{title}</p>
                        <p className="text-sm/6">{author}</p>
                    </div>

                </div>

            </div>
        </>
    );
};