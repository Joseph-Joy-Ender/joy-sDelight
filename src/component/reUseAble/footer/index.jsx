import styles from "./index.module.css"
import send from "../../../assets/footer/send.png"
import qrcode from "../../../assets/footer/Qrcode 1.png"
import appstore from "../../../assets/footer/AppStore.png"
import googlestore from "../../../assets/footer/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import facebook from "../../../assets/footer/Icon-Facebook.png"
import twitter from "../../../assets/footer/Group.png"
import instagram from "../../../assets/footer/icon-instagram.png"
import linkedin from "../../../assets/footer/Icon-Linkedin.png"
 
const Footer = ()=>{

    return(
        <div className={styles.mainCont}>
            <div className={styles.firstCont}>
                <h2>Exclusive</h2>
                <h4>Subscribe</h4>
                <p>Get 10% off your first order</p>
                <div>
                    <input type={"text"} placeholder={"Enter Your Email"}/>
                    <img src={send} alt={""} className={styles.send}/>
                </div>
            </div>

            <div className={styles.firstCont}>
                <h3>Support</h3>
                <p>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>

            <div className={styles.firstCont}>
                <h3>Account</h3>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>

            </div>

            <div className={styles.firstCont}>
                <h3>Quick Link</h3>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>

            <div className={styles.firstCont}>
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
               <div>
                   <img src={qrcode} alt={""}/>
                   <img src={googlestore} alt={""}/>
                   <img src={appstore} alt={""}/>
               </div>
                <div className={styles.socialIcon}>
                    <img src={facebook} alt={"facebook"}/>
                    <img src={twitter} alt={"twitter"}/>
                    <img src={instagram} alt={"instagram"}/>
                    <img src={linkedin} alt={"linkedin"}/>
                </div>
            </div>

        </div>
    )
}
export default Footer