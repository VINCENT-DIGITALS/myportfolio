import React, { useState, useEffect } from 'react';
import Dashboard from './Home';
import About from './About';
import profilePic from '../Assets/MYPROFILE.png';
import clsuLogo from '../Assets/CLSU_logo.png';
import wesleyanLogo from '../Assets/WUPLOGO.png';
import manhsLogo from '../Assets/MANHSLOGO.png';
import macsLogo from '../Assets/MACSLOGO.png';
import SkillsProjects from "./Projects";
import { FaArrowUp } from 'react-icons/fa'; // Using react-icons for the "Scroll to Top" icon
import Contact from "./Contact";
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import CV_Macayanan from '../Assets/CV_Macayanan.pdf';

function Sections() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // Monitor scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const firstSection = document.getElementById('dashboard');
            if (firstSection) {
                const firstSectionBottom = firstSection.getBoundingClientRect().bottom;
                setShowScrollToTop(scrollPosition > firstSectionBottom);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const profileData = {
        name: "John Vincent Macayanan",
        title: "Aspiring Software Developer",
        description: "Driven by curiosity and a love for coding, feel free to check out my CV below for more details about my experience and qualifications.",
        cv: CV_Macayanan,
        cvName: "CV_Macayanan.pdf",
        image: profilePic,
    };
    const skills = [
        'HTML', 'CSS', 'PHP', 'C', 'JavaScript', 'React', 'Node.js', 'Flutter', 'Dart', 'Firebase',
        'Git', 'SQL', 'VSCode', 'Sublime', 'Android Studio', 'FlutterFlow', 'Canva', 'MS Suite'
    ];

    const projectList = [
        { name: 'CIPHER E-commerce App', description: 'Developed a functional e-commerce app, CIPHER, using FlutterFlow and Firebase.', link: 'https://github.com/VINCENT-DIGITALS/CIPHER' },
        { name: 'Firefly Movie Booking System', description: 'A PHP-based movie booking system with database integration using PHPMyAdmin.', link: 'https://github.com/VINCENT-DIGITALS/fireflix-movie-booking' },
        { name: 'Restaurant Website', description: 'A web-based project to display a restaurant menu and services.', link: 'https://vincent-digitals.github.io/grilldec-web/' },
        { name: 'Blog System', description: 'A blog system initially developed in PHP and later transitioned to Laravel, created as an activity and project.', link: 'https://github.com/VINCENT-DIGITALS/laravelBlog' },
        {
            name: 'BAYANi',
            description: 'An emergency response app for Science City of Muñoz, serving as a capstone project.',
            link: '',
            subProjects: [
                {
                    name: 'Citizen',
                    description: 'The Citizen module allows individuals to report emergencies quickly and efficiently, providing vital information for responders.',
                    link: 'https://github.com/VINCENT-DIGITALS/flutter-citizen'
                },
                {
                    name: 'Responder',
                    description: 'The Responder module enables emergency responders to view and manage reports, ensuring timely assistance.',
                    link: 'https://github.com/VINCENT-DIGITALS/BAYANi-Responder'
                },
                {
                    name: 'Operator',
                    description: 'The Operator module provides tools to monitor ongoing reports and manage the response process effectively.',
                    link: 'https://github.com/VINCENT-DIGITALS/flutter-operator'
                }
            ]

        }
    ];



    const educationList = [
        {
            name: 'Central Luzon State University',
            level: 'College',
            description: 'A state university in the Philippines, known for its excellence in agricultural sciences, research, and technology, contributing significantly to national development and innovation.',
            image: clsuLogo,
            link: 'https://clsu.edu.ph/',
        },
        {
            name: 'Wesleyan University-Philippines - Aurora Campus',
            level: 'Senior High',
            description: 'A private educational institution known for its strong academic programs and community involvement, providing quality education to students in the Aurora region.',
            image: wesleyanLogo,
            link: 'https://www.wesleyan.edu.ph/aurora-campus/',
        },
        {
            name: 'Maria Aurora National High School',
            level: 'Junior High',
            description: 'A public educational institution in Aurora, committed to providing quality secondary education and fostering student development through academic and extracurricular activities.',
            image: manhsLogo,
            link: 'https://www.facebook.com/p/Maria-Aurora-National-High-School-formerly-ANAS-100068269551921/?paipv=0&eav=Afb2QESQwpXlwcbmaJDM7i47mxcV41vILaUOV0aD4OIueadX-AM8lXw9fcpuHDApBMI&_rdr',
        },
        {
            name: 'Maria Aurora Central School',
            level: 'Elementary',
            description: 'A public elementary school in Aurora, dedicated to nurturing young learners with a strong foundation in academics, values, and holistic development.',
            image: macsLogo,
            link: 'https://www.facebook.com/MaAuroraCentralSchool/',
        },
    ];


    const contactDetails = [
        { icon: faEnvelope, link: "mailto:mac.jvincent@gmail.com", text: "mac.jvincent@gmail.com" },
        { icon: faMapMarkerAlt, link: "https://maps.app.goo.gl/VMMGSVBg1MFyren86", text: "Maria Aurora, Aurora" },
        { icon: faLinkedin, link: "https://www.linkedin.com/in/john-vincent-macayanan-024a03324/", text: "LinkedIn Profile" },
        { icon: faGithub, link: "https://github.com/VINCENT-DIGITALS", text: "GitHub Profile" },
        { icon: faFacebook, link: "https://www.facebook.com/Itsvincentlang/", text: "Facebook Profile" }
    ];
    return (
        <div className="dashboard-and-about">
            <section id="dashboard">
                <Dashboard profile={profileData} />
            </section>
            <section id="about">
                <About educationList={educationList} />
            </section>
            <section id='projects'>
                <SkillsProjects skills={skills} projectList={projectList} />
            </section>
            <section id='contact'>
                <Contact contactDetails={contactDetails} />
            </section>

            {showScrollToTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
}

export default Sections;
