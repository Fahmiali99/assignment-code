import React from 'react'

const BadgeStatus = (props) => {
    const {status} = props;
    return (
        <div className="text-white ">
            {status === false && (<span className=" bg-blue-500 dark:bg-blue-700 rounded-md p-1.5 px-5">Plan</span>)}
            {status === true && (<span className=" bg-purple-500 dark:bg-purple-700 rounded-md p-1.5 px-5">Finish</span>)}
        </div>
    )
}

export default BadgeStatus;