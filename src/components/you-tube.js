import React from 'react'

import PropTypes from 'prop-types'

import './you-tube.css'

const YouTube = (props) => {
  return (
    <div className={`you-tube-you-tube ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="you-tube-icon">
        <path
          d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
          className=""
        ></path>
      </svg>
      <h1 className="you-tube-text">{props.heading}</h1>
    </div>
  )
}

YouTube.defaultProps = {
  rootClassName: '',
  text: 'Express Interest',
  heading: 'Express Interest',
}

YouTube.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default YouTube
