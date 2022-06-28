import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { stripeSuccessRequest } from "../actions/stripe"

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
  }, [params.hotelId])

  return (
    <div className='container'>
      <div className='col'>
        <h2 className='text-center p-5'>Payment success. {params.hotelId}</h2>
      </div>
    </div>
  )
}

export default StripeSuccess
