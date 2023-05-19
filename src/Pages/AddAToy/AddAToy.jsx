import { useForm } from "react-hook-form";

const AddAToy = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form className="h-[80vh] container mx-auto  border-lime-500 border-8" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input  defaultValue="test" {...register("example")} /> */}






      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Toy Name
          </label>
          <input {...register("toy_name")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Picture URL
          </label>
          <input {...register("toy_img")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

        </div>
      </section>


      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Category
          </label>
          <input {...register("category")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Price
          </label>
          <input {...register("price")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
      </section>




      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Rating
          </label>
          <input {...register("rating")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Available quantity
          </label>
          <input {...register("quantity")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
      </section>


      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
           Seller Name
          </label>
          <input {...register("user_name")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
          Seller Email
          </label>
          <input {...register("user_email")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
      </section>















      <section>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label className="sr-only">Your comment</label>
            <textarea {...register("details")} id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write details description" required></textarea>
          </div>
          
        </div>
      </section>

<section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 py-9 text-center text-white ">
  <input  className="text-2xl" type="submit" value="Add a product" />
</section>



    </form>
  );
};

export default AddAToy;