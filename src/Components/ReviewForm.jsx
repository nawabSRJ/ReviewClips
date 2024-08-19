import React, { useState } from 'react';
import '../App.css'

export default function ReviewForm({setFeedback , setName , onImageChange}) {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onImageChange(reader.result); // Pass the image to parent
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      onImageChange(null); // Clear the image in parent
    }
  };

  let getFeedback = (event) =>{
      setFeedback(event.target.value);
      // console.log(feedback)  put this into the 'First.jsx' 
  }
  let getName = (event) =>{
      setName(event.target.value);
  }
  // function printScr(){
  //   window.print();
  // }

  return (
    <div>
      <div className="review-form bg-rose-400 p-4 w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-start">
          <input
          onChange={getName}
            type="text"
            id="userName"
            placeholder="Enter Name"
            className="mb-4 sm:mb-0 sm:mr-4 py-2 px-2 rounded-xl flex-1"
          />
          <label htmlFor="userPhoto" className="mb-4 sm:mb-0 sm:mr-4">
            Attach Your Image:
          </label>
          <input type="file" id="userPhoto" className="flex-1" 
          onChange={handleImageChange} />
        </div>
        <textarea
        onChange={getFeedback}
          className="w-full mb-2 py-2 px-2 resize-none mt-3"
          id="userReview"
          rows="6"
          placeholder="Enter Your Review here"
        ></textarea>
        {/* <button onClick={printScr} className="bg-green-400 py-2 px-4 text-2xl rounded-full mt-2">
          Submit
        </button> */}
        
      </div>
    </div>
  );
}
