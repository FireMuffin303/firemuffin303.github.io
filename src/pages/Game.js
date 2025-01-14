import Navbar from "../components/Navbar";

function Game(){
    return (
        <main className="min-h-screen w-full">
            <Navbar/>

            <div className="bg-muffins-darker-blue m-2 p-5 rounded-md shadow-md sm:mx-8">
                <h1 className="flex justify-center">Game</h1>
                <div className="grid grid-cols-1 justify-center xl:grid-cols-2">
                    <iframe height="167" frameborder="0" src="https://itch.io/embed/2913996" width="552" className="m-2">
                        <a href="https://firemuffin303.itch.io/scaling-knight">Scaling Knight by FireMuffin303</a>
                    </iframe>

                    <iframe src="https://itch.io/embed/2159097" width="552" height="167" frameborder="0" className="m-2">
                        <a href="https://firemuffin303.itch.io/2-minutes-dungeon">2 Minutes Dungeon by FireMuffin303</a>
                    </iframe>
                </div>
                
            </div>
        </main>
        
    )
}

export default Game;