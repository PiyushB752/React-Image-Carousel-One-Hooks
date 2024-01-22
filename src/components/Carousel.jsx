import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [presentImg,setImg] = useState(0)
    const previous_button = () =>{
        setImg((img)=>(img - 1 + images.length) % images.length)
    }
    const next_button = () =>{
        setImg((img)=>(img + 1) % images.length)
    }
    return(
        <div>
            <div className="gallery" style={{ backgroundImage: `url(${images[presentImg].img})` }}>
                <div className="previousButton" onClick={previous_button}>
                    <ArrowBackIosIcon className="Button" />
                </div>
                <div className="details">
                    <div className="title"><h1> {images[presentImg].title} </h1></div>
                    <div className="sub"><h4> {images[presentImg].subtitle} </h4></div>
                </div>
                <div className="nextButton" onClick={next_button}>
                    <ArrowForwardIosIcon className="Button"/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;