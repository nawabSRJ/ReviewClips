import React from 'react'
import ReviewForm from '../Components/ReviewForm'
import First from '../TestimonialsDesign/First'
import { useState } from 'react';
import '../App.css'

export default function SendReview() {
  let [feedback , setFeedback] = useState('')
  let [name , setName] = useState('')
  const [image, setImage] = useState(null);   // null is false in js
  const handleImageChange = (img) => {
    setImage(img);
  };
  return (
    <div>
        <ReviewForm setFeedback={setFeedback} setName={setName} onImageChange={handleImageChange} />
        <First feedback={feedback} name={name} image={image} />
    </div>
  )
}
