import Container from "../components/Container"
import { Footer } from "../components/Footer"
import {Navbar} from "../components/Navbar"

export const About = () => {
  return (
    <>
    <Container className="bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col gap-6">
      <Navbar />
      <Footer />
    </Container>
    </>
  )
}
