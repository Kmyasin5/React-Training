import react from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="Social pl-3">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>

        <div className="copyrights">
            Copyright &copy; 2021 <span>EDC SOLU</span>
        </div>
        </footer> 
    );
}

export default Footer;