import React from 'react'
import Hero from '@/components/website/home/Hero'
import FAQ from '@/components/website/home/FAQ'
import HowItWorks from '@/components/website/home/HowItWorks'
import TipsArticles from '@/components/website/home/TipsArticles'
import FrequentlyAskedQuestions from '@/components/website/home/FrequentlyAskedQuestions'

const Page = () => {
  return (
    <>
      {/* <Hero /> */}
      <FAQ />
      <HowItWorks />
      <FrequentlyAskedQuestions />
      <TipsArticles />
    </>
  )
}

export default Page