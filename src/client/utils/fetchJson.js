export async function fetchJson(url, method = 'GET', body = {}, headers = { 'Content-Type': 'application/json' }) {
    try {
        const response = await fetch(
            url, { 
                method: method, 
                headers: { 'Content-Type': 'application/json' }, 
                body: method == 'GET' ? undefined : JSON.stringify(body) 
            }
        )
        if(!response.ok) throw new Error(`${response.status} ${response.statusText}`)
        return { data: await response.json(), statusCode: response.status, statusText: response.statusText }
    } catch (e) {
        throw e;
    }
}
