import pro5 from '../assets/pro5.jpg';
import pro1 from '../assets/pro1.jpg';
import pro3 from '../assets/pro3.jpg';
import pro4 from '../assets/po4.jpg';


export default function Projects() {
    return <section className="flex  flex-col px-5 py-20 justify-center bg-primary text-white" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl mb-5 w-[140px] font-bold">Projects</h1>
                <p className="">Here are some of my best projects built using MongoDB, Express.js, Node.js and JavaScript. Check them out:</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[300px] w-[400px]' src={pro5} alt="dress picture" />
                    <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                         <h2 className='text-center py-5 text-sm md:text-[17px]'>FASHION MANAGEMENT SYSTEM :</h2>
                         <p className='px-3 text-center text-xs md:text-base'>A streamlined dress management system using EJS, MongoDB, Express.js, and Node.js. Features include adding and viewing dress details with a user-friendly interface and efficient data handling. Designed for smooth interaction, modern functionality.</p>
                         <div className='text-center  text-xs  md:text-base py-3 md:py-2'>
                    <a href="https://fashion-management-system-3.onrender.com/" className='bg-primary px-3 py-1 font-bold hover: border-2 border-white rounded'>View app</a>
                 </div>
                    </div>
                </div>


                <div className='relative'>
                    <img className='h-[300px] w-[400px]' src={pro1} alt="todo-list picture" />
                    <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                    <h2 className='text-center py-5 text-sm md:text-[17px]'>TO-DO-LIST APP :</h2>
                    <p className='px-3 text-center text-xs md:text-base'>A practical task management application employing Local Storage and Session Storage to persist data. It allows users to effortlessly create, update, and manage tasks, exemplifying clean, efficient JavaScript programming and responsive web design principles.</p>
                 <div className='text-center  text-xs  md:text-base py-3 md:py-2'>
                    <a href="https://karthika2903.github.io/todo-list/" className='bg-primary px-3 py-1 font-bold hover: border-2 border-white rounded'>View app</a>
                 </div>
                    </div>
                </div>



                <div className='relative'>
                    <img className='h-[300px] w-[400px]' src={pro3} alt="weather app picture" />
                    <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                        <h2  className='text-center py-5 text-sm md:text-[17px]'>WEATHER APP :</h2>
                        <p className='px-3 text-center text-xs md:text-base'>A dynamic weather application utilizing the Fetch API to provide real-time weather updates. It offers a user-friendly interface with accurate data for cities worldwide, demonstrating your ability to integrate APIs and build engaging, functional web tools.</p>
                    <div className='text-center  text-xs  md:text-base py-3 md:py-2'>
                        <a href="https://karthika2903.github.io/weather-app/"className='bg-primary px-3 py-1 font-bold hover: border-2 border-white rounded'>view app</a>
                    </div>
                    </div>
                </div>



                <div className='relative'>
                    <img className='h-[300px] w-[400px]' src={pro4} alt="quiz appp picture" />
                    <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                        <h2 className='text-center py-5 text-sm md:text-[17px]'>QUIZ APP :</h2>
                        <p className='px-3 text-center  text-xs md:text-base'>A responsive and interactive quiz application designed for personal use, featuring a set of 10 well-structured questions. It showcases advanced JavaScript functionalities like setTimeout, clearTimeout, setInterval, and clearInterval. Flexible for both  mobile and desktop view.</p>
                    <div className='text-center  text-xs  md:text-base py-3 md:py-2'>
                        <a href="https://karthika2903.github.io/quiz-app/" className='bg-primary px-3 py-1 font-bold hover: border-2 border-white rounded'>view app</a>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}