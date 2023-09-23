import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";
import useGetPhones from "../../hook/useGetPhones";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();

  const [phones] = useGetPhones();

  useEffect(() => {

    
    const findPhone = phones?.find((phone) => phone.id === id);

    setPhone(findPhone);
  }, [id, phones]);


  return (
    <div className="my-10 px-5 sm:px-[10%]">
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
