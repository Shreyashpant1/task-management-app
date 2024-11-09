import { useState } from 'react';
const useNotification = () => {
    const [notification, setNotification] = useState({message:'notification from tasks',type:'none'});
    const showNotification = (message,type) =>{
        setNotification({message,type});

        setTimeout(()=>{
            setNotification({message:'here is your message',type:'none'});
        },3000);
    };
    return{
        notification,
        showNotification,
    };
};

export default useNotification;