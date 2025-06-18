import React from 'react'
import Navbar from '../components/Navbar'
import { Hero } from '../components/home/Hero'
import { Footer } from '../components/Footer'
import Companies from '../components/home/Companies'
import Container from '../components/Container'
import { JoinUs } from '../components/home/JoinUs'
import Benefits from '../components/home/Benefits'
import { benefitOne, benefitTwo } from "../utils/data"

export const Home: React.FC = () => {
  return (
    <>
      <Container className="bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col gap-6">
        <Navbar />
        <Hero />
        <Companies />
        <JoinUs />
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <hr className="mt-6" />
        <Footer />
      </Container>
    </>
  )
}
