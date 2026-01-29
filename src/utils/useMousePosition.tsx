import { useEffect, useState } from "react"


export const useMousePosition = ()=>{
    const [mousePos, setMousePos] = useState({x: 0, y: 0})
    const updateMousePointer = (e: MouseEvent)=>{
        setMousePos({x: e.clientX, y: e.clientY})
        // console.log({x: e.clientX, y: e.clientY})
    }
    useEffect(()=>{
        window.addEventListener("pointermove", updateMousePointer)

        return ()=>{
            window.removeEventListener("pointermove", updateMousePointer)
        }
    }, [])
    return mousePos
}