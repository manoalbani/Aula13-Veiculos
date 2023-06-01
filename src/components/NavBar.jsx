import styles from './NavBar.module.css'
function NavBar(){
    return(
        <div className={styles['container-nav']}>
            <a href='/'>
                Home
            </a>
            <a href='/veiculos'>
                Veiculos
            </a>
            
        </div>
    )
}

export default NavBar;