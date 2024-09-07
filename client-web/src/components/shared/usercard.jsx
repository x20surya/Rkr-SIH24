import React from 'react';
const user={
    name:"Aditya Raj",
    email:"aditya@gmail.com",
    phone:"+91 9999999323",
    image:"https://picsum.photos/200"
}
const UserCard = () => {
    return (
        <div className="bg-background rounded-lg shadow-lg p-6 max-w-xs mx-auto text-center transform transition-transform hover:scale-105">
            <img src={user.image} alt="User" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
        </div>
    );
};

export default UserCard;