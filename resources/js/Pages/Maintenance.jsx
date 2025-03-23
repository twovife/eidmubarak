import eidarab from '../../../public/Eid-Al-Adha-Shape.png';
import lampu1 from '../../../public/LAmp-01.png';
import lampu2 from '../../../public/LAmp-02.png';
import lampu3 from '../../../public/LAmp-03.png';
import masjid from '../../../public/Mosque-01.png';
import '../../css/masjid.css';
import Particles from './Particles';
import TypingEffect from './TypingEffect';

const Maintenance = () => {
    return (
        <div className="relative mx-auto flex h-screen w-full max-w-lg items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-sky-900 text-red-500">
            <Particles />
            <div className="absolute bottom-20 left-1/2 z-50 -translate-x-1/2 text-nowrap text-sm font-semibold">
                APLIKASI DIBUKA KEMBALI 06-05-2025
            </div>
            <div className="absolute top-0 h-32 w-1/3">
                <img
                    src={lampu1}
                    alt="lampu1"
                    className="absolute left-1/3 h-28 w-auto -translate-x-1/2 lg:h-32"
                />
                <img
                    src={lampu3}
                    alt="lampu1"
                    className="absolute left-1/2 h-32 w-auto -translate-x-1/2 contrast-200 grayscale lg:h-48"
                />
                <img
                    src={lampu2}
                    alt="lampu1"
                    className="absolute left-2/3 h-24 w-auto -translate-x-1/2 lg:h-28"
                />
            </div>
            <img
                src={masjid}
                alt="masjid"
                className="absolute bottom-0 z-20 w-full"
            />
            <div className="relative z-50 w-full -translate-y-1/4 p-3 text-center xl:max-w-[30vw]">
                <img
                    src={eidarab}
                    alt="eid"
                    className="mx-auto w-5/12 lg:w-1/3"
                />
                <div className="mt-4 font-alpha text-7xl tracking-wide text-amber-500 lg:text-8xl">
                    Eid Al Fitr
                </div>
                <div className="mt-2 space-x-5 font-montserrat text-xl font-black tracking-widest text-amber-500 lg:space-x-8 lg:text-2xl">
                    <span>M</span>
                    <span>U</span>
                    <span>B</span>
                    <span>A</span>
                    <span>R</span>
                    <span>A</span>
                    <span>K</span>
                </div>
                <TypingEffect />
            </div>
        </div>
    );
};

export default Maintenance;
