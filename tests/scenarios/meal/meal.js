import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { createRestaurant, deleteRestaurant, getRestaurant, updateRestaurant, negativeCreateRestaurant } from '../../steps/restaurant/restaurant.js'
import { createMeal, deleteMeal, getMeals } from '../../steps/meal/meal.js'
import { generateTestData } from '../../utils/helpers.js'
import negativeCreateScenarios from '../../data/restaurant/create_negative.json' assert { type: 'json' }

before(async () => {
    await generateTestData()
    createUser()
    loginUser()
    createRestaurant()
})

after(async () => {
    deleteRestaurant()
    deleteUser()
})


describe('Meal test set', () => {
    describe(`CRUD Meal`, () => {
        createMeal()
        getMeals()
        deleteMeal()
    })
})
