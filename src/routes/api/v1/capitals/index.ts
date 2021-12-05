import capitals from "./_capitals.js";
import type {RequestHandler} from '@sveltejs/kit';

export const get: RequestHandler =  async ({ params }) => {
		return {
			body:  capitals.map((country) => ({
          country: country.country,
          capital: country.capital,
          latitude: country.latitude,
          longitude: country.longitude,
          slug: country.capital.toLowerCase().split(' ').join('-')
        })
      )
		};
}


