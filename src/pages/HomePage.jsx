import NavBar from "../components/NavBar";
import bg from "../assets/imgs/homepage_bg.png";

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <section className="text-center">
                <p className=" w-full relative text-gray-700 " >
                    <img className="z-0 opacity-20 absolute" src={bg} alt="" />
                    <div className=" z-10 pt-16 w-full absolute text-center" >
                        <span className="block " >Hi, my name is <span className="font-semibold">Anonimus</span> and i'm a</span>
                        <span className="block text-7xl py-6 font-extrabold" >Web Developer</span>

                    </div>
                </p>

            </section>
        </div>
    )



}
