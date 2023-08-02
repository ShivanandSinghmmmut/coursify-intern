import React from 'react'
import jobseeker from "../img/laptop.jpg"
import pngl from "../img/pnglaptop.png"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
const About = () => {
  return (
    <>
      <div className='About-main-container'>
        <div className='About-main-seekers'>
            <div className='About-main-seekers-row'>
                <div className='About-main-seekers-img'>
                    <img src={pngl}></img>
                </div>

                <div className='About-main-seekers-content'>
                    <div className='About-main-seekers-heading'>
                        <h1>Why job seekers love us</h1>
                    </div>
                    <div className='About-main-seekers-list'>
                        <ul>
                            <li><StarOutlineIcon></StarOutlineIcon>Unique jobs at startups and tech companies you can't find anywhere else</li>
                            <li><AdsClickIcon/>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</li>
                            <li><NewspaperIcon/>Everything you need to know to job search - including seeing salary and stock options upfront when looking</li>
                            <li><PublishedWithChangesIcon/>Connect directly with founders at top startups - no third party recruiters allowed</li>
                        </ul>
                    </div>
                    <div className='About-main-seekers-button-row'>
                        <button>Learn more</button>
                        <button>Sign up now</button>
                    </div>
                </div>
            </div>
        </div>




        <div className='About-main-recruiters'>
            <div className='About-main-recruiters-row'>
                <div className='About-main-recruiters-content'>
                    <div className='About-main-recruiters-heading'>
                        <h1>Why job seekers love us</h1>
                    </div>
                    <div className='About-main-recruiters-list'>
                        <ul>
                            <li><GroupsIcon/>8 million responsive and startup-ready candidates, with all the information you need to vet them</li>
                            <li><MenuOpenIcon/>Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</li>
                            <li><FormatAlignJustifyIcon/>A free applicant tracking system, or free integration with any ATS you may already use</li>
                            
                        </ul>
                        <div className='About-main-recruiters-content-para'>
                            <p>Plus, we can do the vetting for you! With Curated, we review the world's top 
                            tech talent and highlight candidates directly to you 2x a week.</p>
                        </div>
                    </div>
                    <div className='About-main-recruiters-button-row'>
                        <button>Learn more</button>
                        <button>Sign up now</button>
                    </div>
                </div>

                <div className='About-main-recruiters-img'>
                    <img src={pngl}></img>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
