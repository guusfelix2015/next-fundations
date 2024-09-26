import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-zinc-500 animate-pulse rounded-s-md', className)}
      {...props}
    />
  )
}
