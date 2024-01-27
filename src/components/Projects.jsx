import React from 'react'
import '../css/Projects.css'
import SMA from '../Assets/Projects/Social Media App.png'
import AMA from '../Assets/Projects/Assign Mentor App.png'
import URL from '../Assets/Projects/URL Shortener App.png'
import PRF from '../Assets/Projects/Password Reset Flow.png'
import SC from '../Assets/Projects/Shopping Cart.png'
import LMS from '../Assets/Projects/Library Management.png'
import BLOG from '../Assets/Projects/Blog Page using Router.png'
import USERAPP from '../Assets/Projects/User APP using React Axios.png'
import APIFETCH from '../Assets/Projects/Using fetch API.png'
import { Link } from 'react-router-dom'


function Projects() {

    const projectList = [
        {
            projectName: 'Social Media App',
            image: SMA,
            Description: 'A simple Social Media App featuring user profiles, posts, likes, and comments. Connect with friends and share your thoughts in this interactive platform.',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/social-media-app-frontend',
                backEnd: 'https://github.com/Aswini-mca/social-media-app-backend'
            },
            NetlifyLink: 'https://steady-tulumba-e53b14.netlify.app/'
        },
        {
            projectName: 'Assign Mentor App',
            image: AMA,
            Description: 'Manage mentor-student relationships effortlessly with this app. Assign mentors to students for a streamlined educational experience.',
            GitLink: {
                frontEnd: ' https://github.com/Aswini-mca/react-assign-mentor',
                backEnd: 'https://github.com/Aswini-mca/assign-mentor'
            },
            NetlifyLink: 'https://dynamic-daffodil-2734f0.netlify.app/'
        },
        {
            projectName: 'URL Shortener App',
            image: URL,
            Description: 'Create short URLs for long links with this URL Shortener App. Simplify link sharing and tracking.',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/urlshortener-frontend',
                backEnd: 'https://github.com/Aswini-mca/urlshortener-backend'
            },
            NetlifyLink: 'https://cosmic-pudding-d7eb99.netlify.app/'
        },
        {
            projectName: 'Password Reset Flow',
            image: PRF,
            Description: 'Explore the password reset flow with this application. A user-friendly interface for demonstrating and testing password recovery processes.',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/password-reset-frontend',
                backEnd: 'https://github.com/Aswini-mca/password-reset'
            },
            NetlifyLink: 'https://playful-belekoy-0a8f26.netlify.app/'
        },
        {
            projectName: 'Shopping Cart App',
            image: SC,
            Description: 'Experience a simple shopping cart page with this application. Add products to your cart and explore the seamless shopping experience.',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/react-shopping-cart-task',
                backEnd: false
            },
            NetlifyLink: 'https://coruscating-hamster-b16b71.netlify.app/',
        },
        {
            projectName: 'Library Management',
            image: LMS,
            Description: 'Manage book and author records effortlessly with this Library Management app. Perform CRUD operations to keep your library organized.',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/react-formik-task/tree/main',
                backEnd: false
            },
            NetlifyLink: 'https://gleaming-marzipan-4d3ebe.netlify.app/'
        },
        {
            projectName: 'Blog Page',
            image: BLOG,
            Description: 'Explore a simple blog page created using React Router Dom. Navigate through different blog posts with ease.',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/react-formik-task/tree/main',
                backEnd: false
            },
            NetlifyLink: 'https://glowing-twilight-9f2380.netlify.app/'
        },
        {
            projectName: 'User App',
            image: USERAPP,
            Description: 'Fetch data from an API using Axios with this User App. Perform CRUD operations to add, edit, delete, and update user information.',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/react-axios-task',
                backEnd: false
            },
            NetlifyLink: 'https://guileless-monstera-78ae3c.netlify.app/'
        },
        {
            projectName: 'API Fetch',
            image: APIFETCH,
            Description: 'Using HTML, CSS, Javascript and Fetch function designed this User Interface',
            GitLink: {
                frontEnd: 'https://github.com/Aswini-mca/day2-promise-fetchAPI',
                backEnd: false
            },
            NetlifyLink: 'https://helpful-bubblegum-de61ca.netlify.app/'
        }
    ];

    const renderGitLink = (data) => {
        if (data.GitLink.backEnd === false) {
            return (
                <Link to={data.GitLink.frontEnd} className="card-link" target='_blank' rel='noreferrer' title='Source Code'><i className="fa-brands fa-github text-dark"></i></Link>
            )
        }
        else {
            return (
                <>
                    <Link to={data.GitLink.frontEnd} className="card-link" target='_blank' rel='noreferrer' title='Source Code FrontEnd'><i className="fa-brands fa-github text-dark"></i></Link>
                    <Link to={data.GitLink.backEnd} className="card-link" target='_blank' rel='noreferrer' title='Source Code BackEnd'><i className="fa-brands fa-github text-dark"></i></Link>
                </>
            )
        }
    }

    return (
        <div className='m-5'>
            <h2 className='container text-center p-4'>Projects</h2>
            <div className='project-container'>
                {projectList.map((data, index) => (
                    <div key={index} className='project-item card p-4 m-4' style={{ width: "20rem" }}>
                        <img src={data.image} className="project-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">{data.projectName}</h5>
                            <p className="card-text text-description">{data.Description}</p>
                        </div>
                        <div className="card-body">
                            {renderGitLink(data)}
                            <Link to={data.NetlifyLink} className="card-link" target='_blank' rel='noreferrer' title='View Project'>🌐<i className='cib-netlify'></i></Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects