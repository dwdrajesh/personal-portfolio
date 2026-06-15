
// import ButtonImg from '../assets/download.svg';
import PropTypes from 'prop-types';

const Button = ({txt, icon}) => {
    return (
        <div className="flex gap-3 items-center">
            <button className='rounded px-5 py-4 flex gap-2 items-center text-white bg-black hover:bg-neutral-700'>
                {txt}
                <img src={icon} className='w-5 h-5'/>
                </button>



        </div>
    )
}

export default Button;


Button.propTypes = {
    txt: PropTypes.string.isRequired,
}
