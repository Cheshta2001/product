import React from 'react'
import '../../style/SilicaSand.css'

const SilicaSand = () => {

    return(
        <>
        
        <div className="container-fluid">
        <div className="row bg">
            <div className="col-sm silica">
                <img src="images/Silica-sand-1.webp" alt=""/>
            </div>
            <div className="col-sm sili">
                <h1>Silica Sand</h1>
                <p>Silica sand is the most common sand variety found in the world. Sand is a general term for a
                    collection of broken-down granular forms of minerals or rocks. Silica sand is made up mostly of
                    quartz particles that, over the years, have been broken down due to water or wind into tiny
                    particles. Silica sand deposits are usually surface-mined, and the extracted ore undergoes rounds of
                    processing to increase its purity levels. As a result, silica sand is a rich contributor to silica
                    and is therefore widely used in the ceramic industry, glass making, paints and many other such
                    industries.</p>
                <h6 className="dibba">Silica Sand’s chemical composition is <br/>
                    <center><strong>SiO2</strong></center>
                </h6>

            </div>

        </div>
    </div>


    <div className="container-fluid">
        <div className="middle">
            <div className="row">
                <div className="col-md-12">
                    <h1>Physical Properties</h1>
                    <p>Feldspars exhibit several remarkable physical properties, which drive their applications <br/> in
                        a variety of sectors:</p>
                </div>
            </div>
        </div>
    </div>


    <div className="container">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 props">
            <div className="col">
                <img src="images/Very-High-Melting-Boiling-Points-1.webp" alt="" />
                <p>Very High Melting & <br/> Boiling Points</p>
                
            </div>

            <div className="col">
                <img src="images/Insoluble-1.webp" alt=""/>
                <p>Insoluble</p>
                
            </div>

            <div className="col">
                <img src="images/Extremely-Hard-2.webp" alt=""/>
                <p>Extremely Hard</p>
                
            </div>

            <div className="col">
                <img src="images/Chemically-Inert-2.webp" alt=""/>
                <p>Chemically Inert</p>
               
            </div>
            <div className="col">
                <img src="images/Thermally-Stable-1.webp" alt=""/>
                <p>Thermally Stable</p>
                
            </div>
        </div>
    </div>



    <div className="container-fluid">
        <div className="apps">
            <div className="row">
                <div className="col-md-12">
                    <h1>Applications</h1>
                    <p>The rich silica content of Silica sand makes it highly useful in a lot of applications, given
                        <br/> its remarkable physical and chemical properties:
                    </p>
                </div>
            </div>
        </div>
    </div>


    {/* Cards Starting  */}

    <div className="container-fluid beauty">
        <div className="card">
            <div className="imgbox">
                <img src="images/Industrial-Abrasives-1.webp" alt="" />
            </div>
            <div className="content">
                <h4>Industrial Abrasives</h4>
                <p>Silica sand is widely used as a mineral abrasive used for industrial blasting, wherein it is pushed under pressure to smoothen a rough surface.</p>
            </div>
        </div>

        <div className="card">
            <div className="imgbox">
                <img src="images/Glassmaking-1.webp" alt="" />
            </div>
            <div className="content">
                <h4>Glassmaking</h4>
                <p>Silica from the silica sand is the main component in standard glass manufacturing processes ranging from window glass to glassware or specialised fibreglass.</p>
            </div>
        </div>

        <div className="card">
            <div className="imgbox">
                <img src="images/Paints-Coatings-1.webp" alt="" />
            </div>
            <div className="content">
                <h4>Paints & Coatings</h4>
                <p>Silica is used as filler in the paints and coatings industry as it improves the paint's tint reduction and makes it resistant to dirt and wears and tear.</p>
            </div>
        </div>

        <div className="card">
            <div className="imgbox">
                <img src="images/Ceramics-Refractories-1.webp" alt="" />
            </div>
            <div className="content">
                <h5>Ceramics & Refractories</h5>
                <p>Silica is extensively used to produce and glaze all types of ceramics like tableware and tiles, along with making critical parts of refractories.</p>
            </div>
        </div>
    </div>

</>
    )
}

export default SilicaSand;