import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import minus from './../../assets/minus.svg'
import minusDisabled from './../../assets/minusDisabled.svg'
import plus from './../../assets/plus.svg'

type IngredientProps = {
    name: string,
    value: string
}

export function Ingredient({ name, value }: IngredientProps) {
    const [qtd, setQtd] = useState(0);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        qtd > 0 ? setDisable(false) : setDisable(true)
    }, [qtd])

    return (
        <div className={styles.item}>
            <div className={styles.itemDescription}>
                <strong>{name}</strong>
                <p>+ {value}</p>
            </div>
            <div className={styles.qtdButton}>
                <button type="button" disabled={disable} onClick={() => setQtd((qtd) => qtd - 1)}>
                    {disable ? <img src={minusDisabled} alt="Símbolo de subtração" /> : <img src={minus} alt="Símbolo de subtração" />}
                </button>
                <span>{qtd}</span>
                <button type="button" onClick={() => setQtd((qtd) => qtd + 1)}>
                    <img src={plus} alt="Símbolo de adição" />
                </button>
            </div>
        </div>
    )
}