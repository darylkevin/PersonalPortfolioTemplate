import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import Profiles from './Profiles'
import Footer from './Footer'

const ExperienceCard = () => {
  return (
    <div className="mx-auto max-w-screen-md h-[100vh] sticky top-0">
      <div className="mx-auto my-auto h-full flex flex-col justify-center xs:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <div className="flex flex-col gap-2 h-fit max-md:rounded-xl p-4 max-md:shadow-xl max-md:dark:shadow-lg max-md:dark:shadow-green-400/75">
            <header className="md:hidden">
            <Navigation />
            </header>

            <main className="grid md:grid-cols-3 lg:grid-cols-4">
            <div className="grid md:col-span-2 lg:col-span-3">
                <Hero />
                <Profiles />
            </div>

            <div className="hidden md:block">
                <Navigation shortHand={false} flex={false}/>
            </div>
            </main>
        </div>

        <footer>
            <Footer />
        </footer>

      </div>
    </div>
  )
}

export default ExperienceCard