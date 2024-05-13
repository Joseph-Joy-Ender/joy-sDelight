import styles from "./index.module.css"
import {Link} from "react-router-dom";

const TopHeader = ()=>{
    return(
        <div className={styles.mainCont}>
            <div className={styles.secondCont}>
                <p>Summer Side For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link to={"/shopNow"} className={styles.link}>ShopNow</Link></p>
            </div>
            <div className={styles.dropdown}>
                <select>
                    <option value="english">English</option>

                    <option value="espanol">Espanol</option>

                    <option value="yoruba">Yoruba</option>

                </select>

            </div>
        </div>

    )
}
export default TopHeader