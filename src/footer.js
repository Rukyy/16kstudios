const Footer = () => {
    return ( 
        <div className="Footer">
            <div class="contact ">
                <h3>Contact</h3>
                <p><i class="fa-brands fa-instagram"></i>instagram :<a class="links" href="https://instagram.com/16k_studios?igshid=YmMyMTA2M2Y=">16k_studios</a></p>
                <p><i class="fa-solid fa-mobile"></i> Tel No: <a class="links" href="tel:08068635849">08068635849</a></p>
                <p><i class="fa-solid fa-envelope"></i>Email : <a class="links" href="mailto:rukemeniemogha38@gmail.com">rukemeniemogha38@gmail.com</a></p>
            </div>
            <div className="about">
                <h3>About Us</h3>
                <p><em><b>16k_studios</b> </em> is a photography company that brings you the best quality of both pictures and videos at it's peak</p>
            </div>
            <div className="site-link">
                <h3>Site Links</h3>
                <p><a className="links" href="/16khome.html">home</a></p>
                <p><a className="links" href="#content">content</a></p>
                <p><a className="links" href="#about">About</a></p>
            </div>
        </div>
     );
}
 
export default Footer;