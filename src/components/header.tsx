import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href="/">
          devstore
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://avatars.githubusercontent.com/u/54154635?v=4"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt="Avatar"
          />
        </Link>
      </div>
    </div>
  )
}
