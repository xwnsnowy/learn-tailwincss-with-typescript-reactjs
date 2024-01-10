// interface IAppProps {}
interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}
const Input: React.FC<InputProps> = ({ title, placeholder, type }) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="font-['Merriweather'] text-sm font-semibold text-slate-900"
      >
        <h4>{title}</h4>
      </label>
      {type === "text" && (
        <input
          type="text"
          placeholder={placeholder}
          id={title}
          className="mt-1  w-full rounded-md border-2 border-indigo-100 px-2 py-3"
        />
      )}
      {type === "textarea" && (
        <textarea
          placeholder={placeholder}
          id={title}
          rows={3}
          className="w-full border-2 px-2 py-1"
        />
      )}
    </div>
  );
};

export default Input;
