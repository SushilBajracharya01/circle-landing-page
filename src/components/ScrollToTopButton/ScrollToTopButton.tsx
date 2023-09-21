import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'

/**
 * 
 */
export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className={`fixed w-fit right-[5%] bottom-24 h-5 text-6xl z-10 transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} duration-700`}>
            <FaArrowCircleUp onClick={scrollToTop} className={`inline transition opacity-10 hover:opacity-90 hover:scale-110 origin-center duration-100 ease-in-out active:scale-90`} />
        </button>
    )
}