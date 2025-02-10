import Image from 'next/image'
import best1 from '../../public/image/best1.jpg'
import best2 from '../../public/image/best2.jpg'
import best3 from '../../public/image/best3.jpg'
import best4 from '../../public/image/best4.jpg'
import best5 from '../../public/image/best5.jpg'
import best6 from '../../public/image/best6.jpg'
import { IoIosArrowForward } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'
export default function Featured() {
  return (
    <div className='my-5 container-sm mx-auto'>
      <h1>Top PlayLists</h1>
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
              <Image className='bestBoxBanner w-100' alt='best1' src={best1} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>moharam</p>
              <p style={{ color: 'gray' }}>
                <FiUser />
                148k
              </p>
            </div>

            <div className='flex-shrink-0 mx-3 '>
              <IoIosArrowForward
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={15}
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
              <Image className='bestBoxBanner w-100' alt='best2' src={best2} />
            </div>

            <div className='w-100 px-3 text-truncate'>
              <p>moharam</p>
              <p style={{ color: 'gray' }}>
                <FiUser />
                148k
              </p>
            </div>

            <div className='flex-shrink-0 mx-3 '>
              <IoIosArrowForward
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={15}
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
              <p>moharam</p>
              <p style={{ color: 'gray' }}>
                <FiUser />
                148k
              </p>
            </div>

            <div className='flex-shrink-0 mx-3 '>
              <IoIosArrowForward
                style={{
                  color: 'white',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
                size={15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
