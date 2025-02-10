import Image from 'next/image'
import googleplay from '../../public/image/googleplay.png'
import appstore from '../../public/image/appstore.png'
export default function Footer() {
  return (
    <div className='container-sm mb-3'>
      <div className='row ' style={{ justifyContent: 'center' }}>
        <div className='col-6'>
          <ul className='list-inline text-center'>
            <li className='list-inline-item'>
              <Image
                className='banner w-100'
                alt='googlePlay'
                src={googleplay}
              />
            </li>
            <li className='list-inline-item'>
              <Image className='banner w-100' alt='appStore' src={appstore} />
            </li>
          </ul>
          <ul className='list-inline text-center my-3'>
            <li className='list-inline-item'>
              <p href='https://mrtehran.com/app'>Applications</p>
            </li>
            <li className='list-inline-item'>
              <p href='https://www.instagram.com/mrtehran' target='_blank'>
                Instagram
              </p>
            </li>
            <li className='list-inline-item'>
              <p
                href='mailto:mrtehranmusic@gmail.com?Subject=Hello%20MrTehran'
                target='_top'
              >
                Contact US
              </p>
            </li>
            <li className='list-inline-item'>
              <p href='https://mrtehran.com/help'>FAQ &amp; Help</p>
            </li>
            <li className='list-inline-item'>
              <p href='https://mrtehran.com/privacy'>Privacy Policy</p>
            </li>
            <li className='list-inline-item'>
              <p href='https://mrtehran.com/terms'>Terms of Service</p>
            </li>
          </ul>
          <p class='font-weight-light mt-opacity-50 text-center mb-0 pb-0'>
            <small>
              © 2022 mrtehran.com All Rights Reserved. Persian Music Service
              24/7
            </small>
          </p>
          <p class='font-weight-light mt-opacity-50 text-center'>
            <small>MrTehran's website is registered in samandehi.ir.</small>
          </p>
        </div>
      </div>
    </div>
  )
}
