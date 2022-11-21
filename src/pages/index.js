import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';

function Pages(props) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
    );
}

export default Pages;