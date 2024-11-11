function ProfileMenu({ className }) {
    return (
      <div className={`absolute flex flex-col top-12 right-0 bg-white shadow-lg rounded-md w-48 py-2 z-50 bg-white shadow rounded-md p-4 dark:bg-gray-800 dark:text-white transition-all duration-400 ease-in-out w-full `}>
        
          <a className=" py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" href="/account">Account</a>
          <a className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 " href="/wishlist">Wishlist</a>
          <a className="py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"href="/setting">Settings</a>
        
      </div>
    );
  }
  
  export default ProfileMenu;