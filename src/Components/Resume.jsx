// import resume from '../assets/resume1.jpg';

// function Resume() {
//     return <section className='flex flex-col md:flex-row bg-secondary px-5'id='resume'>
//         <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
//             <img className='w-[400px] h-[300px]' src={resume} alt="about img" />

//         </div>
//         <div className=' md:w-1/2 flex justify-center text-white' >
//             <div className='flex flex-col justify-center py-5'>
//                 <h1 className='text-4xl border-b-4 border-primary mb-5 w-[135px] font-bold '>Resume</h1>
//                 <p>Explore my professional journey  <a href="#" className='bg-primary px-5 py-2 font-bold text-white hover:rounded-lg hover:text-black hover:text-xl'>Download</a></p>
//             </div>
//         </div>
//     </section>
// }
// export default  Resume;





import resume from '../assets/resume2rbg.png';

function Resume() {
    return (
        <section className="flex flex-col md:flex-row bg-secondary px-5" id="resume">
        
            <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
                <img className="w-[300px] h-[200px] md:w-[400px] md:h-[300px]" src={resume} alt="resume img" />
            </div>


            <div className="md:w-1/2 flex justify-center text-white">
                <div className="flex flex-col items-center md:justify-center py-5">
                    <h1 className="text-4xl mb-5 w-[135px] font-bold ">Resume</h1>
                    <p className="text-center md:text-left">
                        Explore my professional journey
                    </p>
                    <a
                        href="/karthika_k.pdf" target='_blank' rel='noonpener noreferrer'
                        className="bg-primary px-5 py-2 font-bold text-center text-white hover:rounded-lg  hover:text-xl mt-3 mx-auto md:mx-0 transition-all duration-300"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;