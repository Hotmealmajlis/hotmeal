import React from 'react'

const AboutPage = () => {
  return (
    <div className='about-page'>
       <div className="heading-section">
       <h1>About <span style={{color:"green"}}>HotMeals</span></h1>
       </div>
       <div className="content-section">
        <p>Food ordering has become an increasingly popular way for people to enjoy their favorite meals without leaving the comfort of their own home. With the rise of technolo
        gy and the internet, many restaurants have started to offer online ordering options through their websites or mobile apps. Customers can easily browse the restaurant's menu, place their order, and pay for their meal all from their phone or computer.Food ordering also provides a convenient option for those who may not have the time or ability to d
        ine in at a restaurant, allowing them to enjoy their favorite dishes from the comfort of their own home or office. With the added benefit of being able to track the status of their order and receive updates on its delivery or pickup, food ordering has become a convenient and hassle-free option for people looking to satisfy their hunger cravings.</p>
        <button className='btn-register'>Register</button>
       </div>
    </div>
  )
}

export default AboutPage