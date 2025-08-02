const AuthImagePattern = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <img
            src={imageSrc}
            alt="Authentication illustration"
            className="w-[32rem] h-[32rem] object-contain rounded-2xl shadow-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;