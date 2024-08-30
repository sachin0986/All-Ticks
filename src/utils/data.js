import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbTrain, TbBus } from "react-icons/tb";
import { IoCarSportSharp } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";


const HeaderData = [
    {
        id: "1",
        logo: <PiAirplaneTakeoffBold size={30} />,
        name: "Flights"
    },
    {
        id: "2",
        logo: <LuHotel size={30}/>,
        name: "Hotels"
    },
    {
        id: "5",
        logo: <TbTrain size={30} />,
        name: "Trains"
    },
    {
        id: "3",
        logo: <HiOutlineHomeModern size={30} />,
        name: "Homestays"
    },
    {
        id: "4",
        logo: <FaUmbrellaBeach size={30} />,
        name: "Holiday Packages"
    },
    {
        id: "9",
        logo: < FaCarCrash size={30} />,
        name: "Insurance"
    },
    {
        id: "6",
        logo: < TbBus size={30} />,
        name: "Buses"
    },
    {
        id: "7",
        logo: < IoCarSportSharp size={30} />,
        name: "Cabs"
    },
    {
        id: "8",
        logo: < MdMovie size={30} />,
        name: "Movies"
    },
  
 
];

export default HeaderData;
