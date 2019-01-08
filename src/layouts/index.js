import '../output.css'
import 'typeface-roboto-slab'
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
      <div className={`p-3 flex justify-center`}>
        <div className={`max-w-md`}>
          <div className={`py-3 flex justify-center`}>{header}</div>
          {children()}
          <h4 className="text-black text-sm text-center">
            <span>See my work at </span>
            <a className={`no-underline`} href="https://egghead.io">
              egghead.io
            </a>
          </h4>
        </div>
      </div>
    )
  }
}

export default Template
