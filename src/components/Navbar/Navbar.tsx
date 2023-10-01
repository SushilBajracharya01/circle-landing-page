import { useState } from 'react';
import { Dialog } from '@headlessui/react';


import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

/**
 * 
 */
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between 2xl:px-0 px-6 py-6" aria-label="Global">
                <span className="flex lg:flex-1">
                    <span className="sr-only">Circle</span>
                    <span className="font-bold text-lg">Circle</span>
                </span>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="/#features" className="transition-color font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        Features
                    </a>
                    <a href="/#about-us" className="transition-color font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        About us
                    </a>
                    <a href="/#contact" className="transition-color font-semibold leading-6 text-gray-900 hover:text-gray-700">
                        Contact
                    </a>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <span className="sr-only">Circle</span>
                            <span className="font-bold text-lg">Circle</span>
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <AiOutlineClose className="h-7 w-7" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="/#features"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Features
                                </a>
                                <a
                                    href="/#about-us"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About us
                                </a>
                                <a
                                    href="/#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}