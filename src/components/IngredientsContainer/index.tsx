import axios from 'axios'
import { useEffect, useState } from 'react'

import { Ingredient } from '../Ingredient'
import { formatPrice } from './../../utils/format';

import styles from './styles.module.scss'

import minus from './../../assets/minus.svg'
import minusDisabled from './../../assets/minusDisabled.svg'
import plus from './../../assets/plus.svg'

type IngredientsProps = {
    id: number
    name: string
    value: string
}

type Item = {
    id: number
    nm_item: string
    vl_item: number
}

export function IngredientsContainer() {
    const [ingredients, setIngredients] = useState<IngredientsProps[]>([]);
    const [qtd, setQtd] = useState(0);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        qtd > 0 ? setDisable(false) : setDisable(true)
    }, [qtd])

    useEffect(() => {
        async function loadData() {
            const { data } = await axios.get("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")
            const items = data[0].ingredients[0].itens.map(({ id, nm_item, vl_item }: Item) => {
                return {
                    id: id,
                    name: nm_item,
                    value: formatPrice(vl_item)
                }
            })
            setIngredients(items)
        }
        loadData()
    }, []);

    return (
        <main className={styles.ingredientsContainer}>
            <div className={styles.highlight}>
                <span>Adicionar Ingredientes</span>
                <p>Até 8 ingredientes.</p>
            </div>

            {ingredients.map(ingredient => (
                <Ingredient key={ingredient.id} name={ingredient.name} value={ingredient.value} />
            ))}

            <div className={styles.highlight}>
                <span>Precisa de Talher?</span>
            </div>

            <div className={styles.buttons}>
                <div className={styles.qtdButton}>
                    <button type="button" disabled={disable} onClick={() => setQtd((qtd) => qtd - 1)}>
                        {disable ? <img src={minusDisabled} alt="" /> : <img src={minus} alt="" />}
                    </button>
                    <span>{qtd}</span>
                    <button type="button" onClick={() => setQtd((qtd) => qtd + 1)}>
                        <img src={plus} alt="" />
                    </button>
                </div>

                <button className={styles.addButton} type="button">Adicionar</button>
            </div>
        </main>
    )
}