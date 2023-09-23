import Phones from '../../components/Phones/Phones';
import useGetPhones from '../../hook/useGetPhones';

const Home = () => {



    
    const [phones] = useGetPhones()


    return (
        <div className='px-5 sm:px-[10%] my-10'>
            <Phones phones ={phones}></Phones>
        </div>
    );
};

export default Home;