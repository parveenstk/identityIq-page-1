import { links, userReviwsData } from "../../data/helper"

function UserReviews() {
    return (

        <>
            <h1 className="text-4xl font-bold text-center py-10 w-full">What They’re Saying</h1>
            {userReviwsData.map((data, index) =>
                <div className="flex flex-col sm:flex sm:flex-row gap-6 items-center sm:py-8 sm:px-10 px-4 py-4 text-balance rounded-lg bg-[#ebf0fe] mb-6 border border-blue-200" key={index}>
                    {/* Left */}
                    <div className="w-auto flex flex-col items-center sm:flex">
                        {data.left.img.path && (<img className="w-30 rounded-md shadow-2xl" src={data.left.img.path} alt="user-Image" />)}
                        <h1 className="text-xl text-center font-semibold w-[9rem]">{data.left.text.heading}</h1>
                    </div>

                    {/* Right */}
                    <div className="sm:border-l-5 border-gray-600">
                        <h1 className="sm:pl-6 text-xl font-semibold">{data.right.text.heading}</h1>
                        <p className="sm:pl-6 text-balance text-xl">{data.right.text.content}</p>
                        <p className="sm:pl-6 text-[#ffba13] text-2xl">★★★★★</p>
                    </div>
                </div>)}

            
        </>
    )
}

export default UserReviews