import styles from './styles.module.scss';

import logo from './../../assets/deliverize.png'
import arrow from './../../assets/arrow.svg'
import user from './../../assets/user.svg'
import shoppingCart from './../../assets/shoppingCart.svg'

export function Header() {
    return (
        <nav className={styles.headerContainer}>
            <img src={logo} alt="Logo Deliverize" className={styles.logo} />
            <div className={styles.contentContainer}>
                <div className={styles.labelFloat}>
                    <input type="text" placeholder=" " />
                    <label>Entrega:</label>
                    <img src={arrow} alt="Seta para baixo" className={styles.arrow} />
                </div>

                <input type="text" placeholder='Busque por estabelecimento ou produtos' className={styles.search} />

                <div className={styles.loginContainer}>
                    <img src={user} alt="Silhueta de uma pessoa" />
                    <span>Entrar</span>
                </div>

                <div className={styles.loginContainer}>
                    <div className={styles.cartContainer}>
                        <img src={shoppingCart} alt="" />
                        <span>1</span>
                    </div>
                    <span>Carrinho</span>
                </div>
            </div>
        </nav>
    )
}