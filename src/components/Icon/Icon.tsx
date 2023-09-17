import { FaUser } from 'react-icons/fa';
import { BiSolidUserVoice } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { HiMiniChatBubbleLeftRight } from 'react-icons/hi2';
import { BsRecordCircleFill, BsFillChatLeftTextFill } from 'react-icons/bs';

import { IIconProps } from '../../types';


function Icon({ title, className }: IIconProps) {
    let element = null;
    switch (title) {
        case 'BsRecordCircleFill':
            element = <BsRecordCircleFill aria-hidden="true" className={className} />
            break;
        case 'HiMiniChatBubbleLeftRight':
            element = <HiMiniChatBubbleLeftRight aria-hidden="true" className={className} />
            break;
        case 'BsFillChatLeftTextFill':
            element = <BsFillChatLeftTextFill aria-hidden="true" className={className} />
            break;
        case 'IoIosNotifications':
            element = <IoIosNotifications aria-hidden="true" className={className} />
            break;
        case 'BiSolidUserVoice':
            element = <BiSolidUserVoice aria-hidden="true" className={className} />
            break;
        case 'FaUser':
            element = <FaUser aria-hidden="true" className={className} />
            break;
        default:

    }
    return element;

}

export default Icon