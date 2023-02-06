import { useContext } from 'react'
import Cartcontext from '../../../store/cart-context'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm=(props)=>{
    const cartctx=useContext(Cartcontext)

    const additemtocart=(event)=>{
        event.preventDefault()
        const quantity=document.getElementById('amount_'+props.id).value
        cartctx.additem({...props.item,quantity:quantity})
        console.log(cartctx)

    }

    return (
        <form className={classes.form}>
            {console.log(cartctx.items)}
            <Input label='Amount' input={{
                id:'amount_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} />
            <button onClick={additemtocart}>+ Add</button>
        </form>
    )
}

export default MealItemForm