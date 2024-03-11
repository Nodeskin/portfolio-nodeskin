import { useState } from "react";
import "./works.scss";

export default function Works() {
const [currentSlide, setCurrentSlide] = useState(0)
const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Branding",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, iusto, ullam qluam deleniti quae aut architecto",
      img: "./assets/frontend2.webp"
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Scanning",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, iusto, ullam qluam deleniti quae aut architecto",
      img: "./assets/frontend2.webp"
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Cleanr",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, iusto, ullam qluam deleniti quae aut architecto",
      img: "./assets/frontend2.webp"
    }
];


const handleClick = (way) =>{
  way === "left" 
  ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)  
  :setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
};

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((item)=>(
          <div key={item.id} className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>
                  {item.desc} 
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>
        ))}
          </div>
      <img src="assets/arrow1.png" className="arrow left" alt="" onClick={()=> handleClick("left")}/>
      <img src="assets/arrow1.png" className="arrow right" alt="" onClick={()=> handleClick("")}/>
    </div>
  );
}
