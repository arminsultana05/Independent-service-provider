import React from 'react';
import logo1 from '../../../images/test.png'
import logo2 from '../../../images/test2.png'
import logo3 from '../../../images/test 3.png'
import './Feedback.css'


const Feedback = () => {
    return (
        <div className="testimonials">
            <div class="testimonial-inner">
                <h1 className="text-4xl">What People Say</h1>
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
        </div>


    );
};

export default Feedback;