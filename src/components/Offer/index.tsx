import styles from './styles.module.scss'

import sandwich from './../../assets/sandwich.svg'

export function Offer() {
    return (
        <main className={styles.offerContainer}>
            <img src={sandwich} alt="Sanduiche" />
            <h1>Oferta Picanha Cheddar Bacon</h1>
            <p>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</p>
            <div className={styles.prices}>
                <h2 className={styles.newPrice}>R$31,99</h2>
                <h2 className={styles.oldPrice}>R$34,95</h2>
            </div>
        </main>
    )
}