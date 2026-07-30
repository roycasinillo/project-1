type CardProps = {
  title: string;
  description: string;
  buttonText: string;
};

function Card({ title, description, buttonText }: CardProps) {
  return (
    <div className="w-max rounded-xl border border-blue-500 bg-white p-4 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>

      <p className="mb-4 text-gray-600">
        {description}
      </p>

      <button
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;