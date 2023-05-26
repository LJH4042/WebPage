import styles from './layout.module.css'
import utils from '../styles/Home.module.css'

export default function Layout({children}){
    return(
        <>
        <div className={styles.container}>{children}</div>
        </>
    )
}