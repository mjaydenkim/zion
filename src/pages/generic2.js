import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic01 from '../assets/images/pic04.jpg'

class Generic2 extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Rock Formation Historian" />
        <header id="header">
          <h1>Rock Formation Historian</h1>
          <p>This part was created by Matthew.</p>
      </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
              <h1 id="sedimentation">Sedimentation:</h1>
                <ul>
                <li>240M years ago, Zion was a relatively flat basin near sea level</li>

                <li>Sand, gravel, mud eroded from surrounding mts.</li>

                <li>Streams carried these materials into the basin</li>

                <li>Deposited in layers</li>

                <li>The weight caused the basin to sink</li>

                <li>Top layer kept at sea level</li>

                <li>Massive sedimentation collection created ~10K feet deep</li>
                </ul>

                <h1 id="lithification">Lithification:</h1>

                <ul>
                <li>Waters with minerals filtered through sediments</li>

                <li>Iron oxide, Calcium carbonate, Silica- cementing agents</li>

                <li>Transformed deposits into different kinds of stone</li>

                <li>“Ancient seabeds became limestone; mud and clay became mudstones and shale, and desert sand became sandstone.”- NPS</li>
                </ul>

                <h1 id="uplift">Uplift</h1>

                <ul>
                <li>Forces deep within Earth push its surface up</li>

                <li>Slow hoisting of huge blocks of crust</li>

                <li>Zion’s elevation rose from sea level to ~10K feet high</li>

                <li>Uplift is still occurring today</li>
                </ul>

                <h1 id="erosion">Erosion</h1>

                <ul>
                <li>Zion uplift caused streams to tumble off the plateau, flowing rapidly down a steep gradient</li>

                <li>Streams (which had sediment and boulders) eroded and cut into rock layers</li>

                <li>This formed deep, narrow canyons</li>

                <li>North Fork of Virgin River has carried away a lot of rock</li>

                <li>The Virgin River still excavating</li>

                <li>Still widening/creating canyons</li>
                </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic2
