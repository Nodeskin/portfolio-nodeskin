import "./testimonials.scss";

export default function Testimonials() {
  const datas = [
      {
        id: "1",
        name: "Akere Adetola",
        title: "CEO of TOLAKED",
        img: "assets/tola.png",
        icon: "assets/linkedin-130.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",

      },
        {id: "2",
        name: "Akinlabi Ezikiel",
        title: "CEO of FAE",
        img: "assets/tola.png",
        icon: "assets/youtube.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        featured: true
      },
        {id: "3",
        name: "Safari Suraj",
        title: "CEO of SURAJ",
        img: "assets/tola.png",
        icon: "assets/linkedin-130.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      }
  ]

  return (
    <div className="testimonial" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {datas.map((data)=>(   
        <div key={data.id} className= {data.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.webp" alt="" className="left" />
            <img src={data.img} alt="" className="user" />
            <img src={data.icon} alt="" className="right" />
          </div>
          <div className="center">{data.desc}</div>
          <div className="bottom">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
