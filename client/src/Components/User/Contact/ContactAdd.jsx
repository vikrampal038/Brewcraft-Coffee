import React from "react";
import { MdContactSupport, MdEmail } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const ContactAdd = () => {
  return (
    <section className="routemein bg-[#F9F7F2]">
      <div className="main">
        {/* Heading Part */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-14">
          {/* for Support */}
          <div className="flex flex-col gap-4">
            <MdContactSupport className="text-[#D46c11] text-4xl" />
            <h3 className="text-[24px] text=[#181411] font-serif font-bold">
              Support Info
            </h3>
            <div className="space-y-2 text-base opacity-80">
              <p className="flex items-center gap-2">
                <MdEmail className="text-[14px] text=[#181411]" />
                vikrampal038@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <IoCallSharp className="text-[14px] text=[#181411]" />
                +91 9967319725
              </p>
            </div>
          </div>

          {/* for Follow Our Journey */}
          <div className="flex flex-col gap-4">
            <IoMdShare className="text-[#D46c11] text-4xl" />
            <h3 className="text-[24px] text=[#181411] font-serif font-bold">
              Follow Our Journey
            </h3>
            <p className="text-base opacity-80 mb-2">
              Get a glimpse inside the roasting process and new arrivals.
            </p>
            <div className="flex gap-4">
              <a className="size-10 flex justify-center items-center bg-[#D46c11]/10 rounded-full hover:bg-[#D46c11] hover:text-white transition-all duration-700" href="#">
              <FaDownload className="text-xl"/>
              </a>
              <a className="size-10 flex justify-center items-center bg-[#D46c11]/10 rounded-full hover:bg-[#D46c11] hover:text-white transition-all duration-700" href="#">
              <FaLinkedin className="text-xl"/>
              </a>
              <a className="size-10 flex justify-center items-center bg-[#D46c11]/10 rounded-full hover:bg-[#D46c11] hover:text-white transition-all duration-700" href="#">
              <FaGithub className="text-xl"/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactAdd;
