const InputField = ({ label, name, type = "text", placeholder,  value,  onChange,}) => {
    return (
        <div>
            <label htmlFor={name} className="block font-bold mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}            
                onChange={onChange}     
                className="w-full px-4 py-[19.5px] rounded-[8px] bg-white shadow-common-button text-base text-black placeholder:text-black focus:outline-none"
            />
        </div>
    );
};

export default InputField;
