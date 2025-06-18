import React from 'react'
import heroImg from "../../assets/hero.svg"

export const Hero: React.FC = () => {
    return (
        <div className="hero h-fit bg-base-200 mb-20">
          <div className="hero-content grid md:grid-cols-2 sm:gap-5">
            <div>
              <h1 className="text-5xl font-bold">Want to Read Some PDFs?</h1>
              <p className="py-6">
                Discover a world of knowledge with our extensive collection of PDFs. Whether you're looking for educational material, fiction, or technical documents, we've got you covered. Enjoy seamless access, intuitive navigation, and personalized reading experiences all in one place.
              </p>
              <button className="btn btn-outline btn-info">Join Easy Read</button>
            </div>
            <img src={heroImg} className=" rounded-lg " />
          </div>
        </div>
    )
}
