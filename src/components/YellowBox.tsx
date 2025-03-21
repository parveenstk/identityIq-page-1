
function Yellowbox({ content, className }: { content: string | string[], className?: string }) {

    return (
        <>
            <div className={`bg-[#fff643] border sm:p-5 text-2xl text-center my-1 sm:my-7 ${className}`}>
                {Array.isArray(content) && content.length ? (
                    content.map((text, index) => (
                        <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
                    ))
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </>


    )
}

export default Yellowbox