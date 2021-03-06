import './Startup.css';


function Startup() {
    return (
        /*- Navbar (sit on top) */
        <div class="w3-top">
            <div class="w3-bar w3-white w3-card" id="myNavbar">
                <a href="#home" class="w3-bar-item w3-button w3-wide">LOGO</a>
                {/*-- Right-sided navbarlinks --*/}
                <div class="w3-right w3-hide-small">
                <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
                <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
                <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>
                <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PRICING</a>
                <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
                </div>
               
                <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
                <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>

               
        
    );
}
export default Startup;