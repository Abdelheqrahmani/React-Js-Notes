import { useEffect } from "react";
import { useState } from "react";

const WidthAndHeight = () => {
    const [width, setWidth] = useState(window.innerWidth) ; 
    const [height, setHeight] = useState(window.innerHeight) ; 

    useEffect(
        ()=> {
            window.addEventListener("resize" , handleResize) ; 
            return () => {
                window.addEventListener("resize" , handleResize) ; 
            }
        } , [] ) ; 

    useEffect( ()=> {
        document.title = `Size ${width}px ${height}px`  ; 
    }  , [width, height]) 
    function handleResize(){
        setHeight(window.innerHeight) ;
        setWidth(window.innerWidth) ; 
    }


    return (  <> 
    <p>window width : {width} px </p>
    <p>window height : {height} px </p>
    </>);
}
 
export default WidthAndHeight;