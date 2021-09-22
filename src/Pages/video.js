import React from 'react'
import '../styles/pages.css'
import video from '../Images/kulgu 1Video_Img.png'
import leftPg from '../Images/VectorLeft_Pagination.svg'
import rightPg from '../Images/VectorRight_Pagination.svg'



const Video = () => {
  return (
    <>
      <div className="row">
        <div className="video_top">
          <span>Video</span> <input type="text" placeholder="Search" />
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="col-lg-3">
        <div className="video_center">
            <div><div><img src={video} alt="video" /></div></div>
            <div><p>30 апр. 2021 г.</p></div>
            <div><h4>MILLION JAMOASI KONSERT DASTURI 2019</h4></div>
          </div>
        </div>
        <div className="video_pagination">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item left">
                <a class="page-link" href="#!" aria-label="Previous">
                  <span aria-hidden="true"><img src={leftPg} alt="lefy" /></span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#!">1</a></li>
              <li class="page-item"><a class="page-link" href="#!">2</a></li>
              <li class="page-item"><a class="page-link" href="#!">3</a></li>
              <li class="page-item"><a class="page-link" href="#!">4</a></li>
              <li class="page-item"><a class="page-link" href="#!">5</a></li>
              <li class="page-item left">
                <a class="page-link" href="#!" aria-label="Next">
                  <span aria-hidden="true"><img src={rightPg} alt="lefy" /></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Video
