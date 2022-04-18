import React from 'react';
import logo1 from '../../../images/test.png'
import logo2 from '../../../images/test2.png'
import logo3 from '../../../images/test 3.png'
import './Feedback.css'


const Feedback = () => {
    return (
        <div className="testimonials">
            <div class="testimonial-inner">
                <h1 className="text-4xl">What People Say ?</h1>
                <div className="border"></div>

                <div className="row  ">
                    <div className="col ">
                        <div className="testimonial">
                            <img src={logo1} alt="" />
                            <div className="name">John Waddrob</div>
                            <div class="rating">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />

                            </div>
                            <p className='text-left'>Thank you so much for your help, guidance, enthusiasm, fabulous knowledge and overall positive and energetic attitude. I know that I made the right decision to use you as my career coach. I cannot speak highly enough of the combination of assessments that you provide,.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={logo2} alt="" />
                            <div className="name">Danial Ross</div>
                            <div class="rating">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-gray-300" />

                            </div>
                            <p className='text-left'>Career coaches can help you land the job you've always wanted, get a promotion or even start your own business. Their expertise and unbiased attention will help you get the results you've been hoping for, often in a fraction of the time, it would have taken if you'd continued making mistakes on your own.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={logo3} alt="" />
                            <div className="name">Alizee Pentan</div>
                            <div class="rating">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-gray-300" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-gray-300" />

                            </div >
                            <p className='text-left'>Monikais wonderful guy
                                Ask your contacts about their career and what led them there. ...
                                Be transparent about your ambitions. ...
                                Take stock of your emotional and mental well-being. ...
                                Define what a successful coaching experience will look like for you. ...
                                Think of your career advancement as a sprint.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stats shadow mt-5">

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Total Likes</div>
                    <div class="stat-value text-primary">25.6K</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Page Views</div>
                    <div class="stat-value text-secondary">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value">86%</div>
                    <div class="stat-title">Tasks done</div>
                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
        </div>


    );
};

export default Feedback;