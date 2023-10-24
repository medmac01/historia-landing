import Image from 'next/image'

import TestimonialImage01 from '@/public/images/Khadija.JPG'
import TestimonialImage02 from '@/public/images/Firdawse.jpeg'
import TestimonialImage03 from '@/public/images/Ghizlane.jpeg'
import TestimonialImage03 from '@/public/images/Mechrouh.jpeg'
import TestimonialImage03 from '@/public/images/ravelle.png'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet Our Passionate Team of Travel Enthusiasts</h2>
            <p className="text-xl text-gray-400">Our dedicated team of travel enthusiasts is driven by a passion for exploration. With a diverse range of expertise, we're committed to crafting innovative solutions that enhance your journey and make every adventure unforgettable.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-5 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Meet Khadija, final year AI student, uses her tech skills to personalize your trip. Her passion for deep learning and natural language processing drives our personalized trip planning and AI Storyteller features.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">AI Engineer</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Firdawse is our AI guru, also in his final year of AI studies. His expertise in data analysis and algorithms ensures the real-time information feature is always up-to-date, providing users with essential travel details.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">AI Engineer</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Ghizlane, brings the business acumen to the team as a final year business student. Her expertise in market analysis, strategy, and innovation ensures our project is not just technologically advanced but also user-friendly and commercially viable.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Business Strategist</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Mohammed is our AI extraordinaire. With a passion for user experience, his final year AI studies are integral to the AI Storyteller, enabling vocal and text interactions at historical sites.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">AI Engineer</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div>
            </div>

            {/* 5th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Ravelle, another final year AI student, is the creative force behind our activities recommendation feature. Her flair for AI-driven recommendations tailored to your interests makes your journey truly unique.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">AI Engineer</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
