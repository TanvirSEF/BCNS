const Navbar = () => {
  return (
    <div>
      <header className=" flex flex-row items-center justify-evenly gap-4 p-4 bg-[#F0F0F0]">
        <div>
          <img src="/logo.png" alt="Logo" />
        </div>

        <div>
          <h1 className="text-[#372250] font-bold text-2xl">
            বাংলাদেশ চাইল্ড নিউরোলজি সোসাইটি (বিসিএনস)
          </h1>
          <h1 className="text-[#4B9FBE] font-bold text-2xl">
            Bangladesh Child Neurology Society (BCNS)
          </h1>
          <p>
            যোগাযোগ: রুম নং-৭০৩, ব্লক-এফ, ৭ম তলা, ইপনা, বিএমইউ, শাহবাগ, ঢাকা
          </p>
        </div>

        <div>
          <p>Website: www.bcns.org.bd</p>
          <p>E-mail: office@bcns.org.bd</p>
        </div>
      </header>
      <hr className="border-t-2" />
    </div>
  );
};

export default Navbar;
