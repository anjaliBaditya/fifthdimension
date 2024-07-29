
import { Icon } from '@iconify/react'; 
import React from 'react';
import { Link } from 'react-router-dom';
const addressDataList = [
  'A Mumbai based comapany providing service PAN India',
  '+91 9082443659',
  'info@fifthdimensionweb.xyz',
];
const serviceMenuList = [
  {
    title: 'WP Development',
    href: '/contact',
  },
  {
    title: 'UX Research',
    href: '/contact',
  },
  {
    title: 'Branding Design',
    href: '/contact',
  },
  {
    title: 'Front-End Development',
    href: '/contact',
  },
  {
    title: 'Graphics Design',
    href: '/contact',
  },
  {
    title: 'Ad Promotion',
    href: '/contact',
  },
];
const LinksMenuList = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/',
  },
  {
    title: 'Services',
    href: '/service',
  },
  {
    title: 'Portfolio',
    href: 'https://arnabbhowmik.me/',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
const policyMenuList = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];
const socialBtnList = [
  {
    icon: 'fa6-brands:linkedin-in',
    href: 'https://www.linkedin.com/in/bhowmikarnab/',
  },
  {
    icon: 'fa6-brands:instagram',
    href: 'https://www.instagram.com/the_arnab_bhowmik',
  },
  {
    icon: 'fa6-brands:chrome',
    href: 'https://arnabbhowmik.me/',
  },
  {
    icon: 'fa6-brands:github',
    href: 'https://github.com/arnab-afk/',
  },
];
export default function Footer() {
  return (
    <footer
      className="cs_fooer cs_bg_filed"
      style={{ backgroundImage: 'url(/images/footer_bg.jpeg)' }}
    >
      <div className="cs_fooer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <div className="cs_text_widget">
                  <img src="/images/logo3.svg" alt="Logo" />
                </div>
                <ul className="cs_menu_widget cs_mp0">
                  {addressDataList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Services</h2>
                <ul className="cs_menu_widget cs_mp0">
                  {serviceMenuList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Links</h2>
                <ul className="cs_menu_widget cs_mp0">
                  {LinksMenuList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs_footer_item">
                <h2 className="cs_widget_title">Subscribe Newsletter </h2>
                <div className="cs_newsletter cs_style_1">
                  <div className="cs_newsletter_text">
                    We make sure to only send emails that are noteworthy and
                    pertinent to the recipient.
                  </div>
                  <form action="#" className="cs_newsletter_form">
                    <input
                      type="email"
                      className="cs_newsletter_input"
                      placeholder="Email address"
                    />
                    <button className="cs_btn cs_style_1">
                      Submit
                      <span>
                        <i>
                          <Icon icon="fa6-solid:arrow-right" />
                        </i>
                        <i>
                          <Icon icon="fa6-solid:arrow-right" />
                        </i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left">
            <div className="cs_social_btns cs_style_1">
              {socialBtnList.map((item, index) => (
                <Link to={item.href} className="cs_center" key={index}>
                  <Icon icon={item.icon} />
                </Link>
              ))}
            </div>
          </div>
          <div className="cs_copyright">Copyright © 2024 Arnab Bhowmik.</div>
          <div className="cs_bottom_footer_right">
            <ul className="cs_footer_links cs_mp0">
              {policyMenuList.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
