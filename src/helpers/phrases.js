import { MOTIVATIONAL_PHRASES } from 'constants/phrases'

import { getRandomItemFromArray } from 'helpers/utils'

export const getRandomMotivationalPhrase = () => {
    return getRandomItemFromArray(MOTIVATIONAL_PHRASES)
}