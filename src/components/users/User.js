import React, { useEffect, Fragment } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Repos from '../repos/Repos'
import Spinner from '../layout/Spinner';

 const User = ({ user, loading, getUser, getUserRepos, repos, match})=> {

  useEffect(()=>{
    getUser(match.params.login)
    getUserRepos(match.params.login)

    //bez praznog arraya useEffect bi se stalno vrtio u petlji
    //eslint-disable-next-line
  }, []);


        const {
        name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            twitter_username   
        } = user


        if (loading) return <Spinner />;
    
        return (
          <Fragment>
            <Link to='/' className='btn btn-light'>
              Povratak na pretraživanje
            </Link>
            Dostupnost: 
            {hireable ? (
              <i className='fas fa-check text-success' />
            ) : (
              <i className='fas fa-times-circle text-danger' />
            )}
            <div className='card grid-2'>
              <div className='all-center'>
                <img
                  src={avatar_url}
                  className='round-img'
                  alt=''
                  style={{ width: '150px' }}
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
              <div>
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <a href={html_url} className='btn btn-dark my-1'>
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username: </strong> {login}
                      </Fragment>
                    )}
                  </li>
    
                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company: </strong> {company}
                      </Fragment>
                    )}
                  </li>

                  <li>
                    {twitter_username && (
                      <Fragment>
                        <strong>Twitter: </strong> {company}
                      </Fragment>
                    )}
                  </li>
    
                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Website: </strong> {blog}
                      </Fragment>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className='card text-center'>
              <div className='badge badge-primary'>Followers: {followers}</div>
              <div className='badge badge-success'>Following: {following}</div>
              <div className='badge badge-light'>Public Repos: {public_repos}</div>
              <div className='badge badge-dark'>Public Gists: {public_gists}</div>
            </div>
            <div className='card grid-2'>
                <h2 className="naslov-repozitorija">Zadnji repozitoriji:</h2>
                
            </div>
            <div className='card grid-2'>
                  <Repos repos={repos}/>
            </div>
          
          </Fragment>
        );
      
    }
    User.propTypes = {
      loading: PropTypes.bool,
      user: PropTypes.object.isRequired,
      repos: PropTypes.array.isRequired,
      getUser: PropTypes.func.isRequired,
      getUserRepos: PropTypes.func.isRequired
    };

    export default User;