export default function({ store, route, redirect }) {
  const user = store.state.user.authUser
  const searchRoute = '/podcast/search'
  const loginRoute = '/login'

  if (user && route.path === loginRoute) redirect('/')
  else if (!user && route.path === searchRoute) redirect('/login')
}
