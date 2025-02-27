import React, { useState } from 'react'
import "../style/ApplicationForm.css"

const ApplicationForm = ({ settingFormType }) => {
    const [formType, setformType] = useState(settingFormType || "asthmaticStudent")
    return (
        <div className='applicationForm'>
            <form action="" >
                <h1>Application Form</h1>
                {
                    formType == "asthmaticStudent" ?
                        <div className='inputWrapper'>
                            <div className="inputContainer">
                                <div>
                                    <label htmlFor="name">Your Full Name</label>
                                    <input type="text" placeholder='Type here' name="name" id="name" required />
                                </div>
                                <div>
                                    <label htmlFor="Address">Address</label>
                                    <input type="text" placeholder='Type here' name="Address" id="Address" required />
                                </div>
                            </div>
                            <div className="inputContainer">
                                <div>
                                    <label htmlFor="phone">Your Phone Number</label>
                                    <input type="tel" placeholder='Type here' name="phone" id="phone" required />
                                </div>
                                <div>
                                    <label htmlFor="phone">Additional Information</label>
                                    <input type="text" placeholder='Type here' name="phone" id="phone" required />
                                </div>
                            </div>
                        </div>
                        : formType == "volunteer" ?
                            <>
                                <div className='inputWrapper'>
                                    <div className="inputContainer">
                                        <div>
                                            <label htmlFor="name">Your Full Name</label>
                                            <input type="text" placeholder='Type here' name="name" id="name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="phone">Your Phone Number</label>
                                            <input type="tel" placeholder='Type here' name="phone" id="phone" required />
                                        </div>
                                    </div>
                                    <div className="inputContainer">
                                        <div>
                                            <label htmlFor="email">Your Email Address</label>
                                            <input type="email" placeholder='Type here' name="email" id="email" required />
                                        </div>
                                        <div>
                                            <label htmlFor="Availability">Availability</label>
                                            <select name="Availability" id="Availability" required >
                                                <option value="">Type here</option>
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                                <option value="Weekends">Weekends</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='MessageSubject'>
                                    <label htmlFor="Message Subject">Message Subject</label>
                                    <textarea name="Message Subject" id="Message Subject" placeholder='Type here' required ></textarea>
                                </div>
                            </>
                            : null
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ApplicationForm
