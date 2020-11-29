const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export async function getPayload(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  const response = await fetch(`${REACT_APP_API_URL}/payloads/${id}`, requestOptions);
  if (response.ok) {
    const data = await response.json();
    return data.payload;
  } else {
    throw response.statusText;
  }
}

export async function savePayload(payload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ payload: payload })
  };
  const response = await fetch(`${REACT_APP_API_URL}/payloads`, requestOptions);
  if (response.ok) {
    const data = await response.json();
    return data['payload_id'];
  } else {
    throw response.statusText;
  }
}
