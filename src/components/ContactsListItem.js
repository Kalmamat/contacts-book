import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ContactsListItem = ({user, onDelete}) => {
    const initials = user.name.split(' ').map(el => el[0]).join('')
    return (
        <div className="flex px-4 py-2  lg:hover:bg-gray-300 ">
            <div className="flex" key={user.id}>
                <div className="mr-5 bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold">
                    {initials}</div>
                <div className="mb-3">
                    <h4 className="font-bold text-xl text-gray-500">{user.name}</h4>
                    <p className="text-gray-500">{user.phone}</p>
                </div>
            </div>
            <FontAwesomeIcon
                icon={faTrash}
                className="ml-auto text-red-400 mt-2"
                onClick={() => onDelete(user.id)}
            />
        </div>
    );
};

export default ContactsListItem;