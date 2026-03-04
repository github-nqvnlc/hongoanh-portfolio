import { FullScreenV2 } from '@/components/full-screen-v2'
import { MyUniverseV2 } from '@/containers/my-universe-v2'
import Image from 'next/image'
import React from 'react'

function HomeH() {
  return (
    <div>
      <FullScreenV2 className="w-full mx-auto">
        <div className="px-3 py-2 hidden sm:block absolute -top-70 left-16 sm:-left-60 rotate-43 w-max animate-slow-spin duration-200">
          <Image src="/images/element/e3.png" alt="logo" width={700} height={700} />
        </div>
        <div className="px-3 py-2 hidden sm:block absolute bottom-0 right-16 sm:right-5 w-max animate-wiggle duration-2000">
          <Image src="/images/element/e8.png" alt="logo" width={300} height={300} />
        </div>
        <MyUniverseV2 />
      </FullScreenV2>
      <FullScreenV2 className="">
        page
      </FullScreenV2>
    </div>
  )
}

export default HomeH