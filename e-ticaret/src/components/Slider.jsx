const Slider = () => {
  return (
    <section className=" text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12">
      <div className="md:w-1/2 space-y-3 text-center md:text-left">
        <p className="text-sm font-semibold uppercase">Summer 2020</p>
        <h1 className="text-3xl md:text-5xl font-bold">New Collection</h1>
        <p className="text-sm md:text-base">
          We know how large objects will act, but things on a small scale.
        </p>
      </div>
      <div className="md:w-1/2">

         <button className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white font-semibold transition">
          Shop Now
        </button>
      </div>
       <div className="md:w-1/2">
        <img
          src="/images/shop-hero-1-product-slide-1.png"
          alt="New Collection"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Slider;
