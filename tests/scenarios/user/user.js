import { createUser, loginUser, deleteUser, negativeCreateUserWithoutPassword, negativeCreateUserWithoutEmail } from '../../steps/user/user.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('User', () => {
    describe(`CRUD User`, () => {
        createUser()
        loginUser()
        deleteUser()
    })
})

it('User negative scnearios', () => {
    describe(`Create user without password`, () => {
        negativeCreateUserWithoutPassword()
    })

    describe(`Create user without email`, () => {
        negativeCreateUserWithoutEmail()
    })
})
