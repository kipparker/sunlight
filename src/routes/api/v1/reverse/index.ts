import type { RequestHandler } from '@sveltejs/kit';

const API_URL = 'https://api.opencagedata.com/geocode/v1/json'


export const get: RequestHandler = async (request) => {
    console.log(request.url.searchParams['latitude'])
    const request_url = `${API_URL}?key=${import.meta.env.VITE_OPENCAGE_APIKEY}&q=${encodeURIComponent(request.url.searchParams.get('latitude') + ',' + request.url.searchParams.get('longitude'))}&pretty=1&no_annotations=1`
    console.log(request_url)
    const response = await fetch(request_url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
    return {
        status: response.status,
        body: await response.json()
    };
};
