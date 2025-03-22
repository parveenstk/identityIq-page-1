import axios from "axios";
import { useEffect, useState } from "react";
import { boxData, data } from "../../data/helper";
import CommentBox from "./CommentBox";
import ExtraText from "./ExtraText";
import Table from "./Table";
import Text from "./Text";
import YellowBox from "./YellowBox";
import GuaranteeBox from "./GuaranteeBox";
import UserReviews from "./UserReviews";
import GuaranteeTag from "./GuaranteeTag";

interface TextContent { title: string | string[], style?: string; content: string | string[] }

function Body() {
    const [textContent, setTextContent] = useState<TextContent[]>([{
        title: '',
        style: '',
        content: '',
    }])
    useEffect(() => {
        axios('/data.json').then(result => setTextContent(result.data));
    }, [])

    return (
        <div className="text-center sm:text-start">
            <div className="flex justify-center gap-6">
                <div>
                    <img src="./images/0.webp" alt="Poster-0" className="object-cover" loading="eager" width={'855'} height={'557'} />
                    <p className="bg-zinc-200 text-[12px] md:text-lg p-1 sm:p-2 text-center block-inline">"It ruined my life and took me forever to recover. Never thought it would happen to me..."</p>
                </div>
            </div>
            <div>
                <Text className="mt-2 sm:mt-8 sm:mb-20 mb-6 text-center sm:text-start" content={data.para0} />

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/1.webp" alt="poster-1" className="w-full sm:w-1/2 h-auto" loading="eager" height={'414'} width={'256'} />
                    <Text className="sm:w-1/2" content={data.para1} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box1} />

                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <Text className="sm:w-1/2" content={data.para2} />
                    <img src="/images/2.webp" alt="poster-2" className="w-full sm:w-1/2 h-auto" height={'442'} width={'fit'} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box2} />


                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/3.webp" alt="poster-3" className="w-full sm:w-1/2 h-auto" height={'442'} width={'fit'} />
                    <Text className="sm:w-1/2" content={data.para3} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box3} />

                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <Text className="sm:w-1/2" content={data.para4} />
                    <img src="/images/4.webp" alt="poster-4" className="w-full sm:w-1/2 h-auto" height={'442'} width={'fit'} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box4} />

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/5.webp" alt="poster-5" className="w-full sm:w-1/2 h-auto" height={'442'} width={'fit'} />
                    <Text className="sm:w-1/2" content={data.para5} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box5} />

                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <Text className="sm:w-1/2" content={data.para6} />
                    <img src="/images/6.webp" alt="poster-6" className="w-full sm:w-1/2 h-auto" height={'442'} width={'fit'} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box6} />

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start">
                    <img src="/images/7.webp" alt="poster-7" className="w-full sm:w-1/2 h-auto" height={'442'} width={'fit'} />
                    <Text className="sm:w-1/2" content={data.para7} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box7} />

                <div className="flex-col-reverse sm:flex-row flex gap-6 text-center md:text-start">
                    <Text className="sm:w-1/2" content={data.para8} />
                    <img src="/images/8.webp" alt="poster-8" className="w-full sm:w-1/2 h-auto" height={'442'} width={'fit'} />
                </div>
                <YellowBox className="w-full grid sm:block place-content-center" content={boxData.box8} />

                <div className="flex-col sm:flex-row flex gap-6 text-center md:text-start mb-4 sm:mb-16">
                    <img src="/images/9.webp" alt="poster-9" className="w-full sm:w-1/2 h-100" height={'442'} width={'fit'} />
                    <Text className="sm:w-1/2" content={data.para9} />
                </div>
                {Object.values(textContent).map((text, index) => (
                    <ExtraText key={index} data={text} />
                ))}
                <Table />
                <CommentBox />
                <GuaranteeBox className="py-4" />
                <UserReviews />
                <GuaranteeBox className="py-4" />
                <GuaranteeTag />
                <GuaranteeBox className="py-4" />
            </div>

        </div>
    )
}

export default Body