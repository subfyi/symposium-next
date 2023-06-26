import React, { Component } from 'react'
import Link from 'next/link'

class NavOne extends Component {
  constructor() {
    super()
    this.state = {
      sticky: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    //Mobile Menu
    this.mobileMenu()
  }

  handleScroll = () => {

    if (window.scrollY > 100) {
      this.setState({
        sticky: false
      })
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false
      })
    }

  }

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector('.mobile-menu-toggle')
    let mainNav = document.querySelector('.side-nav-container')

    mainNavToggler.addEventListener('click', function() {
      mainNav.classList.add('active')
    })

    //Close Mobile Menu
    let closeMenu = document.querySelector('.side-menu-close')
    closeMenu.addEventListener('click', function() {
      mainNav.classList.remove('active')
    })

  }

  render() {
    return (
      <div>
        <header className='header-area'>
          <div className='header-top-action'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-5'>
                  <div className='top-action-content'>
                    <div className='info-box info-box-1 d-flex align-items-center'>
                      <ul className='d-flex align-items-center'>
                        <li><a href='mailto:iseser@iseser.com'><i
                          className='fa fa-envelope'></i>iseser@iseser.com</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='top-action-content info-action-content'>
                    <div className='info-box info-box-2 d-flex align-items-center justify-content-end'>
                      <ul className='top-action-list d-flex align-items-center'>
                        <li className='action__text'><Link href='/documents-all'>Archives</Link></li>
                        <li className='action__text'><a href='https://portal.iseser.com/login'>login</a></li>
                        <li className='action__text'><a href='https://portal.iseser.com/register'>register</a></li>
                        <li><a target='_blank' href='https://www.facebook.com/isesercom/'><i className='fa fa-facebook'></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
            <div className='container'>
              <div className='row ostion-top-wrap'>
                <div className='col-lg-5 col-sm-5 site-branding'>
                  <div className='logo-action d-flex align-items-center'>
                    <div className='ostion-logo'>
                      <Link href='/'>
                        <img src='/images/v6_telifsiz-300x72.png' alt='Oxpitan' title='Oxpitan' />
                      </Link>
                    </div>
                    <div className='header-btn ml-auto'>
                      <a className='theme-btn' href='https://portal.iseser.com/'>
                        User Area
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-7 col-sm-7 ostion-menu'>
                  <div className='ostion-menu-innner'>
                    <div className='ostion-menu-content'>
                      <div className='navigation-top'>
                        <nav className='main-navigation'>
                          <ul>
                            <li className='active'><Link href='/'>Home</Link>
                            </li>
                            <li><a href='#'>Comittiees</a>
                              <ul className='dropdown-menu-item'>
                                <li><Link href='/honorary-committee'>Honorary Committee</Link></li>
                                <li><Link href='/organization-committee'>Organization Committee</Link></li>
                                <li><Link href='/science-commission'>Scientific Board</Link></li>
                                <li><Link href='/adviser-commission'>Advisory Board</Link></li>
                              </ul>
                            </li>
                            <li><a href='#'>General Information</a>
                              <ul className='dropdown-menu-item'>
                                <li><Link href='/invitation'>Invitation</Link></li>
                                <li><Link href='/threads'>Topics</Link></li>
                                <li><Link href='/important-dates'>Important Dates</Link></li>
                                <li><Link href='/documents'>Documents</Link></li>
                                <li><Link href='/sponsors'>Sponsors</Link></li>
                              </ul>
                            </li>
                            <li><Link href='/conference-fee'>Symposium Fee</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className='mobile-menu-toggle'>
                      <i className='fa fa-bars'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='side-nav-container'>
            <div className='humburger-menu'>
              <div className='humburger-menu-lines side-menu-close'></div>
            </div>
            <div className='side-menu-wrap'>
              <ul className='side-menu-ul'>
                <li className='sidenav__item'><Link href='/'>Home</Link>
                </li>
                <li className='sidenav__item'><Link href='#'>Comittiees</Link>
                  <span className='menu-plus-icon'></span>
                  <ul className='side-sub-menu'>
                    <li><Link href='/honorary-committee'>Honorary Committee</Link></li>
                    <li><Link href='/organization-committee'>Organization Committee</Link></li>
                    <li><Link href='/science-commission'>Scientific Board</Link></li>
                    <li><Link href='/adviser-commission'>Advisory Board</Link></li>
                  </ul>
                </li>
                <li className='sidenav__item'><Link href='#'>General Information</Link>
                  <span className='menu-plus-icon'></span>
                  <ul className='side-sub-menu'>
                    <li><Link href='/invitation'>Invitation</Link></li>
                    <li><Link href='/threads'>Topics</Link></li>
                    <li><Link href='/important-dates'>Important Dates</Link></li>
                    <li><Link href='/documents'>Documents</Link></li>
                    <li><Link href='/sponsors'>Sponsors</Link></li>
                  </ul>
                </li>
                <li className='sidenav__item'><Link href='/conference-fee'>Symposium Fee</Link>
                </li>
                <li className='sidenav__item'><Link href='/contact'>contact</Link></li>
              </ul>
              <ul className='side-social'>

                <li className='action__text'><Link href='/documents-all'>Archives</Link></li>
                <li className='action__text'><a href='https://portal.iseser.com/auth/login'>login</a></li>
                <li className='action__text'><a href='https://portal.iseser.com/auth/registration'>register</a></li>
                <li><a target='_blank' href='https://www.facebook.com/isesercom/'><i className='fa fa-facebook'></i></a></li>

              </ul>
              <div className='side-btn'>
                <Link className='theme-btn' href='/documents'>Documents</Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default NavOne
