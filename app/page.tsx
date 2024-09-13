import Image from "next/image";
export default function Home() {
  return (
    <main>
    <header className="flex items-center fixed top-0 justify-between bg-indigo-500 h-28 w-full">
      <h1 className="text-white pl-[10%] text-2xl">V8 TechWorks</h1>

      <div className="pr-[10%]">
        <button className="bg-white p-2 w-20 mr-2">Login</button>
      </div>
    </header>

    <section className="flex items-center bg-indigo-500 h-[100vh] w-full mb-5">
      <div className="flex-1 p-[10%]">
      <h2 className="text-5xl text-white">Find the right freelance service, right away</h2>
      <input type="text" placeholder="Search" className="w-full p-5  mt-10 border-none outline-none" />
      </div>
      <div className=" flex-1">
      <Image src="/code.jpg" alt="" objectFit="cover" height={700} width={700} className="h-[100%] w-[100%]"/>
      </div>
    </section>

    <section className="flex items-center justify-evenly flex-wrap">
      <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2 shadow-xl cursor-pointer">
        <Image src="/download 2.png" alt="none" width={200} height={200} />
        <h3 className="text-[20px] font-semibold mt-2 mb-2">
          React job | Singapore
        </h3>
        <span>
        React is designed to create sophisticated user interfaces. 
        It allows using HTML-like syntax within JavaScript code, enabling developers 
        to create reusable components and write less code for UI implementation. 
        </span>
      </div>

      <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2  shadow-xl cursor-pointer">
        <Image src="/download 1.png" alt="none" width={200} height={200} />
        <h3 className="text-[20px] font-semibold mt-2 mb-2">
          Angular job | Singapore
        </h3>
        <span>
        Angular allows you to communicate with components, feed them data, 
        and accept events from components; it thus makes components reusable 
        and more isolated.The flexibility to develop the view separately as HTML.
        </span>
      </div>
      <div className="bg-indigo-50 w-[25%] h-[50%] p-10 m-2 shadow-xl cursor-pointer">
        <Image src="/download.png" alt="none" width={200} height={200} />
        <h3 className="text-[20px] font-semibold mt-2 mb-2">
          Dotnet web job | Singapore
        </h3>
        <span>
        DotNET is an open-source platform for building desktop, web, and mobile applications 
        that can run natively on any operating system. The DotNET system includes tools, libraries, 
        and languages that support modern, scalable, and high-performance software development.
        </span>
      </div>
    </section>

    <section className="flex items-center justify-between bg-indigo-100 h-[200px] w-full mt-10">
      <h3 className="text-xl ml-[20px] font-semibold">V8 TechWorks</h3>
      <div className="flex flex-col mr-[10px]">
        <h3 className="text-xl ml-[2px] font-semibold">Account</h3>
        <span>My Account</span>
        <span>Jobs</span>
      </div>

      <div className="flex flex-col mr-[20px]">
        <h3 className="text-xl ml-[5px] font-semibold">Contact us</h3>
        <span>+61 491 678 996</span>
        <span>info@attunedpathways.com.au</span>
        <span>Facebook</span>
        <span>Instagram</span>
      </div>
    </section>
  </main>
  );
}
