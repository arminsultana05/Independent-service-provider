import React from 'react';
import './Feedback.css'
import logo1 from '../../../images/test.png'
import logo2 from '../../../images/test2.png'
import logo3 from '../../../images/test 3.png'


const Feedback = () => {
    return (
        <div className="testimonials">
            <div class="testimonial-inner">
                <h1>Testimonial</h1>
                <div className="border"></div>

                <div className="row">
                    <div className="col">
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={logo2} alt="" />
                            <div className="name">John Waddrob</div>
                            <div class="rating">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-gray-300" />
                               
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={logo3} alt="" />
                            <div className="name">John Waddrob</div>
                            <div class="rating">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-gray-300" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-gray-300"  />
                               
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Feedback;