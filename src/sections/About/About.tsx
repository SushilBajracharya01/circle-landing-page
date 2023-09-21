import { IValueProps } from "../../types";
import { OUR_VALUES } from "./_data";
import GroupImg from '../../assets/images/group.jpg';

export default function AboutSection() {
  return (
    <div id="about-us" className="grid lg:max-w-7xl mx-auto px-6 2xl:px-0 py-24 lg:py-32 lg:gird-col-12 bg-white">
      <div className="mx-auto container">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-20">
          <div className="lg:col-span-7 text-left">
            <p className="font-generic mt-2 text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
              About Us
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-800 max-w-3xl">
              At Circle, our journey began with a simple yet powerful idea: to create a social platform that's truly centered around people and their connections. We envisioned a space where the noise and distractions of traditional social media would fade away, leaving room for genuine interactions, trust, and community building.
            </p>
          </div>

          <div className="col-span-5 hidden lg:block">
            <img src={GroupImg} className="max-w-full" />
            <span className="opacity-60 text-primary-100">
              <a href="https://www.freepik.com/free-vector/portrait-young-employee-team_9650698.htm#query=group&position=5&from_view=search&track=sph">Image by pch.vector</a> on Freepik
            </span>
          </div>
        </div>

        <div className="my-12">
          <p className="font-generic mt-2 text-2xl font-bold tracking-tight text-primary-600 sm:text-3xl">
            Our Core Values
          </p>
          <p className="mt-2 mb-4 text-lg leading-8  text-gray-800 max-w-3xl">
            Circle is built upon a foundation of values that reflect what we hold dear:
          </p>

          <dl className="grid max-w-xl py-4 grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2 lg:gap-20">
            {OUR_VALUES.map((value: IValueProps) => (
              <div key={value.name} className="relative">
                <dt className="text-xl font-bold leading-7 text-gray-800">
                  {value.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-700">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}