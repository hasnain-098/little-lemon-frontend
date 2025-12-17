import footer_logo from "../assets/footer_logo.png"

function Footer() {
    return (
        <>
            <div>
                <img src={footer_logo} alt="Little Lemon Logo" />
            </div>
            <div>
                <h2>Contact</h2>
                <p>Email: contact@littlelemon.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Main St, Chicago, IL</p>
            </div>
            <div>
                <h2>Social Media</h2>
                <p><a href="#">Facebook</a></p>
                <p><a href="#">Instagram</a></p>
            </div>
        </>
    );
}

export default Footer;