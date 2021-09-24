import React from 'react'
import '../styles/pages.css'

import video1 from '../Images/kulgu 1Video_Img.png'
import video from '../Images/Group 41089videoimg.png'
import blacklike from '../Images/thumb_up_black_24dp 1blackLike.svg'
import dislike from '../Images/thumb_down_black_24dp 1blackdisliek.svg'
import life from '../Images/favoriteblacklive.svg'
import share from '../Images/replyshare.svg'
import userFoto from '../Images/Ellipse 677UserFoto.svg'




const VideoInfo = () => {


  return (
    <>
      <div className="video_top">
          <span>Video</span> <input type="text" placeholder="Search" />
      </div>
      <div className="row info_video_1">
        <div className="col-lg-9">
          <div className="video">
            <div><img src={video} alt="video" /></div>
            <div style={{marginTop: '15px'}}><span>Pewdiepie new setup studio 2021</span></div>
            <div className="share"><img src={blacklike} alt="blacklike"/><span>318</span> <img src={dislike} alt="dislike" /> <span>18</span> <img src={life} alt="life" /> <span>Keyinroq ko’ring</span> <img src={share} alt="share" /> <span>Ulashish</span> </div>
            <div className="comments">
              <h6>Izohlar</h6>
              <div style={{display:'flex',alignItems: 'center'}}> <div><img src={userFoto} alt="userFoto" /></div> <input type="text" placeholder="Izohlar" /> </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="video_center">
            <div><div><img src={video1} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
          <div className="video_center">
            <div><div><img src={video1} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
          <div className="video_center">
            <div><div><img src={video1} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoInfo
