export default function NewsBanner({ imageUrl, title, blurb, author, readinglength }) {

    return (
        <>
            <div>
                <div className="m-10 min-h-[550px] md:h-[200px] rounded-2xl relative overflow-hidden "

                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                    }}>
                    <div id="bannerInfo" className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row justify-between items start sm:items-end gap-6">
                        <div className="max-w-4xl align-middle">
                            <div id="title-and-blurb">
                                <h1 className="mb-5 text-6xl font-bold leading-tight text-white">{title}</h1>
                                <p className="mt-2 text-white md:text-lg">{blurb}</p>
                            </div>
                            <div id="articleInfo" className="flex md:flex-row gap-7 items-center">
                                <p className="text-white md:text-lg">{author}</p>
                                <div className="w-1.5 h-1.5 rounded-full bg-white"/>
                                <p className="text-white md:text-lg">{readinglength}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

} ''