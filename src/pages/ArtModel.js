import Navbar from "../components/Navbar";

function ArtModel(){

    const img =[
        "https://imgur.com/PPLxNyW.png",
        "https://imgur.com/XfmAqjK.png",
        "https://imgur.com/MWWGT0r.png",
        "https://imgur.com/7HWN1nB.png",
        "https://imgur.com/Sdip8VQ.png",
        "https://imgur.com/J6z5YDx.png",
        "https://imgur.com/IgmALWO.png",
        "https://imgur.com/JCpgJGj.png",
        "https://imgur.com/AGGKLfq.png",
        "https://imgur.com/JwUzpvl.png",
        "https://imgur.com/EajMeqb.png",
        "https://imgur.com/pctfxeX.png",
        "https://imgur.com/u2UhwzD.png",
        "https://imgur.com/F2Akkgb.png",
        "https://imgur.com/kBUEe1q.png",
        "https://imgur.com/7THWYCJ.png",
        "https://imgur.com/s5ogax1.png",
        "https://imgur.com/Es9Bh8i.png",
        "https://imgur.com/OJZGA9l.png",
        "https://imgur.com/kceDstE.png"
    ]

    return(
        <main className="min-h-screen w-full">
            <Navbar/>

            <div className="bg-muffins-darker-blue m-2 p-5 rounded-md shadow-md sm:mx-8">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                    {img.map(image_src => {
                            return(
                                <a href={image_src} className="m-2">
                                    <img src={image_src}></img>
                                </a>
                            )  
                        })}
                </div>

            </div>
        </main>
    )
}

export default ArtModel;