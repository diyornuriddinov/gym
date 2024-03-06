import men from '@/assets/men.png'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { featuredItems, programs } from '@/constants'
import { auth } from '@/firebase'
import { useUserState } from '@/stores/user.store'
import { LogOut } from 'lucide-react'
import { CgGym } from 'react-icons/cg'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
	const { user, setUser } = useUserState()
	const navigate = useNavigate()
	const onLogout = () => {
		auth.signOut().then(() => {
			setUser(null)
			navigate('/auth')
		})
	}
	return (
		<>
			<div className='w-full h-screen grid grid-cols-1 xl:grid-cols-2 items-center justify-center mt-36 sm:mt-24'>
				<div className='flex basis-[100%] lg:basis-[50%] flex-col justify-center  ml-0 lg:ml-60 px-10'>
					<h1 className='text-4xl sm:text-7xl lg:text-9xl font-semibold uppercase'>
						Workout with me
					</h1>
					<p className='text-muted-foreground'>
						A huge selection of health and fitness content , healthy recipes and
						transformation stories to help you get fit and stay fit!
					</p>
					{user ? (
						<div className='flex gap-4'>
							<Link to={'/dashboard'}>
								<Button className='mt-6 font-bold h-12' size={'lg'}>
									<span>Go to GYM</span>
									<CgGym className='h-5 w-5 ml-2' />
								</Button>
							</Link>
							<Button
								className='mt-6 font-bold h-12'
								variant={'destructive'}
								size={'lg'}
								onClick={onLogout}
							>
								<span>Logout</span>
								<LogOut className='h-5 w-5 ml-2' />
							</Button>
						</div>
					) : (
						<Link to={'/auth'}>
							<Button className='w-fit mt-6 font-bold h-12' size={'lg'}>
								Join club now
							</Button>
						</Link>
					)}
					<div className='mt-24'>
						<p className='text-muted-foreground'>AS FEATURED IN</p>
						<div className='flex items-center gap-4 mt-2'>
							{featuredItems.map((Icon, idx) => (
								<Icon key={idx} className='w-12 h-12' />
							))}
						</div>
					</div>
				</div>
				<div className='flex basis-[100%] mt-10 lg:basis-[50%] justify-center'>
					<img src={men} alt='' />
				</div>
			</div>

			<div className='container max-w-5xl mx-auto mt-80 sm:mt-64 md:mt-64 lg:mt-96 xl:mt-0 flex-col'>
				<h1 className='text-4xl'>Not sure where to start?</h1>
				<p className='mt-2 text-muted-foreground'>
					Programs offer day-to-day guid ance on an inter active calendar to
					keep you on track
				</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
					{programs.map(item => (
						<Card
							key={item.title}
							className='p-8 relative cursor-pointer group'
						>
							<h3>{item.title}</h3>
							<p className='text-sm text-muted-foreground mt-2'>{item.descr}</p>
							<Button
								size={'icon'}
								variant={'ghost'}
								className='absolute right-2 top-1/2 group-hover:translate-x-1 transition-transform'
							>
								<FaArrowRightLong />
							</Button>
						</Card>
					))}
				</div>
			</div>
		</>
	)
}
export default Home
