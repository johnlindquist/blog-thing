import 'tailwindcss/dist/tailwind.css'
import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link className={`no-underline`} to={'/'}>
            johnlindquist.com
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link className={`no-underline`} to={'/'}>
            johnlindquist.com
          </Link>
        </h3>
      )
    }
    return (
      <div className={`py-3 flex justify-center`}>
        <div className={`max-w-md`}>
          <div className={`py-3 flex justify-center`}>{header}</div>
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
