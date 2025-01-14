
function Navbar(){
    return(
        <nav className="flex justify-between w-screen px-5 my-2 sm:px-10 sm:justify-evenly">
            <a href="./">Home</a>
            <a href="/minecraft">Minecraft</a>
            <a href="/art">Art & Model</a>
            <a href="/game">Game</a>
            <a href="/other">Other</a>
        </nav>
    )
}

export default Navbar;