import Navbar from "../components/Navbar";

function Misc(){
    return(
        <main className="min-h-screen w-full">
            <Navbar/>

            <div className="bg-muffins-darker-blue m-2 p-5 rounded-md shadow-md sm:mx-8">
                <h1>Music</h1>
                <div>
                <div className="m-2 p-5">
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1646756310&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    <div className="soundcloud">
                        <a href="https://soundcloud.com/firemuffin303" title="FireMuffin303" target="_blank" className="soundcloud-text">FireMuffin303</a> · 
                        <a href="https://soundcloud.com/firemuffin303/somehow-i-accidently-made-spamton-like-song-since-sep-2022" title="somehow i accidently made spamton-like song since sep 2022" target="_blank" className="soundcloud-text">somehow i accidently made spamton-like song since sep 2022</a>
                     </div>
                    </div>
                </div>

                <div className="m-2 p-5">
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1620737544&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    <div className="soundcloud">
                        <a href="https://soundcloud.com/firemuffin303" title="FireMuffin303" target="_blank" className="soundcloud-text">FireMuffin303</a> · 
                        <a href="https://soundcloud.com/firemuffin303/joe-final-battle-theme-pokemon-fanmade-music" title="Joe Final Battle Theme - Pokemon Fanmade Music" target="_blank" className="soundcloud-text">Joe Final Battle Theme - Pokemon Fanmade Music
                        </a>
                    </div>
                </div>
                
            </div>
        </main>
    )
}

function spamtonLikeSong({}){
    
}

export default Misc;