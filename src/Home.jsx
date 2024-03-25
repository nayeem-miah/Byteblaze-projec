import { useNavigation } from "react-router-dom";
import Hero from "./Components/Hero";
import wave from './assets/wave.svg'
import Loader from "./Components/Loader";

const Home = () => {
  const navigation = useNavigation();
  if(navigation.state==='loading') return <Loader></Loader>
  return (
    <div  className="flex flex-col relative items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero></Hero>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;


