import React from 'react'
import 'tailwindcss/dist/tailwind.css'

class Bio extends React.Component {
  render() {
    return (
      <div className="rounded rounded-t-lg my-3">
        <div className="flex justify-center">
          <img
            src="https://secure.gravatar.com/avatar/d548043ced5a2887057b6138302c8d65?s=100"
            className="rounded-full border-solid border-white border-2"
          />
        </div>
        <div className="text-center">
          <h3 className="text-black text-sm bold">John Lindquist</h3>
          <p className="font-light text-grey-dark">You are awesome 🏆</p>
        </div>
      </div>
    )
  }
}

export default Bio
