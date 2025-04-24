const InputField = ({ label, name, type = "text", placeholder,  value,  onChange, myClass}) => {
    return (
        <div className="max-sm:w-[350px] mx-auto">
            <label htmlFor={name} className="block text-xl font-bold mb-2 text-dark-grey">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-[19.5px] flex mx-auto max-sm:w-[350px] text-base rounded-[8px] bg-white shadow-common-button  text-gray placeholder:text-gray focus:outline-none ${myClass}`}
            />
        </div>
    );
};

export default InputField;
