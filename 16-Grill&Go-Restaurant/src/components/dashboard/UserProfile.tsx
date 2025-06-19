
import React from "react";

export const UserProfile = () => {
  // Example user data (replace with real data or props)
  const user = {
    name: "John DOe",
    email: "denis@example.com",
    role: "Restaurant Member",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
    joined: "March 2024",
  };

  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden mt-8 p-6">
      <div className="flex items-center space-x-6">
        <img
          className="h-20 w-20 rounded-full border-4 border-blue-500 object-cover"
          src={user.avatar}
          alt={user.name}
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
          <p className="text-sm text-gray-400">Joined {user.joined}</p>
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-1">Email</label>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">{user.email}</span>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};