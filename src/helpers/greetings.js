import { GREETINGS } from 'constants/greetings'

import { getRandomItemFromArray } from 'helpers/utils'

export const getRandomGreeting = () => {
    return getRandomItemFromArray(GREETINGS)
}