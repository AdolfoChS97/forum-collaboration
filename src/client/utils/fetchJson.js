export async function fetchJson(url, method = 'GET', body = {}, headers = { 'Content-Type': 'application/json' }) {
    try {
        const response = await fetch(
            url, { 
                method: method, 
                body: JSON.stringify(body), 
                headers: { 'Content-Type': 'application/json' } 
            }
        )
        if(!response.ok) throw new Error(`${response.status} ${response.statusText}`)
        return { data: JSON.parse(await response.json()), statusCode: response.status, statusText: response.statusText }
    } catch (e) {
        throw e;
    }
}
