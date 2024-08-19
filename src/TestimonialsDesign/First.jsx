import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import defaultUserPic from '../assets/userdefault.png';
import '../App.css';

export default function First({ feedback, name, image }) {
  const componentRef = useRef();

  return (
    <div>
      <div ref={componentRef} className="outer-box mx-auto container sm:h-[90%] sm:w-[60%] h-[90%] w-[70%] bg-green-400 pt-5">
        <div className="inner-box mx-auto container sm:h-[95%] sm:w-[80%] h-[95%] w-[85%] bg-white pt-5">
          <h3 className="sm:text-3xl text-2xl text-center text-black font-playwrite-cursive">
            Our Client
          </h3>

          <div className="img-box w-[140px] h-[140px] bg-rose-400 mx-auto rounded-full mt-10 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${image ? image : defaultUserPic})` }}
          >
            {/* <!-- todo : set the bkg image as the dp of the user --> */}
          </div>
          <div className="review-block">
            {/* <!-- todo : the user's review should come here --> */}
            {/* <!-- todo : add a limit to the number of words --> */}
            <p className="review-text text-center px-4 py-4 mt-2 text-xl">
              {feedback || 'This is a test review given by the developer at the time of creating this review block in this testimonial design. I am thinking to fix an upper limit to the number of words that come here!!. This seems a good idea as it will help mitigate the issue with largely varying reviews in terms of their size.'}
            </p>
          </div>
          <strong>
            <div className="user-name text-center text-4xl">
              {name || 'Srajan Saxena'}
            </div>
          </strong>

          <div className="star-design text-center text-2xl my-5 rounded">
            ⭐⭐<span className="text-4xl">⭐</span>⭐⭐
          </div>
        </div>
      </div> {/* outer box ended */}

      <center><ReactToPrint
        trigger={() => <button className="bg-green-400 py-2 px-4 text-2xl rounded-full my-5">Print Feedback</button>}
        content={() => componentRef.current}
        documentTitle="Feedback"
        pageStyle="print"
      /> </center>
    </div>
  );
}
