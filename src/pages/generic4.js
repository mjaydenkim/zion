import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic03 from '../assets/images/pic03.jpg'

class Generic4 extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Rock Ranger" />
        <header id="header">
          <h1>Rock Ranger</h1>
          <p>This part was created by Georgia.</p>
      </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic03} alt="" /></span>
              <p>Around 240 million years ago, Zion was a pretty flat valley whose elevation was around sea level’s. Nearby bodies of water carried sand, gravel, and mud from all around through the gully. The sand, gravel, and mud all collected in the bottom, in layers. This represents sediment being collected in the rock cycle. </p>
              <br/>
              <p>These layers weighed down the basin, causing it to sink. The surface remained close to sea level. The environment fluctuated, its cause being climate change. The land rose and fell, becoming a coastal plane at one point, a shallow sea at another, and a desert at yet one more. According to Springdale Zion National Park, “This process, called sedimentation, continued until over 10,000 feet of material accumulated.” This represents sediment being compacted in the rock cycle. The sediment transforms into sedimentary rock after being compressed. 
              <br/>
              With minerals dissolved in the water, it “slowly filtered through the compacted sediment layers. Working as cementing agents, iron oxide, calcium carbonate, and silica transformed layers into stone over extensive periods of time,” Springdale Zion National Park says. The old seabeds began to turn into limestone, clay and mud became mudstones or shale, while sand from the desert became sandstone. Each layer of rock originated from a different place, causing the layers to have different thicknesses, colors, and textures. They have different mineral content, as well. Under pressure, metamorphic rock is created.
              <br/>
              Lastly, Zion was lifted up into the massive canyon it is today, and continues to be. The process is naturally occurring and is called uplift. This is when a vertical push forces pieces of the crust apart and upward. In Zion’s case, about 10,000 feet above sea level. (Zion rested at sea level before this occurred.)
              </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic4
