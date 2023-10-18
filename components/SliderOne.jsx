import React from 'react'
import Swiper from 'react-id-swiper'

function SliderOne() {

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return (
    <section className='slider-area'>
      <div className='homepage-slide1'>
        <Swiper {...params}>
          <div className='single-slide-item slide-bg1'>
            <div className='slide-item-table'>
              <div className='slide-item-tablecell'>

              </div>
            </div>
          </div>
          <div className='single-slide-item slide-bg2'>
            <div className='slide-item-table'>
              <div className='slide-item-tablecell'>
                <div className='container'>

                </div>
              </div>
            </div>
          </div>
          <div className='single-slide-item slide-bg3'>
            <div className='slide-item-table'>
              <div className='slide-item-tablecell'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-7'>
                      <div className='slider-heading'>
                        <p className='slider__meta'>
                          INTERNATIONAL SYMPOSIUM FOR
                        </p>  <p className='slider__meta'>
                        ENVIRONMENTAL SCIENCE AND
                      </p>  <p className='slider__meta'>
                        ENGINEERING RESEARCH 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='single-slide-item slide-bg4'>
            <div className='slide-item-table'>
              <div className='slide-item-tablecell'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-7'>
                      <div className='slider-heading'>
                        <p className='slider__meta'>
                          INTERNATIONAL SYMPOSIUM FOR
                        </p>  <p className='slider__meta'>
                        ENVIRONMENTAL SCIENCE AND
                      </p>  <p className='slider__meta'>
                        ENGINEERING RESEARCH 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='single-slide-item slide-bg5'>
            <div className='slide-item-table'>
              <div className='slide-item-tablecell'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-7'>
                      <div className='slider-heading'>
                        <p className='slider__meta'>
                          INTERNATIONAL SYMPOSIUM FOR
                        </p>  <p className='slider__meta'>
                        ENVIRONMENTAL SCIENCE AND
                      </p>  <p className='slider__meta'>
                        ENGINEERING RESEARCH 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='single-slide-item slide-bg6'>
            <div className='slide-item-table'>
              <div className='slide-item-tablecell'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-7'>
                      <div className='slider-heading'>
                        <p className='slider__meta'>
                          INTERNATIONAL SYMPOSIUM FOR
                        </p>  <p className='slider__meta'>
                        ENVIRONMENTAL SCIENCE AND
                      </p>  <p className='slider__meta'>
                        ENGINEERING RESEARCH 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default SliderOne
