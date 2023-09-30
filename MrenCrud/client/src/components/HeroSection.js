import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import RegisterFrom from './RegisterFrom';
const HeroSection = () => {
    return (
        <>
            <section className='heroWrapper'>
                <div className='heroWrapper-color'>
                    <div className='container text-center'>
                       <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                            <h1 className='text-light'>Hello <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I am Ruhit Baidya',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'I am a Web Developer',
                                1000,
                                'I am a Fullstack Developer',
                                1000,
                                'I am Useing MERN Techanology ',
                                1000,
                                'I Know Javascript',
                                1000,
                                'I Know Node Js, React js',
                                1000,
                                'Express js, MongoDB, Redux.',
                                1000,
                                'I am Useing This Techanology for work',
                                1000
                            ]}
                            speed={30}
                            repeat={Infinity}
                        /></h1>
                        <p className='text-light'>Hello This Is Me Ruhit I just lern javascript and will make A full stack web developer useing mern React Js, Express Js, Mongo DB, Node Js</p>
                        <button className='btn btn-outline-light w-25'>Contact Me</button>
                            </div>
                            <div className='col-md-2'></div>
                       </div>
                    </div>
                </div>
            </section>
            <section className='bg-primary'>
                <div className="container py-5">
                    <div className="row">
                        <div className='col-md-12'>
                            <h3 className='text-center text-light'>Register Here</h3>
                            <hr className="border border-light border-2 opacity-50 w-25 m-auto" />
                            <div className="row">
                                <div className='col-md-3'></div>

                                <div className="col-md-6">
                                    <div className="form-design">
                                        <RegisterFrom />
                                    </div>
                                </div>
                                <div className='col-md-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}

export default HeroSection
