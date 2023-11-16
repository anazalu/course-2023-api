import { createUser, loginUser, deleteUserRequest } from '../../steps/user/user.js'
import { createRestaurant, deleteRestaurant, getRestaurant, updateRestaurant, negativeCreateRestaurant } from '../../steps/restaurant/restaurant.js'
import { generateTestData } from '../../utils/helpers.js'
import negativeScenariosData from '../../data/restaurant/create_negative.json' assert { type: 'json' }

before(async () => {
    await generateTestData()
    createUser()
    loginUser()
})

after(async () => {
    await deleteUserRequest()
})

describe('Restaurant', () => {
    describe(`CRUD Restaurant`, () => {
        createRestaurant()
        getRestaurant()
        updateRestaurant()
        getRestaurant()
        deleteRestaurant()
    }) 
       

    describe(`Restaurant negative scenarios`, () => {
        for (const negativeScenarioData of negativeScenariosData) {
            negativeCreateRestaurant(negativeScenarioData.requestBody, negativeScenarioData.name, negativeScenarioData.asserts)
        }
    }) 
})
