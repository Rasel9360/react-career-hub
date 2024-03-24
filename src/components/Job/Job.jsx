import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo,job_title, company_name,remote_or_onsite,location,job_type,salary,} = job
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="text-xl">{company_name}</p>
                        <div>
                            <button className="btn btn-outline text-[#7E90FE] font-extrabold mr-5">{remote_or_onsite}</button>
                            <button className="btn btn-outline text-[#7E90FE] font-extrabold">{job_type}</button>
                        </div>
                    <div className="flex gap-2 text-xl">
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;