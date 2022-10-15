import { client } from "../utils/db/main"
import { DrinkResponse } from "./drink/[slug].get"


export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const res = await client.index('drinks').search('', {
    limit: parseInt(query.limit.toString()),
    offset: parseInt(query.offset.toString()),
    sort: ["slug:asc"]
  })
  let drinks: DrinkResponse[] = []
  for (let hit of res.hits) {
    const drink: DrinkResponse = {
      id: hit.id,
      name: hit.name,
      tags: hit.tags,
      category: hit.category,
      iba: hit.iba,
      alcoholic: hit.alcoholic,
      glass: hit.glass,
      instructions: hit.instructions,
      drinkThumb: hit.drinkThumb,
      ingredients: hit.ingredients,
      measures: hit.measures,
      imageAttribution: hit.imageAttribution,
      imageSource: hit.imageSource
    }
    drinks.push(drink)
  }
  return drinks
})

