import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/5 mx-auto mt-10 mb-10'>
            <h1  className='text-4xl mt-4'>Difference between authorization and authentication?</h1>
            <p className='text-2xl mt-4 mb-4'>Authentication:</p>
            <p >Authentication is about Validating you credential like user name and password to verify your identity.Authentication is a process by which you provide proofs that you are who you claim to be. Everyone is familiar with authentication i.e. login process but not so with authorization. Authentication is about validation you credential like user name and password to verify your identity</p>
            <p className='text-2xl mt-4 mb-4'>Authorization</p>
            <p> Authorization is the procee to determin wheather the authenticated userAuthorization is a process by which a server determines if the client has permission to use a resource or access a file. Authorization is usually coupled with authentication so that the server has some concept of who the client is that is requesting access. </p>

            <h1 className='text-4xl mt-4'>Why are you sing firebase? What other options do you have to implement authentication?</h1>
            <p className='text-2xl mt-4 mb-4'>The reason for using Firebase: </p>
            <p>React is used to display applications in web browsers and to store local state in components, while Firebase is used for authentication, authorization, and managing a realtime database Firebase Analytics gives you undeniable insight into user behavior. You can use this knowledge to make informed decisions about how to market your app better and to reach out to the audiences that you want to target. The unique features it offers also allows you to analyze the performance of your campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that you want to reach.</p>

            <p className='text-2xl mt-4 mb-4'>The option i have emplement authentication: </p>
            <p> at firts I will use react firebase ho  ok because react firbase hook most Efficient than firebase authentication.And react firebase hook easy to apply.And on the other hand i use  okta for my website authentication.Its an identity management service powered by three massive tech trend (cloud,digital transformation and security) Lots of integration,Legency support</p>
            <h1 className='text-4xl mt-4'> What Other Service does firebase provide other than authentication?</h1>
            <p className='text-2xl mt-4 mb-4'>There are many services which Firebase provides, Most useful of them are:</p>
            <ul>
                <li>1.Cloud Firestore.</li>
                <li>2. Cloud Functions</li>
                <li>3. Authentication.</li>
                <li>4.Hosting.</li>
                <li>5.Cloud Storage</li>
                <li>6.Google Analytics.</li>
                <li>7.Predictions</li>
                <li>8.Cloud Messaging</li>
            </ul>

            
        </div>
    );
};

export default Blogs;