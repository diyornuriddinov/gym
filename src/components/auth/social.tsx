import { useState } from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { FaGithubAlt, FaGoogle } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'
import { auth } from '@/firebase'
import FillLoading from '../shared/fill-loading/fill-loading'

const Social = () => {
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const onGoogle = () => {
		setIsLoading(true)
		const googleProvider = new GoogleAuthProvider()
		signInWithPopup(auth, googleProvider)
			.then(() => {
				navigate('/')
			})
			.finally(() => setIsLoading(false))
	}
	const onGithub = () => {
		setIsLoading(true)
		const googleProvider = new GithubAuthProvider()
		signInWithPopup(auth, googleProvider)
			.then(() => {
				navigate('/')
			})
			.finally(() => setIsLoading(false))
	}
	return (
		<>
			{isLoading && <FillLoading />}
			<Separator className='my-3' />
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
				<Button
					className='h-12'
					variant={'secondary'}
					onClick={onGithub}
					disabled={isLoading}
				>
					<FaGithubAlt className='mr-2' />
					<span>Sign in with Github</span>
				</Button>
				<Button
					className='h-12'
					variant={'destructive'}
					onClick={onGoogle}
					disabled={isLoading}
				>
					<FaGoogle className='mr-2' />
					<span>Sign in with Github</span>
				</Button>
			</div>
		</>
	)
}
export default Social
