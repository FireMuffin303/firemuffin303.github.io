import Navbar from "../components/Navbar";
import GitHubIcon from "../assets/github-mark-white.png"
import SlimeGolem from "../assets/slimegolem_icon.png"
import PuiNeedSugar from "../assets/chocolate_bar.png"
import { useEffect, useState } from "react";

function Minecraft(){
    const [projects,setProject] = useState([])
    const devMode = false;

    useEffect(() => {
        if(devMode){
            return;
        }
        fetch("https://api.modrinth.com/v2/user/firemuffin303/projects")
        .then((res) => res.json())
        .then((data) => {
            data.sort((a,b) => a.downloads - b.downloads).reverse()
            setProject(data)
            console.log(data)
        })
    },[])

    

    return(
        <main className="min-h-screen w-full">
            <Navbar/>
            <div className="bg-muffins-darker-blue m-2 p-5 rounded-md shadow-md sm:mx-8">
                <h1>Minecraft Java Edition Mod</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {projects.map(p => <ModrinthProjectBadge project={p}/>)}
                </div>
            </div>

            <div className="bg-muffins-darker-blue m-2 p-5 rounded-md shadow-md sm:mx-8">
                <h1>Minecraft Bedrock Edition (Still learning <a href="https://bridge-core.app/">Bridge</a>)</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <BedrockProject title={"Muffin's Slime Golem"} img={SlimeGolem} sub_text={"Work In Progress"} src_link={"https://github.com/FireMuffin303/MuffinsSlimeGolemBE"}/>
                    <BedrockProject title={"Pui Need Sugar"} img={PuiNeedSugar} sub_text={"Experiment Project"} src_link={"https://github.com/FireMuffin303/PuiNeedSugarBE"}/>
                </div>
            </div>
        </main>
    )
}

function ModrinthProjectBadge({project}){
    return(
        <div className="flex flex-row border-solid border-2 rounded-md p-2 m-2 w-auto border-[#21203a] hover:scale-105 transition-transform ease-out">
                <a href={"https://modrinth.com/mod/"+project.slug}>
                    <img className="flex align-middle rounded-md" src={project.icon_url} width={80}/>
                </a>
                
                <div className="flex flex-col mx-2">
                    <a className="font-bold text-xl" href={"https://modrinth.com/mod/"+project.slug}>
                        {project.title}
                    </a>

                    <p className="text-[#935F44] font-bold">{project.downloads > 1000 ? parseInt(project.downloads / 1000) +"k" : project.downloads} Downloads</p>
                    <a href={project.source_url} className="flex flex-row my-2 w-fit">
                        <img src={GitHubIcon} width={25}/>
                        <p className="text-[#a19087] font-bold align-middle mx-2">Source Code</p>
                    </a>
                </div>
            </div>
        
        
    )
}

function BedrockProject({title,img,sub_text,src_link}){
    return(
        <a href={src_link}>
        <div className="flex flex-row border-solid border-2 rounded-md p-2 m-2 w-auto border-[#21203a] hover:scale-105 transition-transform ease-out">
                <img className="flex align-middle rounded-md" src={img} width={80}/>
                <div className="flex flex-col mx-2">
                    <p className="font-bold text-xl">{title}</p>
                    <p>{sub_text}</p>
                </div>
            </div>
        </a>
        
    )
}

export default Minecraft;