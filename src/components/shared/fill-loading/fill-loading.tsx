import { Skeleton } from '@/components/ui/skeleton'
import { LucideLoader2 } from 'lucide-react'

const FillLoading = () => {
	return (
		<Skeleton className='absolute inset-0 flex justify-center items-center w-full h-full opacity-20 z-20'>
			<LucideLoader2 className='animate-spin w-6 h-6' />
		</Skeleton>
	)
}
export default FillLoading
