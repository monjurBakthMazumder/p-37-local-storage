import PhonesCard from './PhonesCard';
import PropTypes from 'prop-types';

const Phones = ({phones}) => {



    console.log(phones);
    return (
        <>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center underline mb-5 font-semibold'>Phones: {phones?.length}</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    phones?.map(phone=><PhonesCard key={phone.id} phone={phone}></PhonesCard> )
                }
            </div>
        </>
    );
};
Phones.propTypes = {
    phones :PropTypes.object,
  };
export default Phones;