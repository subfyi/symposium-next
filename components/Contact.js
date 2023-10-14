import React from 'react'
import Link from 'next/link'
import { Alert } from 'reactstrap'

const Contact = () => {
  return (
    <section className='contact-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-heading'>
              <h2 className='section__title'>CONTACT</h2>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='section-heading'>
              <p className='section__meta'>Conference Venue</p>
              <div className='section__desc'>
                ISESER2023 which will be held on 18-21 October 2023,
                {' '}<a href='https://goo.gl/maps/6EQn8jKhP6jBHHp49' target='_blank'>
                <b>Engineering Faculty, Necmettin Erbakan University</b></a>, Konya, Türkiye.
                <ul>
                  <li>
                    <strong>Registration</strong>: 18th October, Wednesday.
                  </li>
                  <li>
                    <strong>Opening Ceremony</strong>: 19th October, Thursday 10:00
                  </li>
                  <li>
                    <strong>Presentation and Poster Presentations will be available</strong>: 19-21 October 2023
                  </li>
                </ul>
                <p>
                  <strong>Adress:</strong> Engineering Faculty, Necmettin Erbakan University, Konya, Türkiye.
                </p>

                <p>If you have any question please send an e-mail to{' '}<a
                  href='mailto:iseser@iseser.com'><span>iseser@iseser.com</span></a>; <a
                  href='mailto:sdursun@ktun.edu.tr'><span>sdursun@ktun.edu.tr</span></a>; <a
                  href='mailto:fkunt@erbakan.edu.tr'><span>fkunt@erbakan.edu.tr</span></a>

                </p>
                <p>You can contact us by phone number for emergencies. </p>
                <ul>
                  <li>Şükrü Dursun (whatsapp): <a href='tel:+905365954591'>+905365954591</a></li>
                  <li>Şükrü Dursun (Office): <a href='tel:+905365954591'>+903322051559</a></li>
                  <li>Fatma Kunt (whatsapp): <a href='tel:+905412481558'>+905412481558</a></li>
                </ul>
                <p>For technical issues. </p>
                <ul>
                  <li>Yasin Akın Ayturan (whatsapp): <a href='tel:+905365954591'>+905548675660</a></li>
                </ul>
                <hr />
                <Alert color={'info'}>
                  The <a href={'https://www.dergahotel.com/dergah-hotel.html'}>Dergah Hotel</a>, one of the accommodation <Link href={'/sponsors'}>sponsor</Link>, will apply a 15% discount on the
                  official price when attending with the name "iseser".
                </Alert>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50395.87651685187!2d32.34300514863279!3d37.86632019999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d086c1ed0d8dbf%3A0xfca395272489a499!2sNecmettin%20Erbakan%20%C3%9Cniversitesi%20M%C3%BChendislik%20Ve%20Mimarl%C4%B1k%20Fak%C3%BCltesi%2C%20Deme%C3%A7%20Sokak%2C%20Meram%2FKonya%2C%20Turkey!5e0!3m2!1str!2str!4v1687774090900!5m2!1str!2str'
              className='map' allowFullScreen>
            </iframe>
          </div>
          <style jsx>{`
            .map {
              border: 0;
              width: 100%;
              height: 100%
            }
          `}</style>
        </div>

      </div>
    </section>
  )
}
export default Contact
