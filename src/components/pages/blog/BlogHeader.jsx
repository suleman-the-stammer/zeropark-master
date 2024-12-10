import React from 'react'

// Antd :
import { Input } from 'antd'


// Assets | Icons | logo :
import Banner from '../../../assets/banners/blog-header.webp'

//css :
import './style/BlogHeader.scss'

function BlogHeader() {
  return (
    <div className='header'>
      <div className="container max-width max-width-md">
        <div className="content">
          <h1>Welcome to Zeropark blog</h1>
          <p>Stay in the news with all things commerce media</p>
          <div><Input placeholder='Search Articles ...' /></div>
        </div>
        <div className="bg">
          <img src={Banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BlogHeader