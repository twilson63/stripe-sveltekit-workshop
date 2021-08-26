export async function post(request) {

  const res = await fetch('http://localhost:6363/data/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'account',
      username: request.body.get('username'),
      email: request.body.get('email')
    })
  })

  if (!res.ok) {
    return {
      headers: {
        location: '/error'
      },
      status: 302
    }
  }
  const result = await res.json()

  // set user session
  request.locals.user = result.id

  return {
    headers: {
      location: '/home'
    },
    status: 302
  }
}
