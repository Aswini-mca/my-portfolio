import myPic from '../Assets/Aswini-pic.jpeg';
import '../css/Home.css'
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <div className='p-5'>
                <div className='home-container mt-5'>
                    <Link className='no-hover' to='https://drive.google.com/file/d/1UuuOhIClphXZJI1RzoU_DtBx9WNSbFDe/view?usp=sharing'
                        target='_blank' title={'Resume ⬇️'} rel='noreferrer'><img id='home-img' src={myPic} alt='...' /></Link>
                    <div className='mt-5 text-center'>
                        <h1 className='p-3 head'>Hello, I Am Aswini</h1>
                        <p className='p-4 text'>Full Stack Developer With Expertise In Javascript,React,Nodejs,And More...</p>
                    </div>
                </div>
            </div>
            <div className='contact-container m-5 p-5'>
                <div className='box-shadow'><i className="fa-brands fa-google"></i> aswini25.mca@gmail.com</div>
                <div><Link className='text-dark' to='https://github.com/Aswini-mca' target='_blank' rel='noreferrer'><i className="fa-brands fa-github text-dark"></i> GitHub</Link></div>
                <div><Link className='text-dark' to='https://www.linkedin.com/in/aswini-r-5559a32a1/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i> LinkedIn</Link></div>
            </div>
        </div>
    );
}