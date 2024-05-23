import { createUser, loginUser, deleteUser } from '../../steps/user/user.js'
import { createRestaurant, deleteRestaurant, getRestaurant, updateRestaurant, negativeCreateRestaurant } from '../../steps/restaurant/restaurant.js'
import { generateTestData } from '../../utils/helpers.js'
import negativeCreateScenarios from '../../data/restaurant/create_negative.json' assert { type: 'json' }

before(async () => {
    await generateTestData()
    createUser()
    loginUser()
})

after(async () => {
    deleteUser()
})


describe('Restaurant test set', () => {
    // describe(`CRUD Restaurant`, () => {
    //     createRestaurant()
    //     getRestaurant()
    //     updateRestaurant()
    //     getRestaurant()
    //     deleteRestaurant()
    // })

    // describe(`Remove already removed restaurant`, () => {
    //     createRestaurant()
    //     deleteRestaurant()
    //     deleteRestaurant(404, 'Cannot find restaurant')
    // })

    describe(`Create restaurant negative scnearios`, () => {
        for (const negativeScenario of negativeCreateScenarios) {
            negativeCreateRestaurant(negativeScenario.requestBody, negativeScenario.asserts, negativeScenario.testCaseName, negativeScenario.statusCode)
        }
    })
})
