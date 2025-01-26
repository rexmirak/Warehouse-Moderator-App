export default function Card({ title, description }) {
    return (
      <div className="m-4 flex flex-col justify-center items-center w-72 p-6 text-center text-inherit no-underline border border-gray-200 rounded-lg transition-colors duration-150 ease-in-out hover:border-blue-500 hover:text-blue-500">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg mt-2">{description}</p>
      </div>
    );
  }
  