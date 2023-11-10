import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width={30}
            height={30}
          /><p className='w-full flex justify-start text-2xl font-semibold items-center'>Stream</p>
        </Link>

        <div className="flex gap-4">
        </div>
      </div>
    </section>
  )
}

export default Topbar