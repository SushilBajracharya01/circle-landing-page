import Icon from "../../components/Icon/Icon";
import { IFeature } from "../../types";
import { FEATURES } from "./_data";

export default function FeaturesSection() {
    return (
        <div id="features" className="bg-primary-50 py-24 sm:p-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="font-generic mt-2 text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
                        Discover Key Features
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-800">
                        Circle offers a host of innovative features designed to enhance your social experience, whether you're connecting with friends, family, or colleagues.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-16">
                        {FEATURES.map((feature: IFeature) => (
                            <div key={feature.name} className="bg-white relative sm:pl-20 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="flex items-center justify-center sm:static mb-3 sm:mb-0">
                                        <div className="sm:absolute left-4 top-4 flex h-16 w-16 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary-600">
                                            <Icon title={feature.icon} className="h-8 sm:h-6 w-8 sm:w-6 text-white" />
                                        </div>
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-700">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}