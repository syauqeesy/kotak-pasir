import React, { useEffect, useState } from 'react'

import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-order-food-1c3e1-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json')
      if(!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()

      const meals = []

      for(const key in data) {
        meals.push({
          id: key,
          name: data[key].Name,
          description: data[key].Description,
          price: data[key].Price
        })
      }

      setMeals(meals)
      setIsloading(false)
    }

    fetchMeals().catch(err => {
      setIsloading(false)
      setHttpError(err.message)
    })
  }, [])

  if(isLoading) {
    return <section className={classes['meals-loading']}><p>Loading</p></section>
  }

  if(httpError) {
    return <section className={classes['meals-error']}><p>{httpError}</p></section>
  }

  return (
    <section className={classes['meals']}>
      <Card>
        <ul>{meals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
