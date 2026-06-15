
import Logo from '../components/Logo';
import Button from '../components/Button';
import DownloadIcon from '../assets/download.svg';

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <Logo />
            <Button txt='Resume' icon={DownloadIcon}/>
        </header>
    )
}

export default Header;
