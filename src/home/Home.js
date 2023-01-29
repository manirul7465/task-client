import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const sectors = useLoaderData();
    const [sector, setSector] = useState({});
    const handleaddsector = event => {
        event.preventDefault();

        // ------------add to database sectors------------  //  

        fetch('http://localhost:5000/sectors', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sector)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('sector added successfully')
                    event.target.reset();
                }
            })

    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newSector = { ...sector }
        newSector[field] = value;
        setSector(newSector)


    }
    //----- add your name sector agree----// 

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleInputuser = (data, event) => {
        event.preventDefault();

        fetch('http://localhost:5000/profiles', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('new profile added successfully')

                }
            })
            .catch(err => console.error(err))
        reset();


    }

    return (
        <div >
            <div className="hero min-h-screen bg-base-200">
                {/* add sectors section */}

                <div className="hero-content flex-col ">
                    <form onSubmit={handleaddsector}>
                        <div className="text-center lg:text-left ">
                            <input onBlur={handleInputBlur} type="text" name='sector' placeholder="Type sector name" className="input input-bordered input-success w-full max-w-xs" required />
                            <button className="btn btn-outline btn-success mt-2" type='submit'>Add sector</button>
                        </div>
                    </form>

                    {/* add your name ,sector,agree part */}

                    <form onSubmit={handleSubmit(handleInputuser)}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register('name', {
                                        required: " please type your name "
                                    })} className="input input-bordered input-primary w-full max-w-xs" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                    <br />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sectors</span>
                                    </label>
                                    <div className="input-group">
                                        <select
                                            {...register('sector')}
                                            className="select select-bordered  input-primary">
                                            {
                                                sectors.map(sector => <option key={sector._id}
                                                    value={sector.name}
                                                >{sector.sector} </option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div >
                                    <label className='flex items-stretch'>
                                        <input
                                            value='yes'
                                            {...register("agree",
                                            )}
                                            type="checkbox"
                                            required

                                            className="checkbox checkbox-secondary" />
                                        <span className="label-text  ml-2">agree to terms</span>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit' >Save</button><br />                                    <Link to="/result" className='inline-flex' ><h3 className='underline underline-offset-4'>Click here</h3> <h3 className='ml-3'>to see the result</h3> </Link>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Home;
// ----------------------------------End------------------------------------// 