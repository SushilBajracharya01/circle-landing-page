import ContactForm from "../../components/ContactForm";

//
import ContactImg from '../../assets/images/3969587.jpg';

/**
 * 
 */
export default function ContactSection() {
    return (
        <div id="contact" className="bg-primary-50">
            <div className="grid lg:max-w-7xl mx-auto px-6 2xl:px-0 py-24 lg:py-32 lg:gird-col-12 bg-primary-50">
                <div className="grid grid-cols-12 lg:gap-5">
                    <div className="hidden lg:col-span-6 lg:flex items-center">
                        <img src={ContactImg} className="max-w-[500px] max-h-[500px] overflow-hidden rounded-full object-cover" />
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <h2 className="font-generic text-4xl font-bold mb-1 text-gray-900">Let's Connect</h2>
                        <p className="mb-8 text-gray-500">
                            Reach out and let's start a conversation today!
                        </p>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}