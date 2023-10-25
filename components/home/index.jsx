import Layout from "@/components/shared/layout";
import IntroTypewriter from "./typewriter";

const Home =()=>{
    return(
        <Layout>
            <div className="min-h-screen bg-rose-100 flex items-center justify-center  lg:items-center lg:justify-around flex-col-reverse lg:flex-row gap-10">
                <div className="bio w-[84%] lg:w-[55%] p-4 sm:p-8 bg-white shadow-2xl rounded-lg mb-10 lg:mb-0">
                    <div className="flex flex-col sm:gap-2">
                        <h1 className="text-base sm:text-xl capitalize font-semibold drop-shadow-lg">hi !</h1>
                        <h1 className="font-bold capitalize text-2xl sm:text-5xl text-lime-400 drop-shadow-lg">i'm </h1>
                        <h1 className="text-2xl sm:text-5xl font-bold capitalize text-purple-500 drop-shadow-md mb-4 sm:mb-10">
                            <IntroTypewriter />
                        </h1>
                        <p className="text-lg drop-shadow-sm sm:text-lg text-justify mb-4">I am a MERN (MongoDB, Express.js, React, Node.js) full-stack developer. I create web applications from front-end design to back-end functionality, ensuring seamless user experiences. My expertise encompasses building and optimizing scalable, data-driven applications.</p>
                        <button type="button" className="sm:py-2 sm:px-4 bg-blue-600 capitalize font-bold text-white rounded-md w-fit hover:bg-white border border-blue-500 hover:text-blue-700 hover:shadow-md text-sm py-1 px-2">contact now</button>
                    </div>
                </div>      
                <div className="pic lg:w-[25%] w-[50%] shadow-2xl mt-10 lg:mt-0">
                    <img src="./viku_vikash.jpg" alt="profile" className="w-[100%] rounded-md border-8 border-white"/>    
                </div>          
            </div>
        </Layout>
    )
}


export default Home;
