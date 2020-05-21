export default function({ app, route, redirect }) {
  const user = app.$fireAuth.currentUser
  const searchRoute = '/podcast/search'

  if (!user && route.path === searchRoute) redirect('/login')
}
