import { contentData, userComments } from "../../data/helper"
import Text from "./Text"

function CommentBox() {
    return (
        <div>
            <h1 className="text-3xl sm:text-5xl font-bold sm:mt-10 mb-2 sm:mb-6">Without Aura... <br />There could be hell to pay</h1>
            <Text margin={false} content={contentData} />


            {userComments.map(({ text, img }, index) => (
                <div className="flex flex-col sm:flex sm:flex-row sm:gap-4 items-center bg-[#efefef] p-4 sm:p-8 border border-gray-300 rounded-lg mb-4" key={index}>
                    <img className="w-20" src={img} alt="poster" />

                    <div key={index}>
                        <h1 className="text-[1.4rem] sm:text-[1.8rem] font-semibold">{text.heading}</h1>
                        {Array.isArray(text.content) && text.content.length > 0 ?
                            text.content.map((data, index) => (
                                <p key={index} className="text-lg sm:text-xl">{data}</p>
                            ))
                            : (
                                <p className="text-lg sm:text-xl">{text.content}</p>
                            )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentBox