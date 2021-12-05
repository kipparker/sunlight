// routes/blog/[slug].json.js
import type {RequestHandler} from '@sveltejs/kit';

import capitals from "./_capitals";

const lookup = new Map();

capitals.forEach((capital) => {
  lookup.set(capital.capital.toLowerCase().split(' ').join('-'), capital);
});

export const get:RequestHandler = ({ params }) => {
  // const { capital } = req.params;
  let capital = params.capital
  if (lookup.has(capital)) {
    return {
			body:  lookup.get(capital)
		};
  } else {
    return {
      status: 404,
      body: {'message': '404 Not Found'}
    }
  }
}
