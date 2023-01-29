import { Link, useLoaderData, } from 'react-router-dom';



//-------add sector result-----//





const Result = () => {
    const profiles = useLoaderData();

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl btn-outline btn-accent">
                        <div className='text-center mt-5'><h1 className='font-bold'>Result</h1></div>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                {
                                    profiles.map(profile => <profile
                                        key={profile._id} >

                                        Name: {profile.name} <br />
                                        sector:  {profile.sector}<br />
                                        agree:  {profile.agree}<br />
                                        <Link to={`/update/${profile._id}`}>
                                            <button className="btn btn-primary btn-sm mt-4 mb-5">Update result</button>
                                        </Link>
                                    </profile>)}
                            </div>
                            <Link to="/" className='inline-flex' ><h3 className='underline underline-offset-4'>Click here</h3> <h3 className='ml-3'>go to the form page</h3> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
// ----------------------------------End------------------------------------// 