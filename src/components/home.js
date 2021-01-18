import React from 'react'
import githubLogo from '../img/github.png'

const Home = () => {
  return (
    <div className="py-20" style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
                    Welcome to the Warehouse app!
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
                    Find information about all our products here
        </h3>
        <h4 className="text-sm text-gray-200">
                    Follow us on GitHub
        </h4>

        <a href="https://github.com/sonyashbo/warehouse" className="py-1">
          <img src={githubLogo} className="w-12 h-12 mx-auto"></img>
        </a>
      </div>
    </div>
  )
}

export default Home