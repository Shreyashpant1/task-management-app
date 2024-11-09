import React,{useState} from 'react';
const Contact = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form summited',{name,email,message});
        setName('');
        setEmail('');
        setMessage('');
    };
    return(
        <div className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg">
            <form className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                <div className='mb-4'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                    />
                </div>
                <div className='mb-4'>
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
                <div className='mb-4'>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                    name="message"
                    placeholder="Enter your message"
                    id="message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    className="border rounded-lg p-2"
                    required
                    />
                </div>
                <button type="sumbit" className='bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-600'>Submit</button>
            </form>
        </div>
    );
    
};
export default Contact;