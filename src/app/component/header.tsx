'use client'
import { useRouter } from "next/navigation"

export default function Header(){
    const router = useRouter()
    return(
        <div className={"absolute w-full ml-20"}>
          <button onClick={() => router.push("/")} className={"pr-2"}>Home</button>
          {/*
          <button onClick={() => router.push("/portfolio")} className={"pr-2"}>Portfolio</button>

          */ }
        </div>
    )
}