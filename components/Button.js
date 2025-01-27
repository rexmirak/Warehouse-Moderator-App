export default function Button({ text, icon: Icon }) {
    return (
      <button className="flex items-center justify-start w-full px-4 py-2 text-blue-500   
       rounded-md hover:text-white hover:bg-blue-500 transition-colors duration-300
       dark:text-white   dark:hover:bg-gray-700">
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        <span>{text}</span>
      </button>
    );
  }
  