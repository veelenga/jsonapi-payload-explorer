export async function getPayload(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  const response = await fetch(`http://127.0.0.1:8000/payloads/${id}`, requestOptions);
  const data = await response.json();
  return data.payload;
}

export async function savePayload(payload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };
  const response = await fetch('http://127.0.0.1:8000/payloads', requestOptions);
  const data = await response.json();
  return data['payload_id'];
}