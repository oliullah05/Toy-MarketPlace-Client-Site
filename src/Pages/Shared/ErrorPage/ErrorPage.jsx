import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='max-w-md text-center'>
                    <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=826&t=st=1683282786~exp=1683283386~hmac=dc45f0762b9fc1aaf1664b9e29e7ee8d32267695b74230d7e121823f5d6d4272' alt="404" />
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-blue-500 text-white'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage