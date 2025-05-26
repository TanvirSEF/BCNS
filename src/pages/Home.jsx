import Form from "./Form";
import Image from "./Image";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center border-b-2 bg-red-700 text-white font-bold mx-auto p-2 w-auto md:w-1/2 lg:w-1/3 text-xl rounded-md mt-4 mb-6">
        APPLICATION FORM FOR MEMBERSHIP
      </h1>

      {/* <div className="flex justify-between">
        <Form />
        <Image />
      </div> */}

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-3/4">
          <Form />
        </div>
        <div className="md:w-1/4 flex justify-center md:justify-end">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Home;
