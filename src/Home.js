import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <div id="welcome">
                <hr id="short-dash" />
                <h2 className="welcome-header">Welcome</h2>
                <h4>welcome to the <em>16k_studio Empire</em>. <br/> We are happy to have on board and look forward to capturing the great moments of your lives. </h4>
            </div>
            <div className="latest container">
                <div><h2>Latest</h2></div>
                <div id="carouselExampleControls" class="carousel slide container" data-bs-ride="carousel">
                        <div class="carousel-inner ">
                            <div class="carousel-item active">
                                <a href="/Bg.jpg"><img src="/Bg.jpg"  alt="..."/></a>
                                <a href="/pic5.jpg"><img src="/pic5.jpg"  alt="..."/></a>
                                <a href="/pic4.jpg"><img src="/pic4.jpg" alt="..."/></a>
                                <a href="/pic1.jpg"><img src="/pic1.jpg" alt="" /></a>
                            </div>
                            <div class="carousel-item">
                                <a href="/pic5.jpg"></a><img src="/pic5.jpg"  alt="..."/>
                                <a href="/out2.jpg"></a><img src="/out2.jpg" alt="" />
                                <a href="IMG_9150.jpg"></a><img src="/IMG_9150.jpg" alt="" />
                                <a href="in2.jpg"></a><img src="/in2.jpg" alt="" />
                            </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        
     );
}
 
export default Home;