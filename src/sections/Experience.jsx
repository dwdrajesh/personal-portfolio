

import ExperienceCard from '../components/ExperienceCard';
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

const experienceData = [
    {title: 'Software Developer', company: 'Meta Platforms Inc.', dateRange: '10/2023 - Present',
        desc: [
            'Worked on Applied AI Engineering to improve Meta-internal model',
            'Experience with features development related to real-time communication applications for voice and video calling (Augmented Reality Communication platform),',
            'Troubleshooting and debugging issues seen on various devices on the communication stack',
            'Programming experience in C++, Kotlin, Javascript'
        ]
    },
    {title: 'Software Developer', company: 'Cisco Systems', dateRange: '02/2020 - 10/2023',
        desc: [
            'Network software developer working on Cisco Data Center family of switch products (N7000, N9000) based on the Nexus Operating System',
            'Experience with leading features development and troubleshooting related to networking protocols as part of the BGP development team.',
            'Knowledge of various network virtualization overlay technologies, such as VxLAN, MP-BGP EVPN, Segment Routing v6 (SRv6), etc',
            'Programming experience in C/C++, Python'
        ]
    },
    {title: 'Software Developer', company: 'Ericsson', dateRange: '10/2017 - 02/2020',
        desc: [
            'Worked on embedded radio software development for Ericsson 4G/5G wireless products',
            'Worked on Linux Device Driver for power management module',
            'Familiarity with W-CDMA, LTE, ORAN, worked on Self-Test framework',
            'Debugged and fixed customer issues relating to various radio products'
        ]
    },
    {title: 'Embedded Software Designer', company: 'Evertz Microsystems', dateRange: '1/2017 - 9/2017',
        desc: [
            'Worked on device driver development in C/C++ for 10G SFP, video/audio broadcasting and networking products',
            'Developed and maintained applications for adding/monitoring ethernet, SFP network bridge on video hub',
            'Porting various features (DHCP, Syslog, LLDP) on audio/video routers.',
            'Experience using stack trace and memory analyzer tools like gdb, valgrind'
        ]
    },
    {title: 'LTE Systems Engineer', company: 'Reliance Jio Infocomm Limited, Mumbai, India', dateRange: '6/2012 - 4/2014',
        desc: [
            'Worked as a system engineer on LTE specifications, performed TD-LTE eNodeB protocol level validation & advanced features testing',
            'Conducted Rf Planning on the LTE network',
            'Performed Voice over LTE, Self-optimizing networks (SON), Load balancing testing'
        ]
    },
];

const Experience = () => {
    return (
        <section id="experience" className=" rounded-lg customShadow flex flex-col gap-5 items-center px-0 lg:px-8 md:px-4 bg-brand-600 text-black">
            <VariableWeightText regulartxt="My" boldtxt="Experience"/>

                <div className=' flex flex-col gap-5'>
                    {
                        experienceData.map((exp) => (
                            <ExperienceCard key={exp.title} title={exp.title} comp={exp.company} dateRange={exp.dateRange} desc={exp.desc}/>
                        ))
                    }
            </div>
        </section>
    )
};

export default Experience;
