import React from 'react'

function Card({ data }) {
    return (

        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
                    <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
                    <hr></hr>
                    <ul className="fa-ul">

                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.plan==="PLUS"||data.plan==="PRO"?<b>{data.user}</b>: data.user}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.storage}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.projects}</li>
                        <li className={data.accessenable ? "" : "text-muted"}><span className="fa-li"><i className={data.accessenable ? "fas fa-check" : "fas fa-times"}></i></span>{data.access}</li>
                        <li className={data.supportenable ? "" : "text-muted"}><span className="fa-li"><i className={data.supportenable ? "fas fa-check" : "fas fa-times"}></i></span>{data.support}</li>
                        <li className={data.subdomainenable ? "" : "text-muted"}><span className="fa-li"><i className={data.subdomainenable ? "fas fa-check" : "fas fa-times"}></i></span>{data.plan==="PRO"?<><b>Unlimited </b>{data.subdomain}</>: data.subdomain}</li>
                        <li className={data.reportenable ? "" : "text-muted"}><span className="fa-li"><i className={data.reportenable ? "fas fa-check" : "fas fa-times"}></i></span>{data.report}</li>
                 

                </ul>
                <div className="d-grid">
                    <a href='javascript(void)' className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
      </div > 
  
  )
}

export default Card
