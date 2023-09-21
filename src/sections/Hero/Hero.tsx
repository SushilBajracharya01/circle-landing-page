import FollowForm from "../../components/HeroFollowForm";

/**
 * 
 */
export default function HeroSection() {
    return (
        <section className="">
            <div className="grid relative lg:max-w-7xl py-36 mx-auto lg:gap-8 xl:gap-0 px-6 2xl:px-0 lg:py-52 lg:gird-col-12">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-18rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 rotate-[0deg] bg-gradient-to-tr from-[#f059f5] to-[#2284c6] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem] animate-pulse duration-[8000]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-10 text-4xl text-gray-800 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl font-generic">
                        Connect, Communicate, and Create with <span className="text-primary-600">Circle</span>
                    </h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-12 md:text-lg lg:text-xl font-asap">
                        A Hub for Socializing, Discussing Ideas, and Bringing Your Imagination to Life.
                    </p>

                    <p className="text-sm text-gray-600">Stay in the Loop: Follow Circle's Development.</p>
                    <FollowForm />
                </div>
            </div>
        </section>
    )
}