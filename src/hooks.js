import cookie from 'cookie'

export async function handle({ request, resolve }) {
  const cookies = cookie.parse(request.headers.cookie || '')

  request.locals.user = cookies.session
  //request.locals.user = 'cksta7hyh0004vvb6zv9hco3a'
  const response = await resolve(request)

  response.headers['set-cookie'] = `session=${request.locals.user || ''}; Path=/; HttpOnly`

  return response
}

export function getSession(request) {
  return request.locals.user
    ? {
      user: request.locals.user
    }
    : {}
}