import React from 'react'

const Githubusers = ({ users }) => {
    return (
        <>

            <h1>GitHub Users Data</h1>
            <div className='cards'>
                {
                    users.map((currEle) => {
                        const { id, type, avatar_url, login, following_url } = currEle;
                        return (
                            <div className='card' key={id}>
                                <img src={avatar_url} alt='' />
                                <div className='udata'>
                                    <h3>{login}</h3>
                                    <p className='description'>{type}</p>
                                    <div className='other-data'>
                                        <div className='articles'>
                                            <span className='art'>Articles</span>
                                            <span className='num'>38</span>
                                        </div>
                                        <div className='followers'>
                                            <span className='art'>Followers</span>
                                            <span className='num'>38</span>
                                        </div>
                                        <div className='Ratings'>
                                            <span className='art'>Ratings</span>
                                            <span className='num'>38</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Githubusers