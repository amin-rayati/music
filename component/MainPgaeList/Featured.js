import Image from 'next/image'
import banner1 from '../../public/image/banner1.jpg'
import banner2 from '../../public/image/banner2.jpg'
import banner3 from '../../public/image/banner3.jpg'
import banner4 from '../../public/image/banner4.jpg'
import banner5 from '../../public/image/banner5.jpg'
import banner6 from '../../public/image/banner6.jpg'
import { BsPlayCircleFill } from 'react-icons/bs'
export default function Featured() {
  return (
    <div className='my-5 container-sm mx-auto'>
      <h1>Featured</h1>
      <div className='row'>
        <div className='col-lg-2 col-md-4 col-sm-4 col-6 my-2'>
          <Image className='banner w-100' alt='banner1' src={banner1} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-4 col-6 my-2'>
          <Image className='banner w-100' alt='banner2' src={banner2} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-4 col-6 my-2'>
          <Image className='banner w-100' alt='banner3' src={banner3} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-4 col-6 my-2'>
          <Image className='banner w-100' alt='banner4' src={banner4} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-4 col-6 my-2'>
          <Image className='banner w-100' alt='banner5' src={banner5} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-4 col-6 my-2'>
          <Image className='banner w-100' alt='banner6' src={banner6} />
          <div className='d-flex mt-3' style={{ alignItems: 'center' }}>
            <div>
              <BsPlayCircleFill
                className='mt-play-track'
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
            <div>
              <p>Tunnel episode 10</p>
              <p>
                podcast by <span style={{ color: 'gray' }}>Dj Leo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
