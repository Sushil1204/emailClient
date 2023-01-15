import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openEmail } from "../action";
import axios from "axios";

const EmailList = () => {
  const [emails, setEmails] = useState();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.emailFilter);

  const dateTime = (utcSeconds) => {
    const date = new Date(utcSeconds);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm = "am";

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours > 12) {
      hours = hours - 12;
      if (hours < 10) {
        hours = "0" + hours;
      }
      amPm = "pm";
    }
    return `${day}/${month}/${year} ${hours}:${minutes}${amPm}`;
  };

  let readEmailList, favoriteEmailList;

  const fetchSessionStorage = () => {
    readEmailList = window.sessionStorage.getItem("readEmailList");
    if (readEmailList) {
      readEmailList = JSON.parse(readEmailList);
    }
    favoriteEmailList = window.sessionStorage.getItem("favoriteEmailList");
    if (favoriteEmailList) {
      favoriteEmailList = JSON.parse(favoriteEmailList);
    }
  };

  const getEmails = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Sushil1204/database/list"
    );
    if (response.status === 200) {
      setEmails(response.data);
    }
  };

  const addSelectedClass = (id) => {
    let element = document.getElementsByClassName('emailCard');
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("opened");
    }
    document.getElementById(`email_${id}`).classList.add("opened");
  };

  const renderEmail = () => {
    fetchSessionStorage();

    // List of unread emails
    if (filter === "Unread") {
      if (readEmailList) {
        return (
          emails.map((email) => (
            readEmailList[email.id] !== email.id ?
              (<div className='emailCard' id={'email_' + email.id} key={email.id} onClick={() => {
                dispatch(openEmail(email));
                addSelectedClass(email.id);
              }}>
                <div className="flex gap-4 border-2 border-solid border-[#CFD2DC] mb-4 hover:cursor-pointer hover:border-[#E54065]">
                  <div className="my-2 ml-8">
                    <p className="text-white bg-[#E54065] rounded-full px-5 py-3 text-2xl">
                      {/* {"F"} */}
                      {email.from?.name.charAt(0).toUpperCase()}
                    </p>
                  </div>
                  <div className="flex flex-col my-2">
                    <div className="mx-4">
                      <span>From: </span>
                      <span className="font-semibold text-sm">
                        {email.from?.name}
                        {" <" + email.from?.email + ">"}
                      </span>
                    </div>
                    <div className="mx-4">
                      <span>Subject: </span>
                      <span className="font-semibold text-sm">
                        {email.subject}
                      </span>
                    </div>
                    <div className="mx-4">
                      <p className="m-px text-ellipsis whitespace-nowrap overflow-hidden w-[320px]">
                        {email.short_description}
                      </p>
                    </div>
                    <div className="mx-4 mt-2">
                      <p className="text-xs">{dateTime(email.date)}</p>
                    </div>
                  </div>
                </div>
              </div>) : ('')
          ))
        )
      }
    }

    // List of read emails
    if (filter === "Read") {
      if (readEmailList) {
        return (
          emails.map((email) => (
            readEmailList[email.id] === email.id ?
              (<div className='emailCard' id={'email_' + email.id} key={email.id} onClick={() => {
                dispatch(openEmail(email));
                addSelectedClass(email.id);
              }}>
                <div className="flex gap-4 border-2 border-solid border-[#CFD2DC] mb-4 hover:cursor-pointer hover:border-[#E54065]">
                  <div className="my-2 ml-8">
                    <p className="text-white bg-[#E54065] rounded-full px-5 py-3 text-2xl">
                      {/* {"F"} */}
                      {email.from?.name.charAt(0).toUpperCase()}
                    </p>
                  </div>
                  <div className="flex flex-col my-2">
                    <div className="mx-4">
                      <span>From: </span>
                      <span className="font-semibold text-sm">
                        {email.from?.name}
                        {" <" + email.from?.email + ">"}
                      </span>
                    </div>
                    <div className="mx-4">
                      <span>Subject: </span>
                      <span className="font-semibold text-sm">
                        {email.subject}
                      </span>
                    </div>
                    <div className="mx-4">
                      <p className="m-px text-ellipsis whitespace-nowrap overflow-hidden w-[320px]">
                        {email.short_description}
                      </p>
                    </div>
                    <div className="mx-4 mt-2">
                      <p className="text-xs">{dateTime(email.date)}</p>
                    </div>
                  </div>
                </div>
              </div>) : ('')
          ))
        )
      }
      return ('no emails in read');
    }

    // List of Favorite emails
    if (filter === "Favorites") {
      return (
        emails.map((email) => (
          favoriteEmailList[email.id] === email.id ?
            (<div className='emailCard' id={'email_' + email.id} key={email.id} onClick={() => {
              dispatch(openEmail(email));
              addSelectedClass(email.id);
            }}>
              <div className="flex gap-4 border-2 border-solid border-[#CFD2DC] mb-4 hover:cursor-pointer hover:border-[#E54065]">
                <div className="my-2 ml-8">
                  <p className="text-white bg-[#E54065] rounded-full px-5 py-3 text-2xl">
                    {/* {"F"} */}
                    {email.from?.name.charAt(0).toUpperCase()}
                  </p>
                </div>
                <div className="flex flex-col my-2">
                  <div className="mx-4">
                    <span>From: </span>
                    <span className="font-semibold text-sm">
                      {email.from?.name}
                      {" <" + email.from?.email + ">"}
                    </span>
                  </div>
                  <div className="mx-4">
                    <span>Subject: </span>
                    <span className="font-semibold text-sm">
                      {email.subject}
                    </span>
                  </div>
                  <div className="mx-4">
                    <p className="m-px text-ellipsis whitespace-nowrap overflow-hidden w-[320px]">
                      {email.short_description}
                    </p>
                  </div>
                  <div className="mx-4 mt-2">
                    <p className="text-xs">{dateTime(email.date)}</p>
                  </div>
                </div>
              </div>
            </div>) : ('')
        ))
      )
    }

    return (
      emails.map((email) => (
        <div className='emailCard' key={email.id} id={"email_" + email.id}
        onClick={() => {
          dispatch(openEmail(email));
          addSelectedClass(email.id);
        }}>
          <div className="flex gap-4 border-2 border-solid border-[#CFD2DC] mb-4 hover:cursor-pointer hover:border-[#E54065]">
            <div className="my-2 ml-8">
              <p className="text-white bg-[#E54065] rounded-full px-5 py-3 text-2xl">
                {/* {"F"} */}
                {email.from?.name.charAt(0).toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col my-2">
              <div className="mx-4">
                <span>From: </span>
                <span className="font-semibold text-sm">
                  {email.from?.name}
                  {" <" + email.from?.email + ">"}
                </span>
              </div>
              <div className="mx-4">
                <span>Subject: </span>
                <span className="font-semibold text-sm">
                  {email.subject}
                </span>
              </div>
              <div className="mx-4">
                <p className="m-px text-ellipsis whitespace-nowrap overflow-hidden w-[320px]">
                  {email.short_description}
                </p>
              </div>
              <div className="mx-4 mt-2">
                <p className="text-xs">{dateTime(email.date)}</p>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  }
  useEffect(() => {
    getEmails();
    fetchSessionStorage();
  }, [filter]);

  return (
    <section className="w-full">
      {emails && renderEmail()}
    </section>
  );
}

export default EmailList;
