import React,{useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const EmailBody = () => {
  const [emailBody, setEmailBody] = useState();

  const email = useSelector((state)=>state.emailReducer);

  const getEmails = async(id) => {
    const response = await axios.get(`https://my-json-server.typicode.com/Sushil1204/database/list?id=${id}`);
    if(response.status === 200){
      setEmailBody(response.data);
    }
  }
  // convert time into readable format
  const dateTime = (utcSeconds) =>{
    const date = new Date(utcSeconds);
    let month = date.getMonth()+1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm ='am';

    if(month<10){month='0'+month;}
    if(day<10){day='0'+day;}
    if(minutes<10){minutes='0'+minutes;}

    if(hours > 12){
        hours = hours-12;
        if(hours<10){hours='0'+hours;}
        amPm = 'pm';
    }
    return `${day}/${month}/${year} ${hours}:${minutes}${amPm}`;
     }

     // readEmail list
     const readEmailList = (id) =>{
      let readList = {};
      let session = window.sessionStorage.getItem('readEmailList');
     
      if(session){
          readList = JSON.parse(session);
      }
      readList[id]=id;
      window.sessionStorage.setItem('readEmailList', JSON.stringify(readList))
   }

  // favorite list
  const favoriteEmailList = (id)=>{
    let favoriteEmailList = {};
    let session = window.sessionStorage.getItem('favoriteEmailList');
   
    if(session){
        favoriteEmailList = JSON.parse(session);
    }
    favoriteEmailList[id]=id;
    window.sessionStorage.setItem('favoriteEmailList', JSON.stringify(favoriteEmailList))
 }

let favoriteList = window.sessionStorage.getItem("favoriteEmailList");
 if (favoriteList) {favoriteList = JSON.parse(favoriteList);}

  useEffect(()=>{
    if (email) {
      getEmails(email.id);
      readEmailList(email.id)
    }
},[email])
  return (
  <>
    {email ? (<section className="flex gap-4 h-max bg-[#F2F2F2] text-[#636363] border-2 border-solid border-[#CFD2DC] rounded-md p-4 m-0">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <div className='flex space-x-4 items-center'>
            <p className="text-white bg-[#E54065] rounded-full px-5 py-3 text-xl">
            {email.from?.name.charAt(0).toUpperCase()}
            </p>
            <div className="flex-col space-y-4">
              <h1 className='text-xl'>{email.subject}</h1>
              <p className="text-xs">{dateTime(email.date)}</p>
            </div>
          </div>
          <div className="mx-auto my-auto">
            <button className="border-solid text-white font-semibold text-xs rounded-full cursor-pointer bg-[#E54065] px-2 py-2" onClick={()=>(favoriteEmailList(email.id))}>
              Mark as favourite
            </button>
          </div>
        </div>
        <div className="my-4">
          {email.body}
        </div>
      </div>
      </section>) : ('')}
      </>
  );
};

export default EmailBody;
