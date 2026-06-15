
import SkillCard from '../components/SkillCard';
import VariableWeightText from '../components/VariableWeightText';

import Logo from '../assets/logo_1.svg';
import PythonIcon from '../assets/python-svgrepo-com.svg';
import JavascriptIcon from '../assets/icon-javscript.svg';
import GitIcon from '../assets/icon-git.svg';
import CppIcon from '../assets/icons8-c++.svg';
import Android from '../assets/android-svgrepo-com.svg';
import ReactIcon from '../assets/react-svgrepo-com.svg';
import KotlinIcon from '../assets/kotlin-svgrepo-com.svg';
import LinuxIcon from '../assets/linux-svgrepo-com.svg';
const Skills = () => {
    return (
        <section className=" flex flex-col gap-5 items-center px-0 lg:px-8 md:px-4 ">
            <VariableWeightText regulartxt="My" boldtxt="Skills"/>

                <div className='mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-2'>
                <SkillCard txt="Python" icon={PythonIcon}/>
                <SkillCard txt="Javascript" icon={JavascriptIcon}/>
                <SkillCard txt="Git" icon={GitIcon}/>
                <SkillCard txt="C++" icon={CppIcon}/>
                <SkillCard txt="Android" icon={Android}/>
                <SkillCard txt="React" icon={ReactIcon}/>
                <SkillCard txt="Linux" icon={LinuxIcon}/>
                <SkillCard txt="Kotlin" icon={KotlinIcon}/>
            </div>
        </section>
    )
};

export default Skills;
