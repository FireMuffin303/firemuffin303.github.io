export default function OutsourceWork({url,title,description,color,imgsrc}){
    return(
    <a href={url} className={"w-full"}>
    <div className={"flex flex-row"}>
        <div className={"p-2 rounded-md m-2"} style={{backgroundColor:color}}>
            <p className={"text-xl"}>{title}</p>
            <i>{description} </i>
        </div>
        {imgsrc ? <img src={imgsrc} width={150}></img> : <div></div>}
        
    </div>

</a>)
}