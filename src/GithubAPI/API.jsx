import React, { useEffect, useState } from 'react'
import './GithubAPI.css'
import Githubusers from './Githubusers';
import Loading from './Loading';
const API = () => {
    const [users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(true);
    const GetData = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            setUsers(await response.json())
            setLoading(false)
        } catch (error) {
            console.log('this is error', +error)
            setLoading(false)
        }
    }

    useEffect(() => {
        GetData()
    }, [])
    if (Loading) {
        <Loading />
    }
    return (
        <>
            <Githubusers users={users} />
        </>
    )
}

export default API