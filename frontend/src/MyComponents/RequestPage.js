import React from 'react'
import RequestItem from './RequestItem'

export default function RequestPage() {
    return (
        <>
        <h2 className="text-center mb-2 mt-2">Your Requests</h2>
        <div className="container py-4 bg-dark rounded">
            <RequestItem/>
            <RequestItem/>
        </div>
        </>
    )
}
