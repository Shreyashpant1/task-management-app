import React,{useState} from 'react';

const Signup = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
    });
    const [error,setError] =  useState("");
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData((prevData) =>({...prevData,[name]:value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.password){
            setError("all fields are required!");
            return;
        }
        setError("");
        console.log("User Registrated",formData);
    };
    return(
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white shadow-md rounded-lg p-7 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign Up</button>

                </form>
            </div>

        </div>
    );
}; 

export default Signup;