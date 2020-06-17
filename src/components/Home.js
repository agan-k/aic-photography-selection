import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './Home.css'
//==================================
import diane from '../assets/diane.jpg'
import brandt from '../assets/brandt.jpg'
import bruce from '../assets/bruce.jpg'
import frank from '../assets/frank.jpg'
import garry2 from '../assets/garry2.jpeg'
import helen from '../assets/helen.jpg'
import henri from '../assets/henri.jpg'
import koudelka from '../assets/koudelka.jpg'
import lee from '../assets/lee.jpg'
import lisette from '../assets/lisette.jpg'
import manuel from '../assets/manuel.jpg'
import sally from '../assets/sally.jpg'
import saul from '../assets/saul.jpg'
import walker from '../assets/walker.jpg'
import aic from '../assets/aic-logo.gif'
//==================================
import local_photos from '../local_photos'

class Home extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
   //   const local_photo = local_photos.map(({id, src}) => <img key={id} src={src} />)
   //    console.log(local_photo)
    return (
       <div className="home">
          <div className="collage-container">
             {/* ==================================================== */}
             <div className="collage1">
                <div className="image-box" style={{ position: "relative" }}>
                   <img src={diane} style={{ position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
             <div className="image-box"><img src={brandt} /></div>
             <div className="image-box"><img src={bruce} /></div>
             <div className="image-box"><img src={frank} /></div>
             <div className="image-box"><img src={garry2} /></div>
             <div className="image-box" style={{ position: "relative" }}>
                   <img src={helen} style={{ height: '4em', position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={henri} style={{ opacity: ".2" }} />
                </div>
             <div className="image-box"><img src={koudelka} /></div>
             <div className="image-box"><img src={lee} /></div>
             <div className="image-box"><img src={lisette} /></div>
             <div className="image-box" style={{ position: "relative" }}>
                   <img src={manuel} style={{ position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={sally} style={{ height: '3em', opacity: '.2'}} />
                </div>
             <div className="image-box"><img src={saul} /></div>
             <div className="image-box" style={{ position: "relative" }}>
                   <img src={walker} style={{ opacity: '1', height: '3.5em', position: "absolute", top: '-.3em', left: '-.6em' }} />
                </div>
             <div className="image-box" style={{ position: "relative", backgroundColor: "white" }}>
                   <img src={diane} style={{ position: "absolute", top: '-.4em', left: '-1.2em', opacity: '.2'}} />
                </div>
             <div className="image-box" style={{ backgroundColor: "white" }}>
                <img src={brandt} style={{ opacity: ".2" }} />
             </div>
             {/* <div className="image-box" style={{ backgroundColor: "white" }}>
                <img src={bruce} style={{ opacity: ".2" }} />
             </div> */}
             {/* <div className="image-box" style={{ backgroundColor: "white" }}>
                <img src={frank} />
             </div>
             <div className="image-box"><img src={garry2} style={{opacity: ".8"}} /></div> */}
             {/* <div className="image-box" style={{ position: "relative" }}>
                   <img src={helen} style={{ height: '4em', position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
             <div className="image-box"><img src={henri} /></div> */}
             </div>
             {/* ==================================================== */}
             <div className="collage2">
             <div className="image-box" style={{ position: "relative"}}>
                   <img src={diane} style={{ position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
             <div className="image-box"><img src={brandt} /></div>
             <div className="image-box"><img src={bruce} /></div>
             <div className="image-box"><img src={frank} /></div>
             <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={garry2} style={{ opacity: ".2" }} />
                </div>
             <div className="image-box" style={{ position: "relative" }}>
                   <img src={helen} style={{ height: '4em', position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={henri} style={{ opacity: ".2" }} />
                </div>
             <div className="image-box"><img src={koudelka} style={{ opacity: "1"}}/></div>
             <div className="image-box"><img src={lee} /></div>
             <div className="image-box"><img src={lisette} /></div>
             <div className="image-box" style={{ position: "relative", backgroundColor: "white"  }}>
                   <img src={manuel} style={{ position: "absolute", top: '-.4em', left: '-1.2em', opacity: '.2'}} />
                </div>
             <div className="image-box"><img src={sally} style={{ height: '3em', opacity: "1"}}/></div>
             <div className="image-box"><img src={saul} /></div>
             <div className="image-box" style={{ position: "relative", backgroundColor: "white"}}>
                   <img src={walker} style={{ height: '3.5em', position: "absolute", top: '-.3em', left: '-.6em', opacity: '.2'}} />
                </div>
             {/* <div className="image-box" style={{ position: "relative" }}>
                   <img src={diane} style={{ position: "absolute", top: '-.4em', left: '-1.2em', opacity: '1' }} />
                </div>
             <div className="image-box"><img src={brandt} /></div>
             <div className="image-box"><img src={bruce} /></div> */}
             {/* <div className="image-box"><img src={frank} /></div>
             <div className="image-box"><img src={garry2} /></div> */}
             {/* <div className="image-box" style={{ position: "relative" }}>
                   <img src={helen} style={{ height: '4em', position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div> */}
             </div>
             {/* ==================================================== */}
             <div className="collage3">
             <div className="image-box" style={{ position: "relative" }}>
                   <img src={diane} style={{ position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
             <div className="image-box"><img src={brandt} /></div>
             <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={bruce} style={{ opacity: ".2" }} />
                </div>
             <div className="image-box"><img src={frank} /></div>
             <div className="image-box"><img src={garry2} /></div>
             <div className="image-box" style={{ position: "relative" }}>
                   <img src={helen} style={{ height: '4em', position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={henri} style={{ opacity: ".2" }}  />
                </div>
             <div className="image-box"><img src={koudelka} /></div>
             <div className="image-box"><img src={lee} /></div>
                <div className="image-box" style={{backgroundColor: "white"}} >
                   <img src={lisette} style={{ opacity: ".2" }} />
                </div>
             <div className="image-box" style={{ position: "relative" }}>
                   <img src={manuel} style={{ position: "absolute", top: '-.4em', left: '-1.2em' }} />
                </div>
             <div className="image-box"><img src={sally} style={{ height: '3em'}}/></div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={saul} style={{ opacity: ".2" }} />
                </div>
             <div className="image-box" style={{ position: "relative", backgroundColor: "white" }}>
                   <img src={walker} style={{ height: '3.5em', position: "absolute", top: '-.3em', left: '-.6em', opacity: '.2' }} />
                </div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={diane} style={{ height: "2.9em", opacity: ".2" }} />
                </div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={brandt} style={{ opacity: ".2" }} />
                </div>
                <div className="image-box" style={{ backgroundColor: "white" }}>
                <img src={aic} style={{ height: "2.9em", opacity: "1" }} />
                </div>
             {/* <div className="image-box" style={{ backgroundColor: "white" }}>
                   <img src={frank} />
                </div> */}
             {/* <div className="image-box">
                   <img src={aic} style={{ height: "2.9em", opacity: "1" }} />
                </div> */}
             </div>
                
             
             
             {/* {local_photo} */}
          </div>
       
          <p>
             AIC Photography Collection is a growing selection of artwork accessible for viewing trough
             the <a href="https://www.artic.edu/open-access/public-api" target="_blank">Art Institute of Chicago public
             API</a>. The criteria for selected work is based on esthetic as well a
             s social relevance. It includes work of artists who, trough their work, express ideas and feelings 
             while also asking questions. Questions about the life, society, as well as questions about the relevance of 
             the medium of Photography and what it, as an expressive channel, brings to the list of numerous other 
             mediums in the world of visual Art. 
        </p>
        
      </div>
    )
  }

}
export default Home; 

