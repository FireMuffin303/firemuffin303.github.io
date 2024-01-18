'use client'
import Image from 'next/image'
import Header from './component/header'
import OutsourceWork from './portfolio/OutsourceWork'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      
        <div className={'mt-10'}>
          <a href='https://www.youtube.com/@FireMuffin303' className={"bg-slate-700 p-2 rounded-md text-lg justify-center"}>Youtube</a>
          <div className={"p-5"}>
            <h1 className={"text-lg"}>Game</h1>
            <OutsourceWork 
                url={"https://firemuffin303.itch.io/2-minutes-dungeon"}
                title ={"2 Minutes Dungeon"}
                description={"Made for GMTK Game Jam 2023 Event within 48 hours."}
                color={"#7f537d"}
                imgsrc={"https://img.itch.zone/aW1nLzEyNzIzNDAyLnBuZw==/315x250%23c/1TATN5.png"}
                />

            <h1 className={"text-lg"}>Minecraft Java Edition Mod</h1>

            <OutsourceWork 
                url={"https://www.curseforge.com/minecraft/mc-mods/muffins-slime-golem"}
                title ={"Muffin's Slime Golem"}
                description={"Add Slime Golem to Minecraft. A good ally for finding Slime Chunks!"}
                color={"#4a8b5f"}
                imgsrc={"https://cdn.modrinth.com/data/hI3Tmydh/b65ad0437d3768c76c33f8b5eea3e0d69cd5d044.png"}
                />

            <OutsourceWork 
                url={"https://modrinth.com/mod/muffins-songkran"}
                title ={"Muffin's Songkran"}
                description={"Add items from popular culture from Thailand to Minecraft. Songkran!"}
                color={"#58a9a2"}
                imgsrc={"https://cdn.modrinth.com/data/ZLAl0KGT/046d05d0bb3ed99969477a9328e49ca08bef1667.jpeg"}
                />

            <OutsourceWork
              url={"https://youtu.be/UMnagY-lk4w?si=nTxxjA4L37Veemc5"}
              title={"Muffin's Mob Vote 2023"}
              description={"Developed Minecraft mobs from Mob Vote 2023 to self-test Minecraft mod development skill using IntelliJ, Blockbench and Aseprite. Open-sources on Github."}
              color={"#58a9a2"}
              imgsrc={""}
            />

            <h1 className={"text-lg"}>Application</h1>
            <OutsourceWork
              url={"https://github.com/FireMuffin303/Cooking-Simple"}
              title={"Cooking Simple"}
              description={"Developed a social mobile application for posting and sharing food recipes with various feature such as view history, mark as favorite and like."}
              color={"#c97137"}
              imgsrc={""}
            />
            

            <h1 className={"text-lg"}>Music</h1>
            <OutsourceWork
                url={"https://soundcloud.com/firemuffin303/joe-final-battle-theme-pokemon-fanmade-music"}
                title={"Joe Final Battle Theme - Pokemon Fanmade Music"}
                description={"A pokemon fan-made music using LMMS"}
                color={"#c0873f"}
                imgsrc={"https://i1.sndcdn.com/artworks-IlHLa3VOtQlhuFoK-XSu7Kg-t500x500.jpg"}
            />

            <OutsourceWork
                url={"https://soundcloud.com/firemuffin303/bouncyslime-minecraft-muffins-slime-golem-mod-track"}
                title={"BouncySlime - Muffin's Slime Golem"}
                description={"Music for Muffin's Slime Golem Mod as a music disc in-game. Made by LMMS"}
                color={"#c0873f"}
                imgsrc={"https://i1.sndcdn.com/artworks-7XMAo6WFfCky1SB9-oXtvQA-t500x500.jpg"}
            />
            
            <p>This site built in 2 hours, without github pages and deployment knowledge.</p>

          </div>
        </div>
        
      </div>
    </main>
  )
}
