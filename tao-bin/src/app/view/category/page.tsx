"use client"
import Category from "../../components/Category/Category"
import React from 'react'

function CategoryPage() {
    return (
        <div className='min-h-screen px-[40px] py-3 w-full text-center'>
            <h1 className='text-3xl mb-5'>Welcome To Tao Bin</h1>
            <h3 className='text-5xl mb-5'>Please select a drink type</h3>
            <Category/>
        </div>
    )
}

export default CategoryPage
