export async function getPayload(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  const response = await fetch(`http://127.0.0.1:8001/payloads/${id}`, requestOptions);
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
  const response = await fetch('http://127.0.0.1:8001/payloads', requestOptions);
  if (response.ok) {
    const data = await response.json();
    return data['payload_id'];
  } else {
    throw response.statusText;
  }
}
