'use client'

import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import  CustomButton  from './CustomButton'
import { updateSearchParam } from '@/utils'

const ShowMore = ({ pageNumber, isNext }:ShowMoreProps) => {
  const router = useRouter()
  
  const handleNavigate = () => {
    const newLimit = (pageNumber +1 ) * 10;
    const newPath = updateSearchParam("limit", `${newLimit}` )

    router.push(newPath,{scroll:false})
  }
  return (
    <div className='w-full flex items-center justify-center gap-5 mt-10'>
        {!isNext && (
          <CustomButton
            title='Show More'
            btnType='button'
            containerStyles='bg-primary-blue text-white rounded-full'
            handleClick={handleNavigate}
          />
        )}
    </div>
  )
}

export default ShowMore