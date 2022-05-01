let navbar=()=>{

    return ` <div id="navbar">
    <div id="page">
        <h1>MODESENS</h1>
        <h4 id="women">WOMEN</h4>
        <h4 id="men">MEN</h4>
        <h4 id="beauty">BEAUTY</h4>
        <h4 id="kids">KIDS</h4>
        <h4 id="home">HOME</h4>
        <h4 id="offer">OFFERS</h4>
        <h4 id="designs">DESIGNERS</h4>
        <h4 id="community">COMMUNITY</h4>
        <h4 id="why">WHY MODESENS</h4>
    </div>
    <div id="profile">
        <img src="https://www.websticker.com/wp-content/uploads/2016/02/flag1.2.jpg" alt="">
        <i class="fa-regular fa-user"></i>
        <input type="text" placeholder="🔎search" id="search">
        
    </div>
    `
}

let footer=()=>{
    return `
    <div id="footer">
    <hr id="up">
    <div id="footerthing">
        <div>
            <h4>CUSTOMER CARE</h4>
            <p>Shopper Protection</p>
            <p>Loyalty Program</p>
            <p>Help Center</p>
            <p>Size Guides</p>
            <p>Contact Us / Feedback</p>
            <p>Shipping / Returns</p>
        </div>
        <div>
            <h4>INFORMATION</h4>
            <p>About Us</p>
            <p>Influencer Program</p>
            <p>Partner Stores</p>
            <p>Sitemap</p>
        </div>
        <div>
            <h4>LEGAL</h4>
            <p>Terms Of Use</p>
            <p>Disclosure</p>
            <p>Privacy Policy</p>
            <p>Community Guidelines</p>
        </div>
        <div>
            <h4>CONNECT WITH US</h4>
            <p>Downlaod Our App</p>
            <i class="fa-regular fa-mobile-signal-out"></i> 
            <p>Add to Browser</p>
        </div>
        <div>
            <h4>NEWSLETTER SIGN UP</h4>
           
            <input type="text" placeholder="EMAIL ADDRESS" id="footeremail">
          <div id="footergen">
            <input type="checkbox" class="checkbox">
            <h4>MEN'S</h4>
            <input type="checkbox" class="checkbox">
            <h4>WOMEN'S</h4>
          </div>
            <div id="footersubmit">
                <h3>SUBMIT</h3>
            </div>
        </div>
    </div>
    <hr id="down">
    <div id="logos"> 
        <div>
           
        </div>
        <div>
         <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter-square"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-instagram-square"></i>
        <i class="fa-brands fa-weixin"></i>
        </div>
        
    </div>
</div>`
}

export {navbar,footer}