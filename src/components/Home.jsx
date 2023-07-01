import React from 'react';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home'>
                <main>
                    <h1>ITALIAN CUISINE</h1>
                    <p>on the bay</p>
                </main>
            </div>

            <div className='home2'>
                <div>
                    <p>
                        Enjoy our exquisite Italian cuisine while experiencing a breathtaking sunset over the Barnegat Bay.
                        We take pride in our exceptional service, world-class views, and fresh and local fare prepared by our chef and owner.
                    </p>
                </div>

            </div>

            <div className='home3' id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Panini Bay is the product of our family’s love for food, friends, and the beauty of the bay.

                        We pride ourselves in combining fresh Italian cuisine, a breathtaking view of the Barnegat Bay, and impeccable service to give you a world-class culinary experience.

                        Our family opened Panini Bay in the summer of 2011, just months before the devastation of Hurricane Sandy. The old building was nearly destroyed, but we turned our loss into an opportunity to create an atmosphere that perfectly embodies our love for food, friends, and family.
                    </p>
                </div>
            </div>

            <div className='home4' id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home