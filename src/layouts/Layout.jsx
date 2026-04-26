import { Outlet } from "react-router"

const Layout = () => {
  return (
   <>
    <main className="bg-gray min-h-screen">
      <Outlet />
    </main>
   </>
  )
}

export default Layout