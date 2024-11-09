import React,{useState} from 'react';
const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form summited',{email,password});
        setEmail('');
        setPassword('');
    };
    return(
        <div className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg"> 
            <form className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className='form-group'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                    />
                </div>
                <button type="sumbit" className='bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-600'>Login</button>
                </form>
                </div>
    );               
};

export default Login;