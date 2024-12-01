"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router=useRouter();
  return (
    <div className='min-h-dvh flex items-center justify-center'>
    <div className=" flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl">Page Not Found</h2>
      
      <Button variant="secondary" onClick={()=>router.back()}>
      Return Home
      </Button>
      
    </div>
    </div>
  )
}