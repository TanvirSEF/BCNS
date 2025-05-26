// Nativeform.jsx
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "./InputField.jsx";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  affiliation: yup.string().required("Affiliation is required"),
  phone: yup.string().matches(/^\d{11}$/, "Phone must be exactly 11 digits"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  mailingAddress: yup.string().required("Mailing address is required"),
  permanentAddress: yup.string().required("Permanent address is required"),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <div className="flex justify-between w-full">
        <h1>Form No:</h1>
        <h1>Ref No:</h1>
      </div>

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <InputField
            label="Name"
            name="name"
            type="text"
            // placeholder="Your Name"
            register={register}
            errors={errors}
          />

          <InputField
            label="Affiliation"
            name="affiliation"
            type="text"
            // placeholder="Your Email"
            register={register}
            errors={errors}
          />

          <InputField
            label="Phone"
            name="phone"
            type="text"
            // placeholder="Your Email"
            register={register}
            errors={errors}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            // placeholder="Your Email"
            register={register}
            errors={errors}
          />

          <InputField
            label="Mailing Address"
            name="mailingAddress"
            type="text"
            // placeholder="Your Age"
            register={register}
            errors={errors}
          />

          <InputField
            label="Permanent Address"
            name="permanentAddress"
            type="text"
            register={register}
            errors={errors}
          />

          {/* education part  */}
          <div className="mb-6 mt-6">
            <h1 className="font-bold mb-4">Education Qualification</h1>

            <div className="grid grid-cols-3 gap-4 mb-2">
              <h2>Qualification</h2>
              <h2>Year</h2>
              <h2>College/Institution</h2>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-4 mb-3">
              <h1>MBBS</h1>
              <div>
                <input
                  type="text"
                  {...register("year1")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  {...register("institution1")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-4 mb-3">
              <h1>FCPS/MD</h1>
              <div>
                <input
                  type="text"
                  {...register("year2")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  {...register("institution2")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-4 mb-3">
              <h1>MD/FCPS</h1>
              <div>
                <input
                  type="text"
                  {...register("year3")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  {...register("institution3")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 gap-4">
              <h1>Additional Degree</h1>
              <div>
                <input
                  type="text"
                  {...register("year3")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  {...register("institution3")}
                  className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
