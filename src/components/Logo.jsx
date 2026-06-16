
import MainLogo from '../assets/logo_1.svg';
import PropTypes from 'prop-types';

const Logo = ({invert=false}) => {
    return (
        <div className={`flex gap-3 items-center`}>
            <img src={MainLogo} className={`w-10 h-10 ${invert ? 'brightness-0 invert' : ''}`} />
            <h2 className='text-xl font-bold'> Rajesh Dawadi </h2>

        </div>
    )
}

export default Logo;


Logo.propTypes = {
    invert: PropTypes.bool,
};
