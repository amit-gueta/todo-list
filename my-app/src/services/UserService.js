export async function createUser(data) {
  const response = await fetch('https://5ciqsbogq2.execute-api.eu-west-2.amazonaws.com/prod/signup', {
      method: 'POST',
      headers: {"Content-Type": "application/json",
              'client-id': '22gd8nhob7k0t0qu8enba1c2ke'},
      body: JSON.stringify(data)
    })
  return await response.json();
}