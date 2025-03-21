import { reviewData } from "../data/helper"

function Review() {
    return (
        <section>
            <h1 className="font-bold text-3xl sm:text-5xl text-center mb-3 sm:mb-8">What They’re Saying</h1>


            {Object.values(reviewData).map((data, index) => (
                <main key={index} className="flex flex-col sm:flex-row sm:gap-1 items-center bg-[#ebf0fe] p-4 border-2 border-blue-200 rounded-md mb-2 sm:mb-4">
                    {/* Left Side */}
                    <div className="flex flex-col items-center justify-center w-1/4 mb-2 sm:mb-0 sm:h-40">
                        <div>
                            {data.Leftside.img && <div className="flex justify-center">
                                <img src={data.Leftside.img} className="rounded-md" alt="User-profile" width={110} />
                            </div>}
                            <h1 className="font-semibold text-xl sm:text-2xl text-center text-nowrap sm:text-wrap">{data.Leftside.title}</h1>
                            <p className="text-lg text-center leading-5.5">{data.Leftside.text}</p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="sm:border-l-5 sm:w-3/4 text-center sm:text-left border-[#484041] sm:pl-6 leading-7" >
                        <h1 className="font-semibold text-lg sm:text-2xl">{data.Rightside.title}</h1>
                        <p className="leading-5 sm:leading-[34px] text-[17px] sm:text-[22px] sm:text-balance">
                            {data.Rightside.text}
                        </p>
                        <p className="text-[#fcc100] text-[26px] tracking-tighter">★★★★★</p>
                    </div>
                </main >
            ))}
        </section >
    )
}

export default Review