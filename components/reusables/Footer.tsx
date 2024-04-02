import React from 'react'

const Footer = () => {
  return (
    <div className="bg-primary py-10">
      <div className="flex items-center justify-center gap-5">
        <i className="bi bi-facebook cursor-pointer"></i>
        <i className="bi bi-instagram cursor-pointer"></i>
        <i className="bi bi-linkedin cursor-pointer"></i>
        <i className="bi bi-twitter cursor-pointer"></i>
      </div>
      <p className="text-xl font-bold text-center">Follow us on our social platform</p>
    </div>
  )
}

export default Footer