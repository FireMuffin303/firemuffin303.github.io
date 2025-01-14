
function Home(){
    return(
        <main className="min-h-screen w-full">
            <div className="h-screen flex flex-col items-center justify-center">
            
            <h1 className="font-bold flex justify-center text-lg">Portfolio</h1>
            <i className=" flex justify-center pb-5 text-lg">Sutthiphong Wichaikhammat</i>
            <nav className="flex justify-between  w-screen px-5 my-2 sm:w-2/3 sm:px-10">
                <a href="/minecraft">Minecraft</a>
                <a href="/art">Art & Model</a>
                <a href="/game">Game</a>
                <a href="/other">Other</a>
            </nav>
            </div>
            
        </main>
    )
}

export default Home;