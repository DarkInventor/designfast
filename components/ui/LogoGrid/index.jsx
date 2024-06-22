import Image from "next/image";
import freshbooks from "../../../public/logos/freshbooks.svg";
import sendgrid from "../../../public/logos/sendgrid.svg";
import layers from "../../../public/logos/layers.svg";
import adobe from "../../../public/logos/adobe.svg";

const logos = [
  {
    src: freshbooks,
    alt: "freshbooks",
  },
  {
    src: sendgrid,
    alt: "sendgrid",
  },
  {
    src: layers,
    alt: "layers",
  },
  {
    src: adobe,
    alt: "adobe",
  },
];

const LogoGrid = () => (
  <div>
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center mb-4">
        JOIN 430+ USERS NOW
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="h-screen lg:flex hidden items-center justify-center sm:hidden md:hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover w-full h-full"
          style={{
            minWidth: "70vw",
            maxWidth: "70vw",
            minHeight: "70vh",
            maxHeight: "70vh",
          }}
        >
          <source src="/DesignFast.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>    
    </div>   
  </div>
);

export default LogoGrid;
