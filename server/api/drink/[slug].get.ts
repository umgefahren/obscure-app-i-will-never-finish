import { Drink } from "~~/util/types"
import { client } from "../../utils/db/main"

export default defineEventHandler(async (event) => {
    const slug = event.context.params.slug
    const drink = (await client.index('drinks').search('', {limit: 1, filter: 'slug = ' + slug})).hits.at(0)
    const ret: Drink = {
        id: drink.id,
        name: drink.name,
        slug,
        tags: drink.tags,
        category: drink.category,
        iba: drink.iba,
        alcoholic: drink.alcoholic,
        glass: drink.glass,
        instructions: drink.instructions,
        drinkThumb: drink.drinkThumb,
        ingredients: drink.ingredients,
        measures: drink.measures,
        imageAttribution: drink.imageAttribution,
        imageSource: drink.imageSource
    }
    return ret
})
