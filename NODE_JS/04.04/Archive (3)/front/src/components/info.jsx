import React, { useState } from 'react';

export default function Info() {
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = async () => {
        try {
            const response = await fetch('http://localhost:3000/user');
            const data = await response.json();
            setUserInfo(data);  // Теперь React ререндерит компонент
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    return (
        <div>
            <h3>Info</h3>
            <button onClick={fetchUserInfo}>Get User Info</button>
            {userInfo && (
                <div>
                    <p>Name: {userInfo.name}</p>
                    <p>Age: {userInfo.age}</p>
                </div>
            )}
        </div>
    );
}