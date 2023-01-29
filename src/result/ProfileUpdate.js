import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

//-------- update your profile------// 


const ProfileUpdate = () => {
    const storedProfile = useLoaderData();
    const [profile, setProfile] = useState(storedProfile);
    const handleUpdateProfile = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/update/${storedProfile._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('profile updated')

                }

            })
    }

    const handleInputchange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProfile = { ...profile }
        newProfile[field] = value;
        setProfile(newProfile);
    }
    return (
        <div>
            <form onSubmit={handleUpdateProfile}>
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl btn-outline btn-accent">
                            <div className='text-center mt-5'><h1 className='font-bold'>Update</h1></div>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input onChange={handleInputchange} type="text" name="name" defaultValue={storedProfile.name} className="input input-bordered input-success w-full max-w-xs" />
                                    <label className="label">
                                        <span className="label-text">sector</span>
                                    </label>
                                    <input onChange={handleInputchange} type="text" name="sector" defaultValue={storedProfile.sector} className="input input-bordered input-success w-full max-w-xs" />
                                    <label className="label">
                                        <span className="label-text">Agree</span>
                                    </label>
                                    <input onChange={handleInputchange} type="text" name="agree" defaultValue={storedProfile.agree} className="input input-bordered input-success w-full max-w-xs" />
                                    <button className="btn btn-sm btn-primary mt-3" type='submit' >update profile</button>
                                    <Link to="/result" className='inline-flex' ><h3 className='underline underline-offset-4'>Click here</h3> <h3 className='ml-3'>to see the result</h3> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileUpdate;
// ----------------------------------End------------------------------------// 