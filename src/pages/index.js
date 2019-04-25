import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Zion Research" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

//         <div id="main">

//           <section id="intro" className="main">
//             <div className="spotlight">
//               <div className="content">
//                 <header className="major">
//                   <h2>Rock Cycle Geologist</h2>
//                 </header>
//                 <p>This part was created by Chihiro.</p>
//                 <ul className="actions">
//                   <li><Link to="/generic" className="button">See it</Link></li>
//                 </ul>
//               </div>
//               <span className="image"><img src={pic01} alt="" /></span>
//             </div>
//           </section>

//           <section id="first" className="main special">
//             <div className="spotlight">
//               <div className="content">
//                 <header className="major">
//                   <h2>Energy Flow Geophysicist</h2>
//                 </header>
//                 <p>This part was created by Maddox.</p>
//                 <ul className="actions">
//                   <li><Link to="/generic" className="button">See it</Link></li>
//                 </ul>
//               </div>
//               <span className="image"><img src={pic01} alt="" /></span>
//             </div>
//           </section>

//           <section id="second" className="main special">
//             <div className="spotlight">
//               <div className="content">
//                 <header className="major">
//                   <h2>Rock Formation Historian</h2>
//                 </header>
//                 <p>This part was created by Matthew.</p>
//                 <ul className="actions">
//                   <li><Link to="/generic" className="button">See it</Link></li>
//                 </ul>
//               </div>
//               <span className="image"><img src={pic01} alt="" /></span>
//             </div>
//             </footer>
//           </section>

//           <section id="cta" className="main special">
//             <div className="spotlight">
//               <div className="content">
//                 <header className="major">
//                   <h2>Rock Ranger</h2>
//                 </header>
//                 <p>This part was created by Georgia.</p>
//                 <ul className="actions">
//                   <li><Link to="/generic" className="button">See it</Link></li>
//                 </ul>
//               </div>
//               <span className="image"><img src={pic01} alt="" /></span>
//             </div>
//           </section>

//         </div>

      </Layout>
    )
  }
}

export default Index
