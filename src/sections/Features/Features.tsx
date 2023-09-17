import Icon from "../../components/Icon/Icon";
import { IFeature } from "../../types";
import { FEATURES } from "./_data";

export default function FeaturesSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="font-heading mt-2 text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
                        Discover Key Features
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Circle offers a host of innovative features designed to enhance your social experience, whether you're connecting with friends, family, or colleagues.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {FEATURES.map((feature: IFeature) => (
                            <div key={feature.name} className="relative pl-16 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                                        <Icon title={feature.icon} className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}