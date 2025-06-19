import React from 'react'
import {Navbar} from '../components/Navbar'
import { Hero } from '../components/home/Hero'
import { Footer } from '../components/Footer'
import Container from '../components/Container'
import { JoinUs } from '../components/home/JoinUs'
import { FoodCardSection } from '../components/foods/FoodCardSection'

export const Home: React.FC = () => {
  return (
    <>
      <Container className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex flex-col gap-6">
        <Navbar />
        <Hero />
        <FoodCardSection/>
        <JoinUs />       
        <hr className="mt-6" />
        <Footer />
      </Container>
    </>
  )
}
