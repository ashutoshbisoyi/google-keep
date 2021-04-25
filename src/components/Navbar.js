import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  AiOutlineReload,
  AiOutlineSearch,
  AiOutlineDelete,
  AiOutlineCloudUpload,
} from 'react-icons/ai';
import { ImSun } from 'react-icons/im';
import { BiDotsVertical } from 'react-icons/bi';
import logo from '../assets/logo.png';
import { IconButton, Tooltip } from '@material-ui/core';
const Navbar = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState('blank');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setSearch(searchTerm);
  };
  return (
    <nav className='navbar'>
      <div className='nav-group'>
        <div className='menu-item'>
          <GiHamburgerMenu className='icon' />
        </div>
        <div className='menu-item'>
          <div className='navbar-brand'>
            <img src={logo} alt='google keep logo' />
            <h1>Keep</h1>
          </div>
        </div>
      </div>
      <div className='nav-group'>
        <div className='menu-item'>
          <div className='search-div'>
            <AiOutlineSearch className='icon' />
            <input
              type='text'
              name='search'
              placeholder='Search Title'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <div className='nav-group'>
        <div className='menu-item md'>
          <Tooltip title='Save to Cloud'>
            <IconButton aria-label='Save to cloud'>
              <AiOutlineCloudUpload className='icon' />
            </IconButton>
          </Tooltip>
        </div>
        <div className='menu-item md'>
          <Tooltip title='Delete All'>
            <IconButton aria-label='Delete All'>
              <AiOutlineDelete className='icon' />
            </IconButton>
          </Tooltip>
        </div>
        <div className='menu-item '>
          <Tooltip title='Change Theme'>
            <IconButton aria-label='Change Theme'>
              <ImSun className='icon' />
            </IconButton>
          </Tooltip>
        </div>
        <div className='menu-item md'>
          <Tooltip title='More'>
            <IconButton aria-label='More'>
              <BiDotsVertical className='icon' />
            </IconButton>
          </Tooltip>
        </div>
        <div className='menu-item'>
          <div className='dp'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
