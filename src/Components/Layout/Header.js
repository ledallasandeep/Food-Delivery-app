import React,{Fragment} from 'react'

import mealsimage from '../../Assests/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header=()=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>F O O D & F U N</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsimage} alt='ALL DELICIOUS FOOD AVAILABLE'></img>
            </div>
        </Fragment>
    )
}

export default Header