import type {RequestHandler} from '@sveltejs/kit';

export const get: RequestHandler =  async () => {
    return {
        body: {endpoints: ['/api/v1/capitals']}
    }
}


