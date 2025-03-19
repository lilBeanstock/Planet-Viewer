import { Button } from '@/components/ui/button'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Aperture } from 'lucide-react'
import Link from 'next/link'

export function Header({
    classes
}:{ classes?: string }) {
    return (
        <div className={`${classes} border-b-1 border-b-amber-50 items-center header flex w-full h-[10vh]`}>
            <Link href="/" className="ml-5 mr-5">
                <Aperture size={28} className="text-amber-50" />
            </Link>
            <div className='header-links flex items-center'>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button variant="link" className='text-muted text-[1.2em] ml-2 mr-2'>Home</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='w-40 bg-red-500'>
                        
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}