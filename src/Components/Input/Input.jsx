const Input = {
    InputText: (props) => {
        const {placeholder, width} = props
        return (
            <input className={`border-[#a7c2e9b0] border-2 outline-none px-3 py-2 rounded-[20px] w-[${width}px]`} type="text" placeholder={placeholder}/>
        )
    },
    InputPassword: () => {
        return (
            <input className="border-[#a7c2e9b0] border-2 outline-none px-3 py-2 rounded-[20px]" type="text" placeholder="Password"/>
        )
    },
    InputSubmit: () => {
        return (
            <input className="bg-[#5661f8b4] border-2 outline-none px-3 py-2 rounded-[20px] text-white cursor-pointer mt-5" type="submit" value="Login"/>
        )
    },
}

export default Input