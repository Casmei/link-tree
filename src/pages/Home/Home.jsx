import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import me from '../../assets/icons/tyt.jpg'
import Link from '../../components/Link'

import Typewriter from "typewriter-effect";

const Home = () => {

    return(
        <div className="bg-zinc-900 w-screen h-screen flex justify-center items-center">

                <div className="group w-full 2xl:w-3/6 px-12 block 2xl:flex 2xl:justify-center overflow-y-auto">
                <div className="block mb-6 bottom-full 2xl:bottom-auto 2xl:right-full mr-5">
                    <div className="w-24 h-24 md:h-32 md:w-32 overflow-hidden transition duration-300 rounded-2xl shadow">
                        <img src={me} />
                    </div>
                </div>
                <div className="w-full justify-center flex flex-col gap-4">
                    <h1 className="text-gray-300 text-2xl md:text-3xl font-bold">
                        
                        <Typewriter
                            onInit={(typewriter)=> {
                                typewriter
                                .typeString("Olá, eu me chamo Tiago")
                                .pauseFor(1000)
                                .deleteChars(14)
                                .typeString("sou Desenvolvedor")
                                .pauseFor(2000)
                                .deleteAll(13)
                                .typeString("Seja bem vindo(a)!")
                                .pauseFor(1000) 
                                .start()
                            }}
                        />
                    </h1>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 gap-y-5 gap-x-6 mt-6">
                        <Link text="Github" url="https://github.com/Casmei" logo={github}/>
                        <Link text="Linkedin" url="https://www.linkedin.com/in/tiago-de-castro-lima-3814911b9/" logo={linkedin}/>
                        <Link text="Twitter" url="https://twitter.com/Tiago09994803" logo={twitter}/>
                        <Link text="Instagram" url="https://www.instagram.com/tiago.cali/" logo={instagram}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
