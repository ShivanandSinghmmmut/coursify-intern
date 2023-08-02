import React from 'react'
import jobc from "../img/manwithlaptop.png"
import jobc2 from "../img/mirror1.png"
import jobc3 from "../img/calculator.png"
import blogp from "../img/ideas.jpg"
const Blog = () => {
  return (
    <>
      <div className='blog-main-container'>
        <div className='blog-main-container-content'>
        <div className='blog-main-container-row'>
                <div className='blog-main-container-column'>
                    <div className='blog-main-container-column-img'>
                        <img src={jobc}></img>
                    </div>
                    <div className='blog-main-container-column-content'>
                        <div className='blog-main-container-column-title'>
                            <h4>JOB COLLECTION</h4>
                        </div>
                        <div className='blog-main-container-column-heading'>
                            <h3>20 Women-Led Startups Expanding Their Remote Teams in 2022</h3>
                        </div>
                        <div className='blog-main-container-column-para'>
                            <p>It is no surprise by now that women make great leaders. In the US alone, 
                            women-led businesses generated more than 1.8 trillion dollars...</p>
                        </div>

                        <div className='blog-main-container-column-button'>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>

                <div className='blog-main-container-column'>
                    <div className='blog-main-container-column-img'>
                        <img src={blogp}></img>
                    </div>
                    <div className='blog-main-container-column-content'>
                        <div className='blog-main-container-column-title'>
                            <h4>JOB COLLECTION</h4>
                        </div>
                        <div className='blog-main-container-column-heading'>
                            <h3>20 Women-Led Startups Expanding Their Remote Teams in 2022</h3>
                        </div>
                        <div className='blog-main-container-column-para'>
                            <p>It is no surprise by now that women make great leaders. In the US alone, 
                            women-led businesses generated more than 1.8 trillion dollars...</p>
                        </div>

                        <div className='blog-main-container-column-button'>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className='blog-main-container-row'>
                <div className='blog-main-container-column'>
                    <div className='blog-main-container-column-img'>
                        <img src={jobc2}></img>
                    </div>
                    <div className='blog-main-container-column-content'>
                        <div className='blog-main-container-column-title'>
                            <h4>JOB COLLECTION</h4>
                        </div>
                        <div className='blog-main-container-column-heading'>
                            <h3>20 Women-Led Startups Expanding Their Remote Teams in 2022</h3>
                        </div>
                        <div className='blog-main-container-column-para'>
                            <p>It is no surprise by now that women make great leaders. In the US alone, 
                            women-led businesses generated more than 1.8 trillion dollars...</p>
                        </div>

                        <div className='blog-main-container-column-button'>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>

                <div className='blog-main-container-column'>
                    <div className='blog-main-container-column-img'>
                        <img src={jobc3}></img>
                    </div>
                    <div className='blog-main-container-column-content'>
                        <div className='blog-main-container-column-title'>
                            <h4>JOB COLLECTION</h4>
                        </div>
                        <div className='blog-main-container-column-heading'>
                            <h3>20 Women-Led Startups Expanding Their Remote Teams in 2022</h3>
                        </div>
                        <div className='blog-main-container-column-para'>
                            <p>It is no surprise by now that women make great leaders. In the US alone, 
                            women-led businesses generated more than 1.8 trillion dollars...</p>
                        </div>

                        <div className='blog-main-container-column-button'>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog
