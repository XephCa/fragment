import React from 'react'
import logo1 from '../images/atlantic-records-logo-puy3lnn7jzsc0ti2vdnm1n98wmc2ap25dd9m5h8s9m.png'
import logo2 from '../images/chibi-dinos-logo-puy3lnn6c50fuktf2qja1bge8fnfcj81ydwdxdysbs.png'
import logo3 from '../images/goat-society-logo-2-puy3lol0l5zjr36qn6zgpm5rvoqdhthkl3s4pqg95m.png'
import logo4 from '../images/pudgy-logo-puy3lpiupt30hsqorrcj6azbf7e5rxfimn7cvxvzzc.png'
import logo5 from '../images/warner-music-logo-puy3lpiwf7d83rvwvqeq6v70c3gk455v89xmnrf5d4.png'
import {motion} from 'framer-motion'
import Button from './Button'
import avatar from '../images/luca-netz-pfp-1-e1663100654437.jpg'
import '../styles/portfolio.css'

const Logo = ({index, src}) => {
  return(
    <motion.img whileHover={{scale:1.2, rotate:45}} src={src} alt={`Logo ${index}`}/>
  )
}

const Portfolio = () => {
  return (
    <div id="portfolio" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'5rem'}}>
      <div className='portfolioTitle'>Our Portfolio</div>
      <div className='portfolioSub' style={{width:'80%'}}>Check out a list of notable past client projects with niches including Crypto, NFTs, Metaverse, Music, Social, Gaming, and more!</div>
      <motion.div 
        initial={{opacity:0, translateX:300}}
        whileInView={{opacity:1, translateX:0}}
        transition={{duration:0.5}}
        className="portfolioClients"
        style={{marginTop:'4rem', display:'flex', justifyContent:'space-evenly', width:'100%', alignItems:'center', marginBottom:'7rem'}}
      >
        <div style={{fontSize:'2rem', width:'15rem', textAlign: 'center'}}>43+ Trusted Clients</div>
        <div className='portfolioLine' style={{width:'0.1rem', height:'7rem', backgroundColor:'rgb(235,235,235)'}}></div>
        <Logo index={1} src={logo2}/>
        <Logo index={0} src={logo1}/>
        <Logo index={2} src={logo3}/>
        <Logo index={3} src={logo4}/>
        <Logo index={4} src={logo5}/>
      </motion.div>
      <div className='portfolioTitle' style={{textAlign:'center'}}>What our clients say</div>
      <div className='portfolioSub' style={{marginBottom:'3rem'}}>See our impact on past projects by reading our client testimonials.</div>
      <div className='portfolioReferences' style={{
        marginBottom:'7rem',
        padding:'2rem', 
        borderRadius:'0.25rem',
        paddingBottom:'2rem',
        backgroundColor:'rgb(235,235,235,0.1)',
        lineHeight:'1.75rem',
        letterSpacing:'0.075rem',
        borderWidth:'0.05rem',
        borderStyle:'solid',
        display:'flex',
        width:'80%',
        maxWidth:'700px'
      }}>
        <img className='portfolioImage' src={avatar} alt="Avatar" style={{borderRadius:'1rem', marginRight:'2rem'}}/>
        <div>
          <div>Josh is one of the most elite marketers in web3.</div>
          <div style={{marginBottom:'2rem'}}>His growth is different and he is nothing short of professional! Great management team as well!</div>
          <div>Luca Netz</div>
          <div>CEO - Pudgy Penguins</div>
        </div>
      </div>
      <div className='portfolioTitle' style={{textAlign:'center'}}>The Best Solutions for our clients</div>
      <div className='portfolioSub' style={{width:'80%', marginBottom:'2rem'}}>We offer a customizable approach to our clients based on project needs. Click below to schedule a call to discuss your interests and receive a quote for our services.</div>
      <div style={{
        marginBottom:'7rem',
        padding:'2rem', 
        borderRadius:'0.25rem',
        paddingBottom:'2rem',
        backgroundColor:'rgb(235,235,235,0.1)',
        lineHeight:'1.75rem',
        letterSpacing:'0.075rem',
        borderWidth:'0.05rem',
        borderStyle:'solid',
        maxWidth:'400px',
        textAlign:'center'
      }}>
        <div style={{fontSize:'2rem', marginBottom:'1rem'}}>Recieve a Quote</div>
        <div style={{fontSize:'2rem', marginBottom:'2rem'}}>$0</div>
        <div style={{marginBottom:'2rem', textAlign:'start', paddingLeft:'3rem'}}>
          - Custom Solutions<br/>
          - Community Management<br/>
          - Multiplatform Marketing Plan<br/>
          - Global Moderation Team<br/>
          - Server Setup/Development<br/>
          - Event Hosting<br/>
          - Growth Optimization<br/>
          - Partnership/Collaboration Management<br/>
          - Bot Development<br/>
          - Security Audits
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Portfolio