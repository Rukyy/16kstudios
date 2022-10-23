import CategortSection from "./categorysection";

const Home = () => {
   
    return ( 
        <div className="home">

            <div id="welcome">
                <div id="line"></div>
                <div>
                    <hr id="short-dash" />
                    <h2 className="welcome-header">Welcome</h2>
                    <h5 className="welcome-writeup">welcome to the <em>16k_studio Empire</em>. <br/> We are happy to have on board and look forward to capturing the great moments of your lives. </h5>
                </div>
                <div id="line2"></div>
            </div>
            <div className="latest container">
                <div><h2>Latest</h2></div>
                <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
                        <div className="carousel-inner  ">
                            <div className="carousel-item active fixed-div">
                                <a href="/photos/Bg.jpg"><img src="/photos/Bg.jpg"  alt="..."/></a>
                                <a href="/photos/pic2.jpg"><img src="/photos/pic2.jpg"  alt="..."/></a>
                                <a href="/photos/pic4.jpg"><img src="/photos/pic4.jpg" alt="..."/></a>
                                <a href="/photos/pic1.jpg"><img src="/photos/pic1.jpg" alt="" /></a>
                            </div>
                            <div className="carousel-item">
                                <a href="/photos/pic5.jpg"><img src="/photos/pic5.jpg"  alt="..."/></a>
                                <a href="/photos/out2.jpg"><img src="/photos/out2.jpg" alt="" /></a>
                                <a href="/photos/IMG_9150.jpg"><img src="/photos/IMG_9150.jpg" alt="" /></a>
                                <a href="/photos/in2.jpg"><img src="/photos/in2.jpg" alt="" /></a>
                            </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <CategortSection />
            <hr className="footer-line" />
        </div>
        
     );
}
 
export default Home;