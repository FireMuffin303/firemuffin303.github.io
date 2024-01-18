import Header from "../component/header"
import OutsourceWork from "./OutsourceWork"

export default function portfolio(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Header/>
        <div className={'mt-10'}>
          <div className={"p-5"}>
            <h1 className={"text-lg"}>Game</h1>
            <OutsourceWork 
                url={"https://firemuffin303.itch.io/2-minutes-dungeon"}
                title ={"2 Minutes Dungeon"}
                description={"Made for GMTK Game Jam 2023 Event within 48 hours."}
                />

            <h1 className={"text-lg"}>Minecraft Java Edition Mod</h1>

            <OutsourceWork 
                url={"https://www.curseforge.com/minecraft/mc-mods/muffins-slime-golem"}
                title ={"Muffin's Slime Golem"}
                description={"Add Slime Golem to Minecraft. A good ally for finding Slime Chunks!"}
                />

            <OutsourceWork 
                url={"https://modrinth.com/mod/muffins-songkran"}
                title ={"Muffin's Songkran"}
                description={"Add items from popular culture from Thailand to Minecraft. Songkran!"}
                />

            <h1 className={"text-lg"}>Music</h1>
            <OutsourceWork
                url={"https://soundcloud.com/firemuffin303/joe-final-battle-theme-pokemon-fanmade-music"}
                title={"Joe Final Battle Theme - Pokemon Fanmade Music"}
                description={"A pokemon fan-made music using LMMS"}
            />

            <OutsourceWork
                url={"https://soundcloud.com/firemuffin303/bouncyslime-minecraft-muffins-slime-golem-mod-track"}
                title={"BouncySlime - Muffin's Slime Golem"}
                description={"Music for Muffin's Slime Golem Mod as a music disc in-game. Made by LMMS"}
            />
            
          </div>
        </div>
        
      </div>
    </main>
        
    )
}