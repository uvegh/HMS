import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ResetPassword() {
    const baseUrl = "https://gavohms.onrender.com"
    const [isLoading, setIsloading] = useState(false)
    const [validate, setValidate] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [showPsswdVerification, setshowPsswdVerification] = useState(false)
    const [loginData, setLoginData] = useState({
        password1: "",
        password2:""

    })

  return (
<>

<div className="container-fluid position-relative vh-100 forgotPsswd-container " style={{ minHeight: "100%" }}>
<form className=' rounded-5 forgotPsswd-form border border-1  col-4  m-auto mt-5' >
                        <div className='col-10 m-auto mt-5'>
                            <label htmlFor="exampleFormControlInput1" className="form-label text-center fw-bolder fs-2 " style={{
                                color: "#2B415C"
                            }}>Reset your password</label>
                           
                           <div className=' m-auto'>
                      <label for="exampleFormControlInput1" className="form-label fw-bolder " style={{
                        color: "#000000"
                      }}>New Password</label>
                      <div className="form-floating mb-3">
                        <input type="email"
                          name="email"
                          value={loginData.email}
                          onChange={(e) => {
                            setLoginData({
                              ...loginData, password1: e.target.value

                            })
                          }}
                          className={validate==true&&!loginData.password1?(" form-control border border-danger "):("form-control")} id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Enter your new password</label>
                      </div>
                      {/* {validate == true && !loginData.email ? (<p className='text-danger'>*empty</p>) : (null)} */}
                    </div>


                    <div className=' m-auto'>
                      <label for="exampleFormControlInput1" className="form-label fw-bolder " style={{
                        color: "#000000"
                      }}>Confirm Password</label>
                      <div className="form-floating mb-3">
                        <input type="password"
                          name="password"
                          value={loginData.password2}
                          onChange={(e) => {
                            setLoginData({
                              ...loginData, password2: e.target.value
                            })

                          }}
                          className=  {validate==true&&!loginData.password2?(" form-control border border-danger "):("form-control")}  id="floatingInput" placeholder="****" />
                        <label for="floatingInput">Confirm your new password</label>
                    
                      </div>
                      {/* {validate == true && !loginData.password ? (<p className='text-danger'>*empty</p>) : (null)} */}
                      
                      <p className='text-danger'>c {errorMessage}</p>
                    </div>

                        </div>





                        <div className='text-center mt-2 mb-4 container d-flex justify-content-between col-11 '>
                            <button type='button'
                                onClick={() => {

                                    navigate(-1)
                                }}
                                className="btn btn-cancel btn-primary fs-3 btn-lg border-0 col-lg-5 col-md-5 col-sm-10  p-2" style={{ backgroundColor: " white", padding: " 0.2rem  3.5rem" }} >
                                Cancel
                            </button>

                            <button type='button'
                                onClick={() => {
                                    handleCodeVerification()
                                }}
                                className="btn btn-login btn-primary fs-3 btn-lg border-0 col-lg-5 col-md-5 col-sm-10 p-2" style={{ backgroundColor: " #2B415C", padding: " 0.2rem  3.5rem" }} >
                                Submit
                            </button>


                        </div>
                        <div className='text-center mt-2 container-fluid'>
                            <p className='text-danger ms-auto'>{errorMessage}</p>
                        </div>
                    </form>
</div>



</>
  )
}

export default ResetPassword