import React from 'react'

const Register = () => {
  return (
    <div>

        <div className="container">
                <div className="row">
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Course Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        
                        
                        
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Fee</label>
                            <input type="number" className="form-control" />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Mode</label>
                            <input type="text" className="form-control" />
                        </div>


                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Trainer</label>
                            <input type="text" className="form-control" />
                        </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            
                        </div>


                        


                            


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>
    </div>
  )
}

export default Register