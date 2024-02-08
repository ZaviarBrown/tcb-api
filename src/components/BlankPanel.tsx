export default function BlankPanel() {
    return (
        <div className="w-full h-screen flex flex-col animate-pulse gap-2 bg-white justify-around">
            <div className="flex w-full h-1/3">
                <div className="w-3/5 bg-black cp-1 my-5 ml-3" />
                <div className="w-2/5 bg-black cp-2 my-5 ml-3 mr-3" />
            </div>
            <div className="flex w-full h-1/2">
                <div className="w-2/5 relative -top-20 bg-black cp-3 my-5 ml-3" />
                <div className="w-3/5 relative -top-24 bg-black cp-4 my-5 ml-3 mr-3" />
            </div>
            <div className="flex w-full h-1/3">
                <div className="w-2/5 relative h-full -top-36 bg-black cp-5 my-5 ml-3" />
                <div className="w-3/5 relative h-full -top-32 bg-black my-5 ml-3 mr-3" />
            </div>
        </div>
    );
}
