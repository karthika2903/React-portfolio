import about from '../assets/about-removebg-preview.png'

function About() {
    return <section className='flex flex-col md:flex-row bg-secondary px-5 id'id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={about} alt="about img" />

        </div>
        <div className='md:w-1/2 flex justify-center text-white' >
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>A snapshot of my journey as a MERN stack developer. Passionate about building dynamic web applications to making the web a beter place.</p>
                <p className='pb-5'>With expertise in HTML, CSS, Bootstrap, JavaScript, MongoDB, Express.js, React.js, and Node.js, I build powerful web solutions.</p>
                <p>My goal is to create user-friendly, scalable web solutions that leave a lasting impact.</p>
            </div>

        </div>
    </section>
}
export default About;