export async function post({ body, locals }) {
  const res = await fetch('http://localhost:6363/data/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'TIME',
      user: locals.user,
      city: body.get('city')
    })
  })
  console.log(await res.json())
  return {
    headers: {
      location: '/home'
    },
    status: 302
  }
}

export async function get({ locals }) {

  const res = await fetch('http://localhost:6363/data/demo/_query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      selector: {
        type: 'TIME',
        user: locals.user
      }
    })
  })
  const result = await res.json()
  console.log(result)
  return {
    body: result
  }
}