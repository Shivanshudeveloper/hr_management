import React from 'react'
import Navigation2 from './static/Navigation';
import Container from '@material-ui/core/Container';
import Gallery from 'react-grid-gallery';
import Contact from '../Contact';
const IMAGES =
    [
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611208638/readestate/img_15_db2tcv.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611208638/readestate/img_15_db2tcv.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 184,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611207713/readestate/img_14_zv5ydu.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611207713/readestate/img_14_zv5ydu.jpg',
            thumbnailWidth: 340,
            thumbnailHeight: 193,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611206072/readestate/CRML_TRIDEL-LADIES-GC_01_03_RC10-NO-GOLF-CART-low_ogmmix.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611206072/readestate/CRML_TRIDEL-LADIES-GC_01_03_RC10-NO-GOLF-CART-low_ogmmix.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611205814/readestate/20191223-19054-Royal-Bayview_Phase-I---Ground-Floor-Entrance-_LR_hk90i9.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611205814/readestate/20191223-19054-Royal-Bayview_Phase-I---Ground-Floor-Entrance-_LR_hk90i9.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611206544/readestate/download_q69yo2.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611206544/readestate/download_q69yo2.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611205988/readestate/20200219_19054-Royal-Bayview_Phase-II---Pool-3_low-res_g4tz1m.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611205988/readestate/20200219_19054-Royal-Bayview_Phase-II---Pool-3_low-res_g4tz1m.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611209659/readestate/CRML_TRIDEL-GC_01_09_RC01_xf77lz.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611209659/readestate/CRML_TRIDEL-GC_01_09_RC01_xf77lz.jpg',
            thumbnailWidth: 600,
            thumbnailHeight: 253,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611209768/readestate/20200206_19054-Royal-Bayview_Phase-II---Suite-1217_Living-Room_Option1_LR_chjxoh.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611209768/readestate/20200206_19054-Royal-Bayview_Phase-II---Suite-1217_Living-Room_Option1_LR_chjxoh.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611209830/readestate/20200206_19054-Royal-Bayview_Phase-II---Suite-1121-Living-Room-02_LR_h5rztk.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611209830/readestate/20200206_19054-Royal-Bayview_Phase-II---Suite-1121-Living-Room-02_LR_h5rztk.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611210144/readestate/20200206_19054-Royal-Bayview_Phase-II---Amenity-Terrace_low-res_vnupjw.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611210144/readestate/20200206_19054-Royal-Bayview_Phase-II---Amenity-Terrace_low-res_vnupjw.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611210947/readestate/20200206_19054-Royal-Bayview_Phase-II---Card-Room_low-res_wmicbk.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611210947/readestate/20200206_19054-Royal-Bayview_Phase-II---Card-Room_low-res_wmicbk.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211183/readestate/20200219_19054-Royal-Bayview_Phase-II---Lobby-3_low-res_xwicjx.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211183/readestate/20200219_19054-Royal-Bayview_Phase-II---Lobby-3_low-res_xwicjx.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211356/readestate/RC09_edhgmz.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211356/readestate/RC09_edhgmz.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211470/readestate/RC07_a02_rvrpiz.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211470/readestate/RC07_a02_rvrpiz.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211549/readestate/RC13_a02_y5usly.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211549/readestate/RC13_a02_y5usly.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211598/readestate/RC12-Opc2_a02_yfdtv3.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211598/readestate/RC12-Opc2_a02_yfdtv3.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
        {
            src: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211665/readestate/CRML_TRIDEL-GC_01_09_RC01_1_bkngnt.jpg',
            thumbnail: 'https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611211665/readestate/CRML_TRIDEL-GC_01_09_RC01_1_bkngnt.jpg',
            thumbnailWidth: 380,
            thumbnailHeight: 243,
        },
    ]

const Gallary = () => {
    
    return (
        <>
            <Navigation2 />
            <Container style={{ marginTop: '5%', marginBottom: '28px' }}>
                <h2 className="text-center" style={{ marginBottom: '8px' }}>
                Image Gallary
                </h2>
            </Container>
            <section style={{ marginBottom: '55%' }}>
            <Gallery images={IMAGES}/>
            </section>
            <br />
            <br />
            <Contact />
        </>
    )
}

export default Gallary
