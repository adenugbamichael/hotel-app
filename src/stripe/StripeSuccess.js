import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { stripeSuccessRequest } from "../actions/stripe"
import { LoadingOutlined } from "@ant-design/icons"

const StripeSuccess = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {
    auth: { token },
  } = useSelector((state) => ({ ...state }))
  //   const { token } = auth

  useEffect(() => {
    // console.log("send this hotelid to backend to create order", params.hotelId)
    // //
    stripeSuccessRequest(token, params.hotelId).then((res) => {
      if (res.data.success) {
        // console.log("stripe success response", res.data)
        navigate("/dashboard")
      } else {
        navigate("/stripe/cancel")
      }
    })
  }, [navigate, params.hotelId, token])

  return (
    <div className='container'>
      <div className='d-flex justify-content-center p-5'>
        <LoadingOutlined className='display-1 text-danger p-5' />
      </div>
    </div>
  )
}

export default StripeSuccess
