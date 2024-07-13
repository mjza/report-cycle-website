import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Report Cycle - Empowering Communities with Seamless Issue Reporting
        </title>
        <meta
          name="description"
          content="Report Cycle is an innovative app that allows residents to report city issues effortlessly, track progress in real-time, and engage with their community. Join us in creating smarter, safer cities with transparent, data-driven solutions. Download now and make a difference today!"
        />
        <meta
          property="og:title"
          content="Report Cycle - Empowering Communities with Seamless Issue Reporting"
        />
        <meta
          property="og:description"
          content="Report Cycle is an innovative app that allows residents to report city issues effortlessly, track progress in real-time, and engage with their community. Join us in creating smarter, safer cities with transparent, data-driven solutions. Download now and make a difference today!"
        />
      </Helmet>
      <section className="home-hero">
        <header className="home-header">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/pastedimage-no9b-1500h.webp"
              srcSet="/pastedimage-no9b-1500h.webp 1200w, /pastedimage-no9b-tablet.webp 800w, /pastedimage-no9b-mobile.webp 480w"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <img
                    alt="RC"
                    src="/logos/logo-rc.svg"
                    className="home-logo1"
                  />
                </a>
                <div className="home-links1">
                  <span className="Link">About us</span>
                  <span className="home-text004 Link">How it works</span>
                  <span className="Link">Investment</span>
                  <span className="Link">Join us</span>
                </div>
              </div>
              <div className="home-right">
                <span className="home-sign-in Link">Contact Us</span>
                <a
                  href="https://myreport.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link01"
                >
                  <div className="home-get-started">
                    <span className="home-text007">Get started</span>
                  </div>
                </a>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container02">
              <React.Fragment>
                <Script defer={true}>{`
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
`}</Script>
              </React.Fragment>
            </div>
          </div>
        </header>
        <header className="home-content">
          <h1 className="home-text008">Let&apos;s the job get done!</h1>
          <p className="home-text009">
            Transforming the way cities handle public reports with ease and
            efficiency!
          </p>
          <a
            href="mailto:info@reportcycle.com?subject=Request a demo"
            className="home-link02"
          >
            <div className="home-request-a-demo">
              <span className="home-text010">Request a demo</span>
            </div>
          </a>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/ui/dashboard-1000h.webp"
              loading="lazy"
              srcSet="ui//dashboard-1000h.webp 1200w, ui/dashboard-tablet.webp 800w, ui/dashboard-mobile.webp 480w"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text011">Why using Report Cycle?</span>
          <span className="home-text012">RC powers are as follows</span>
        </div>
        <div className="home-cards">
          <div className="home-container03">
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.webp"
                className="home-icon02"
              />
              <span className="home-text013">Effortless Reporting</span>
              <span className="home-text014">
                Easily report city issues with a user-friendly interface. Snap a
                photo, provide details, and submit directly through the app.
              </span>
            </div>
            <div className="home-real-time-tracking card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.webp"
                className="home-icon03"
              />
              <span className="home-text015">
                <span>Real-Time Tracking</span>
                <br></br>
              </span>
              <span className="home-text018">
                <span>
                  Stay updated with real-time tracking of your report&apos;s
                  status. Get notified when issues are resolved.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container04">
            <div className="card home-data-drivem-insights">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.webp"
                className="home-icon04"
              />
              <span className="home-text021">Data-Driven Insights</span>
              <span className="home-text022">
                City officials can access comprehensive data insights to
                prioritize and address recurring issues effectively.
              </span>
            </div>
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.webp"
                className="home-icon05"
              />
              <span className="home-text023">Community Engagement</span>
              <span className="home-text024">
                Engage with your community by seeing and supporting reports made
                by others. Together, we make our city better.
              </span>
            </div>
          </div>
          <div className="home-container05">
            <div className="card home-data-drivem-insights1">
              <img
                alt="pastedImage"
                src="/secure-200h.webp"
                className="home-icon06"
              />
              <span className="home-text025">Secure and Private</span>
              <span className="home-text026">
                <span>
                  Your data is secure with us. We prioritize your privacy and
                  ensure your information is protected.
                </span>
                <br></br>
              </span>
            </div>
            <div className="card">
              <img
                alt="pastedImage"
                src="/ai-200h.webp"
                className="home-icon07"
              />
              <span className="home-text029">AI Powered</span>
              <span className="home-text030">
                <span className="home-text031">
                  AI is utelized for collecting and analyzing reports.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">
            “At Report Cycle, our mission is to empower communities with a
            seamless platform for reporting and resolving issues. We believe in
            the power of collaboration and transparency to create safer,
            cleaner, and more efficient urban environments.”
          </span>
          <div className="home-author">
            <img alt="image" src="/mahdi-200h.webp" className="home-avatar" />
            <span className="home-quote1">
              <span className="home-text034">—  Mahdi Ansari</span>
              <span>, Founder and CEO, Active</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container06">
          <ActiveUsers caption="— Active users" statistic="10K"></ActiveUsers>
          <ActiveUsers caption="— Service" statistic="724H"></ActiveUsers>
          <ActiveUsers
            caption="— Reports Managed"
            statistic="250K"
          ></ActiveUsers>
          <ActiveUsers caption="— Active Ads" statistic="30K"></ActiveUsers>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-empower-your-community">
          <div className="home-container07">
            <div className="home-left1">
              <span className="home-text036 title">Empower Your Community</span>
              <span className="home-text037">
                Spot issues? Report instantly with Report Cycle app! Whether
                it&apos;s damage in your neighborhood, suggestions for the
                advancement of a city, organizational flaws, or service
                complaints, share them privately with facility managers or
                publicly with the RC community. Your voice matters. Let&apos;s
                make it heard.
              </span>
              <a
                href="mailto:info@reportcycle.com?subject=Need to know more about RC"
                className="home-link03"
              >
                <div className="home-learn-more template-button">
                  <span className="home-text038">Learn more</span>
                </div>
              </a>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/Images/banner1-1200w.webp"
                srcSet="Images//banner1-1200w.webp 1200w, Images/banner1-tablet.webp 800w, Images/banner1-mobile.webp 480w"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-engage-with-organizations">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/Images/banner2-1200w.webp"
                srcSet="Images//banner2-1200w.webp 1200w, Images/banner2-tablet.webp 800w, Images/banner2-mobile.webp 480w"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <h2 className="home-text039 title">Engage With Organizations</h2>
              <span className="home-text040">
                Take action in your community with Report Cycle app. Vote on
                local issues, track their resolution, and stay informed by
                simply scanning QR codes on issue announcements. Your
                involvement can drive change. Start by keeping updated on the
                progress of reports in your neighborhood.
              </span>
              <a
                href="mailto:info@reportcycle.com?subject=Need to know more about RC"
                className="home-link04"
              >
                <div className="home-learn-more1 template-button">
                  <span className="home-text041">Learn more</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="home-banner-enhance-citizen-satisfaction">
          <div className="home-container08">
            <div className="home-left2">
              <h2 className="home-text042 title">
                Enhance Citizen Satisfaction
              </h2>
              <span className="home-text043">
                Report Cycle app is designed with happiness in mind. As a smart
                city solution, it not only facilitates efficient issue reporting
                and monitoring but also rewards engaged citizens with perks from
                local institutions. Report, monitor, and get rewarded. Join our
                community of responsible citizens.
              </span>
              <a
                href="mailto:info@reportcycle.com?subject=Need to know more about RC"
                className="home-link05"
              >
                <div className="home-learn-more2 template-button">
                  <span className="home-text044">Learn more</span>
                </div>
              </a>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/Images/banner3-1200w.webp"
                srcSet="Images//banner3-1200w.webp 1200w, Images/banner3-tablet.webp 800w, Images/banner3-mobile.webp 480w"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-engage-with-organizations1">
          <div className="home-centered-container1">
            <div className="home-image-container3">
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/Images/banner4-1200w.webp"
                srcSet="Images//banner4-1200w.webp 1200w, Images/banner4-tablet.webp 800w, Images/banner4-mobile.webp 480w"
                className="home-cards-image3"
              />
            </div>
            <div className="home-right2">
              <h2 className="home-text045 title">Stay Updated Locally</h2>
              <span className="home-text046">
                Keep your finger on the pulse of your city with MyReportApp.
                More than just a report management tool, our app supports local
                businesses by offering a platform for eco-friendly and digital
                advertising. Stay informed and engaged with everything happening
                around you.
              </span>
              <a
                href="mailto:info@reportcycle.com?subject=Need to know more about RC"
                className="home-link06"
              >
                <div className="home-learn-more3 template-button">
                  <span className="home-text047">Learn more</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container2">
          <div className="home-heading">
            <span className="sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text050">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container09">
                <YouTube></YouTube>
                <YouTube pastedImageSrc="/logos/group%201012-200h.webp"></YouTube>
                <YouTube pastedImageSrc="/logos/layer1-200h.webp"></YouTube>
                <YouTube pastedImageSrc="/logos/group-200h.webp"></YouTube>
              </div>
              <div className="home-container10">
                <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.webp"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201014-200h.webp"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201015-200h.webp"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201017-200h.webp"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container3">
          <div className="home-heading1">
            <span className="home-text051">How it works</span>
            <span className="home-text052 title">
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className="home-category">
            <div className="home-headng">
              <span className="home-text053">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text054">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started1 template-button">
                <span className="home-text055">Get started</span>
              </div>
            </div>
            <div className="home-container11">
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/pastedimage-k5xi%201-1200w.webp"
                srcSet="/pastedimage-k5xi%201-1200w.webp 1200w, /pastedimage-k5xi%201-tablet.webp 800w, /pastedimage-k5xi%201-mobile.webp 480w"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category1">
              <div className="home-headng1">
                <span className="home-text056">2 — Act</span>
                <span className="home-text057">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/pastedimage-ibg-1200w.webp"
                srcSet="/pastedimage-ibg-1200w.webp 1200w, /pastedimage-ibg-tablet.webp 800w, /pastedimage-ibg-mobile.webp 480w"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category2">
              <div className="home-headng2">
                <span className="home-text058">2 — Act</span>
                <span className="home-text059">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/pastedimage-3c4o-1200w.webp"
                srcSet="/pastedimage-3c4o-1200w.webp 1200w, /pastedimage-3c4o-tablet.webp 800w, /pastedimage-3c4o-mobile.webp 480w"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div className="home-centered-container4">
          <div className="home-heading2">
            <span className="home-text060 title">
              Pricing for all kind of businesses
            </span>
            <span className="home-text061">
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className="home-selection">
              <span className="home-text062">Monthly</span>
              <span className="home-text063">Yearly</span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text064">Free</span>
              <span className="home-text065">
                Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doliqua.
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text066">Start for free</span>
              </div>
              <span className="home-text067">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text068">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text069">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text070">Pay as you go</span>
              <span className="home-text071">
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text075">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text078">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text079">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text080">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text081">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text082">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text083">Enterprise</span>
              <span className="home-text084">
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text087">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text090">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text091">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text092">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text093">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon26"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text094">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left3">
          <span className="home-text095">Testimonals</span>
          <span className="home-text096 title">
            What people say about MyReport App
          </span>
        </div>
        <div className="home-right3">
          <div className="home-column">
            <Testimonal
              quote="&quot;The app's UI is intuitive, making it easy to report issues quickly.”"
              avatarSrc="/image552912-e3yq-200h.webp"
            ></Testimonal>
            <Testimonal
              from="Social Club"
              name="Jessica Smith"
              quote="“I love seeing and supporting reports from others in my community.”"
              avatarSrc="/image312912-mvsg-200h.webp"
            ></Testimonal>
            <Testimonal
              from="Daily Commuter"
              name="Logan Boy"
              quote='"I reported a pothole in the morning, and by the afternoon, the city had already addressed it. Truly impressive!"'
              avatarSrc="/image502912-6wy-200h.webp"
            ></Testimonal>
            <Testimonal
              from="Resident"
              name="Laraine Summers"
              quote="“I love how easy it is to report problems and see them resolved. It's great to know my voice is heard and makes a difference.”"
              avatarSrc="/image202912-zekh-200h.webp"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              from="Resident"
              name="William McPau"
              quote='"The app&apos;s transparency in tracking report statuses builds trust between the community and the city administration."'
              avatarSrc="/image572912-0d3-200h.webp"
            ></Testimonal>
            <Testimonal
              from="Community Volunteer"
              name="Mariah Mae"
              quote='"Report Cycle gives us a voice in maintaining our community. It&apos;s gratifying to see our reports lead to real action."'
              avatarSrc="/image632913-swij-200h.webp"
            ></Testimonal>
            <Testimonal
              from="City Manager"
              name="John Finati"
              quote='"Report Cycle has transformed how we handle city maintenance issues. The real-time tracking and updates ensure nothing falls through the cracks.”'
              avatarSrc="/image102913-x4z8-200h.webp"
            ></Testimonal>
            <Testimonal
              from="Public Works Director"
              name="Mary Pau"
              quote="&quot;The data insights feature helps us prioritize and address the most critical issues efficiently. It's an invaluable tool for city officials.”"
              avatarSrc="/image562913-ycff-200h.webp"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text097">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading3">
            <span className="home-text100 title">
              Would you like to support your city?
            </span>
            <span className="home-text101">
              Start using MyReportApp right now!
            </span>
            <a
              href="https://myreport.app"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07"
            >
              <div className="home-get-started5 template-button">
                <span className="home-text102">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
          <div className="home-images">
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/Images/banner0-1200w.webp"
              srcSet="Images//banner0-1200w.webp 1200w, Images/banner0-tablet.webp 800w, Images/banner0-mobile.webp 480w"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading4">
          <span className="home-text105 title">Frequently asked questions</span>
          <span className="home-text106">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text107">
                — What is Report Cycle?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text108">
                Report Cycle is a mobile app designed to help residents report
                city issues easily and track their resolution in real-time.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text109">— How do I report an issue?</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text110">
                Open the app, tap the &quot;Report&quot; button, snap or upload
                a photo, provide a brief description and location, and submit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text111">
                — Can I track the progress of my report?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text112">
                Yes, you will receive real-time notifications and can view
                updates within the app.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text113">
                — Is my data secure?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text114">
                Absolutely. We prioritize your privacy and employ robust
                security measures to protect your data.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text115">
                — Can I see reports from other users?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text116">
                Yes, you can explore and support reports submitted by others in
                your community.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header6">
              <span className="home-text117">
                — How do city officials use the app?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text118">
                City officials access comprehensive data insights to prioritize
                and address issues efficiently.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header7">
              <span className="home-text119">— Is the app free to use?</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text120">
                Yes, Report Cycle is free for end-users.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header8">
              <span className="home-text121">— How do I get started?</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text122">
                <span>
                  Download the Report Cycle app from your app store or visit our
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://myreport.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link08"
                >
                  webapp
                </a>
                <span>
                  , create an account, and start reporting issues in your
                  community.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container13">
            <React.Fragment>
              <Script>{`
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
`}</Script>
            </React.Fragment>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-top1">
            <span className="home-text125">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text126">Subscribe</span>
              </div>
            </div>
            <span className="home-text127">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="home-contact">
              <span className="home-text128">Contact</span>
              <a
                href="mailto:info@reportcycle.com?subject=Support"
                className="home-link09"
              >
                info@reportcycle.com
              </a>
            </div>
          </div>
          <div className="home-bottom">
            <div className="home-category3">
              <span className="home-text129">Solutions</span>
              <div className="home-links2">
                <span className="home-text130">Responsive Web Design</span>
                <span className="home-text131">Responsive Prototypesv</span>
                <span className="home-text132">Design to Code</span>
                <span className="home-text133">Static Website Builder</span>
                <span className="home-text134">Static Website Generator</span>
              </div>
            </div>
            <div className="home-category4">
              <span className="home-text135">Company</span>
              <div className="home-links3">
                <span className="home-text136">About</span>
                <span className="home-text137">Team</span>
                <span className="home-text138">News</span>
                <span className="home-text139">Partners</span>
                <span className="home-text140">Careers</span>
                <span className="home-text141">Press &amp; Media</span>
              </div>
            </div>
            <div className="home-category5">
              <span className="home-text142">Solutions</span>
              <div className="home-links4">
                <span className="home-text143">Twitter</span>
                <span className="home-text144">Linkedin</span>
                <span className="home-text145">Crunchbase</span>
                <span className="home-text146">Instagram</span>
                <span className="home-text147">Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom1">
          <img alt="RC" src="/logos/logo-rc.svg" className="home-branding" />
          <span className="home-text148">
            <span className="home-text149">
              Copyright © Report Cycle - 2024
            </span>
            <br></br>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
