import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height hero-overly d-flex align-items-center" data-background="/assets/img/hero/homeHero_1.jpg">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-7 col-md-9 ">
                                <div className="hero__caption text-center d-flex align-items-center caption-bg">
                                   <div className="circle-caption">
                                        <span  data-animation="fadeInUp" data-delay=".3s">Aug 31 2025</span>
                                        <h1  data-animation="fadeInUp" data-delay=".5s">Rahman & Asleen</h1>
                                        <p  data-animation="fadeInUp" data-delay=".9s">We are getting married</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Our-story-area story-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="story-img mb-100">
                             <Image src="/assets/wedding/img3.jpg" width={530} height={625} alt="story-imges" className="story-imges rond_45"/>
                             <div className="shape-flower-img">
                                <img src="/assets/img/our_story/flower_top.png" className="flower-top" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="story-caption">
                            <img src="/assets/img/our_story/flower_right.png" alt="" />
                            <h3>Our Story</h3>
                            <p className="story2">Rahman from Thanjavur and Asleen from Madurai didn’t meet in some dramatic movie scene — they met the classic way: Matrimony.com (because love starts with a login these days). After a few “Hi, hello, what’s your native?” conversations and the usual family-level FBI background checks, they finally met in person — and shockingly, they actually liked each other.</p>
                            <p className="story2">What began as an “arranged formality” slowly turned into real feelings (who knew, right?). Now they’re all set to prove that even a matrimony match can come with a happily ever after — sarcasm, spice, and all.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-flower d-none d-xl-block">
                <img src="/assets/img/our_story/shape_left.png" className="flower1" alt="" />
                <img src="/assets/img/our_story/shape_right.png" className="flower2 " alt="" />
            </div>
        </div>
        <div className="service-area ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="singl-services text-center mb-60">
                            <div className="top-caption">
                                <h4>Nikkah</h4>
                                <p>August 31, 2025</p>
                            </div>
                            <div className="services-img">
                                <Image src="/assets/wedding/img4.jpg" width={257} height={257} alt="nikkah" className="nik_img"/>
                                <div className="back-flower">
                                    <img src="/assets/img/service/services_flower1.png" alt="" />
                                </div>
                            </div>
                            <div className="bottom-caption">
                                <span>10:00AM - 11:45AM</span>
                                <p>PR Marriage Hall<br /> NMS Nagar, Kadachaneanthai Road, Madurai</p>
                            </div>
                        </div> 
                    </div>
                </div>
             </div>
        </div>
        <div className="our-memories-area section-padding2">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <img src="/assets/img/memories/section_tittle_flowre.png" alt="" />
                            <h2>OUR MEMORIES</h2>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-4 col-md-4">
                        <div className="memory">
                            <div className="memories-img">
                                <Image src="/assets/wedding/img1.jpg" width={390} height={482} alt="our memories"/>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4">
                        <div className="memory">
                            <div className="memories-img">
                                <Image src="/assets/wedding/img4.jpg" width={390} height={482} alt="our memories"/>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-4 col-md-4">
                        <div className="memory">
                            <div className="memories-img">
                                <Image src="/assets/wedding/img2.jpg" width={390} height={482} alt="our memories"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="memory">
                            <div className="memories-img">
                                <Image src="/assets/wedding/img5.jpg" width={390} height={482} alt="our memories"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="memory">
                            <div className="memories-img">
                                <Image src="/assets/wedding/img6.jpg" width={390} height={482} alt="our memories"/>
                            </div>
                        </div>
                    </div>   
                    <div className="col-lg-4 col-md-4">
                        <div className="memory">
                            <div className="memories-img">
                                <Image src="/assets/wedding/img7.jpg" width={390} height={482} alt="our memories"/>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
            <div className="memories-shape d-none d-xl-block">
                <img src="/assets/img/memories/left-img.png" className="memories-shape1" alt="" />
                <img src="/assets/img/memories/right-img.png" className="memories-shape2" alt="" />
            </div>
        </div>

    
        <div className="contact-form section-padding2 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="form-wrapper">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <div className="section-tittle tittle-form text-center">
                                        <img src="/assets/img/memories/section_tittle_flowre.png" alt="" />
                                        <h2>Dear Family & Friends,</h2>
                                    </div>
                                </div>
                            </div>
                            <p>
                              We are so excited to celebrate this beautiful journey of love and togetherness with you!
                            </p>
                            <p>
                              Your presence means the world to us, and we are beyond grateful to have each of you in our lives. This website is your guide to all the important details about our wedding — from the schedule, venue, and travel info to special moments we’d love to share.
                            </p>
                            <p>
                              As we count down to the big day, we invite you to explore the site, leave us a message, and get ready to join us for a celebration filled with joy, laughter, and love.
                            </p>
                            <h5 className="mt-4">With love,</h5>
                            <p>Rahman & Asleen</p>
                            <div className="shape-inner-flower">
                                <img src="/assets/img/flower/form-smoll-left.png" className="top1" alt="" />
                                <img src="/assets/img/flower/form-smoll-right.png" className="top2" alt="" />
                                <img src="/assets/img/flower/form-smoll-b-left.png"className="top3"  alt="" />
                                <img src="/assets/img/flower/form-smoll-b-right.png"className="top4"  alt="" />
                            </div>
                            <div className="shape-outer-flower">
                                <img src="/assets/img/flower/from-top.png" className="outer-top" alt="" />
                                <img src="/assets/img/flower/from-bottom.png" className="outer-bottom" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
  );
}
