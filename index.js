import { nanoid } from 'nanoid'
import RETURN_LENGTH from './src/config.js'
import concatenateTwoString from './src/utils.js'
import { faker } from '@faker-js/faker'

const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()

const firstId = nanoid()
const secondId = nanoid()

// RETURN_LENGTH => true by default
// can be change to false by adding !RETURN_LENGTH
const testTrue = concatenateTwoString(
	firstId, secondId, RETURN_LENGTH
)

const testFalse = concatenateTwoString(
	firstId, secondId, !RETURN_LENGTH
)

const fakePerson = concatenateTwoString(
	randomName, randomEmail, !RETURN_LENGTH
)

console.log(`${firstId} - ${secondId} => ${testTrue}`)
console.log(`${firstId} - ${secondId} => ${testFalse}`)
console.log(`${randomName} - ${randomEmail} => ${fakePerson}`)
