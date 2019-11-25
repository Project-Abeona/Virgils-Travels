import React, { Component } from 'react'
import Footer from 'rc-footer'
import 'rc-footer/assets/index.css'

class FooterArea extends Component {
  render() {
    return (
        <Footer columns={[
            {
                title: 'Social Media',
                items: [
                    {
                        title: 'Facebook',
                        url: 'facebook.com',
                        openExternal: true,
                    },
                    {
                        title: 'Instagram',
                        url: 'instagram.com',
                        openExternal: true,
                    },
                    {
                        title: 'Twitter',
                        url: 'twitter.com',
                        openExternal: true,
                    },
                ]
            },
            {
                title: 'Important Links',
                items: [
                    {
                        title: 'FAQ',
                        url: '/',
                        openExternal: true,
                    },
                    {
                        title: 'Meet the Team',
                        url: '/',
                        openExternal: true,
                    },
                    {
                        title: 'About',
                        url: '/',
                        openExternal: true,
                    },
                ]
            },
            {
                title: 'Social Media',
                items: [
                    {
                        title: 'Facebook',
                        url: 'facebook.com',
                        openExternal: true,
                    },
                    {
                        title: 'Instagram',
                        url: 'instagram.com',
                        openExternal: true,
                    },
                    {
                        title: 'Twitter',
                        url: 'twitter.com',
                        openExternal: true,
                        description: 'Description'
                    },
                ]
            },
            {
                title: 'Important Links',
                items: [
                    {
                        title: 'FAQ',
                        url: '/',
                        openExternal: true,
                    },
                    {
                        title: 'Meet the Team',
                        url: '/',
                        openExternal: true,
                    },
                    {
                        title: 'About',
                        url: '/',
                        openExternal: true,
                    },
                ]
            }
        ]}
        bottom='🛫 Created by Team Late 🛬'
        backgroundColor='#131313'
        ></Footer>
    )
  }
}

export default FooterArea
