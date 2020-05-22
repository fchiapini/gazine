export default function({ app, route, redirect }) {
  const user = app.$fireAuth.currentUser
  const searchRoute = '/podcast/search'
  const loginRoute = '/login'

  if (user && route.path === loginRoute) redirect('/')
  else if (!user && route.path === searchRoute) redirect('/login')
}
