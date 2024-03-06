import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/navbar/navbar'
import Home from './pages/home/home'
import Auth from './pages/auth/auth'
import Dashboard from './pages/dashboard/dashboard'
import { Toaster } from './components/ui/sonner'

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
			<Toaster position='top-center' />
		</>
	)
}
export default App
