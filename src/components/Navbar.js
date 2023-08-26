import React, { useState } from 'react';
import logo from '../res/logo.png';
import profile from '../res/profile.png';
import bookHeart from '../res/book-heart.png';
import notification from '../res/notifications.png';
import premium from '../res/premium-person.png';
import search from '../res/search.png'


function Navbar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        query === ""?alert("Please enter Input"):onSearch(query);
    };

    return (
        <div className="navbar flex">
            <div className='navLeft flex'>
                <img src={logo} className='logo' alt="Logo" />
                <h2 className='name'>KeazoN<span className='nameBooks'>Books</span></h2>
            </div>
            <div className='navMiddle flex'>
                <div className='flex search'>
                <img src={search} className='searchIcon' alt='search' height='20px'></img>
                <input
                    type="text"
                    placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                </div>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='navRight'>
                <img src={bookHeart} alt='Book'></img>
                <img src={notification} alt='Book'></img>
                <img src={premium} alt='Book'></img>
                <img src={profile} alt='Book'></img>

            </div>
        </div>
    );
}

export default Navbar;
