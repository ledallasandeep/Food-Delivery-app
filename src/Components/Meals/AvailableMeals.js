import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealsItem/MealsItem'
const Dummy_Meals=[
    {   id:'1',
        name:'Biriyani',
        description:'Hyderbad Dum Biriyani 1 Plate',
        price:200
    },
    {   id:'2',
        name:'Paneer Butter Masala',
        description:'Spicy Paneer Curry -Full Plate',
        price:120
    },
    {   id:'3',
        name:'Fish Fry',
        description:'2 piece',
        price:120
    },
    {   id:'4',
        name:'Jeera Rice',
        description:'1-Full Plate',
        price:100
    }
]

const AvailableMeals=()=>{
    const mealslist=Dummy_Meals.map((meal)=><MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}
    />)

    return <section className={classes.meals}>
        <Card>
        <ul>
            {mealslist}
            
        </ul>
        </Card>
       
    </section>
}

export default AvailableMeals