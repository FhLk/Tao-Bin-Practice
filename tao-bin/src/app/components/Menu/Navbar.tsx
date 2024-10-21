import React from 'react'

function NavbarCategory() {
  return (
    <div>
        <ul className="flex border-b">
            <li className="-mb-px mr-1">
                <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4  font-semibold" href="/">Recommend</a>
            </li>
            <li className="mr-1">
                <a className="bg-white inline-block rounded-t py-2 px-4 font-semibold" href="/">Coffee</a>
            </li>
            <li className="mr-1">
                <a className="bg-white inline-block rounded-t py-2 px-4 font-semibold" href="/">Milk</a>
            </li>
            <li className="mr-1">
                <a className="bg-white inline-block rounded-t py-2 px-4 font-semibold" href="/">Tea</a>
            </li>
            <li className="mr-1">
                <a className="bg-white inline-block rounded-t py-2 px-4 font-semibold" href="/">Soda</a>
            </li>
        </ul>
    </div>
  )
}

export default NavbarCategory
