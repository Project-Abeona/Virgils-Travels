import React, { Component } from 'react'
import Footer from 'rc-footer'

import 'rc-footer/assets/index.css'
import '../static/css/Footer.css'

import fb_icon from '../static/images/fb_icon.png'
import twitter_icon from '../static/images/tw_icon.png'
import instagram_icon from '../static/images/ig_icon.png'

class FooterArea extends Component {
  render() {
    return (
        <Footer columns={[
            {
                title: 'About',
                items: [
                    {
                        title: 'About VT',
                        url: 'about',
                    },
                    {
                        title: 'Meet the Team',
                        url: 'team',
                    },
                    {
                        title: 'Documentation',
                        url: 'documentation',
                    },
                ]
            },
            {
                title: 'Help',
                items: [
                    {
                        title: 'Contact Us',
                        url: 'contact',
                    },
                    {
                        title: 'FAQ',
                        url: 'faq',
                    },
                    {
                        title: 'Accessibility',
                        url: 'a11y',
                    },
                ]
            },
            {
                title: 'Miscellaneous',
                items: [
                    {
                        title: 'Terms of Service',
                        url: 'tos',
                    },
                    {
                        title: 'Privacy',
                        url: 'privacy',
                    },
                    {
                        title: 'Cookies',
                        url: 'cookies',
                    },
                ]
            },
            {
                title: 'Social Media',
                items: [
                    {
                        icon: (<img
                            src={fb_icon}
                            alt="Facebook Icon"
                        />),
                        title: 'Facebook',
                        url: 'https://facebook.com/virgil.travels.12',
                        openExternal: true,
                    },
                    {
                        icon: (<img
                            src={twitter_icon}
                            alt="Twitter Icon"
                        />),
                        title: 'Twitter',
                        url: 'https://twitter.com/virgilstravels',
                        openExternal: true,
                    },
                    {
                        icon: (<img
                            src={instagram_icon}
                            alt="Instagram Icon"
                        />),
                        title: 'Instagram',
                        url: 'https://instagram.com/virgilstravels',
                        openExternal: true,
                    },
                ]
            }
        ]}
        bottom='❤️ Created by Team UTI ✈️'
        backgroundColor='#131313 !important'
        ></Footer>
    )
  }
}

export default FooterArea
