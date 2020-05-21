export default function({ store, route, redirect }) {
  const user = store.state.user.authUser
  if (!user && route.path === '/podcast/search') {
    redirect('/login')
  }
}
