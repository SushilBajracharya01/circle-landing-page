export default function FooterSection() {
    return (
        <div className="">
            <div className="lg:max-w-7xl mx-auto px-6 2xl:px-0 py-10 lg:py-12 flex justify-center items-center">
                <div className="text-center">
                    <h3 className="text-lg text-gray-800 font-generic font-bold mb-2" >Circle</h3>
                    <p className="text-sm text-gray-800">© {new Date().getFullYear()} Circle. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}