import React,{Fragment} from 'react'

import mealsimage from '../../Assests/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1 > F o o D  &  F u N</h1>
                <HeaderCartButton onClickk={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsimage} alt='ALL DELICIOUS FOOD AVAILABLE'></img>
            </div>
        </Fragment>
    )
}

export default Header