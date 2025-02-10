import Image from 'next/image'
import best1 from '../../public/image/best1.jpg'
import best2 from '../../public/image/best2.jpg'
import best3 from '../../public/image/best3.jpg'
import best4 from '../../public/image/best4.jpg'
import best5 from '../../public/image/best5.jpg'
import best6 from '../../public/image/best6.jpg'
import { BsPlayCircleFill } from 'react-icons/bs'
export default function Featured() {
  return (
    <div className='my-5 container-sm mx-auto'>
      <h1>Best Of Month</h1>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-2 '>
          <div className='bestBox'>
            <div
              style={{
                width: '70px',
                height: '70px',
                overflow: 'hidden',
                flexShrink: '0',
              }}
            >
              <Image className='bestBoxBanner w-100' alt='best2' src={best2} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>Khoshmigzare</p>
              <p style={{ color: 'gray' }}>mohammad Alizade</p>
            </div>

            <div className='flex-shrink-0 mx-3 mt-play-track'>
              <BsPlayCircleFill
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-2 '>
          <div className='bestBox'>
            <div
              style={{
                width: '70px',
                height: '70px',
                overflow: 'hidden',
                flexShrink: '0',
              }}
            >
              <Image className='bestBoxBanner w-100' alt='best1' src={best1} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>Khoshmigzare</p>
              <p style={{ color: 'gray' }}>mohammad Alizade</p>
            </div>

            <div className='flex-shrink-0 mx-3 mt-play-track'>
              <BsPlayCircleFill
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-2 '>
          <div className='bestBox'>
            <div
              style={{
                width: '70px',
                height: '70px',
                overflow: 'hidden',
                flexShrink: '0',
              }}
            >
              <Image className='bestBoxBanner w-100' alt='best3' src={best3} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>Khoshmigzare</p>
              <p style={{ color: 'gray' }}>mohammad Alizade</p>
            </div>

            <div className='flex-shrink-0 mx-3 mt-play-track'>
              <BsPlayCircleFill
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-2 '>
          <div className='bestBox'>
            <div
              style={{
                width: '70px',
                height: '70px',
                overflow: 'hidden',
                flexShrink: '0',
              }}
            >
              <Image className='bestBoxBanner w-100' alt='best4' src={best4} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>Khoshmigzare</p>
              <p style={{ color: 'gray' }}>mohammad Alizade</p>
            </div>

            <div className='flex-shrink-0 mx-3 mt-play-track'>
              <BsPlayCircleFill
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-2 '>
          <div className='bestBox'>
            <div
              style={{
                width: '70px',
                height: '70px',
                overflow: 'hidden',
                flexShrink: '0',
              }}
            >
              <Image className='bestBoxBanner w-100' alt='best5' src={best5} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>Khoshmigzare</p>
              <p style={{ color: 'gray' }}>mohammad Alizade</p>
            </div>

            <div className='flex-shrink-0 mx-3 mt-play-track'>
              <BsPlayCircleFill
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-2 '>
          <div className='bestBox'>
            <div
              style={{
                width: '70px',
                height: '70px',
                overflow: 'hidden',
                flexShrink: '0',
              }}
            >
              <Image className='bestBoxBanner w-100' alt='best6' src={best6} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>Khoshmigzare</p>
              <p style={{ color: 'gray' }}>mohammad Alizade</p>
            </div>

            <div className='flex-shrink-0 mx-3 mt-play-track'>
              <BsPlayCircleFill
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={35}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
