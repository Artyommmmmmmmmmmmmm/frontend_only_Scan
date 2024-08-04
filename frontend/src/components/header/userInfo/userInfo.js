import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import './userInfo.css';

const UserInfo = () => {
    const { store } = useContext(Context);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await store.info();
                setResponseData(response);        
            } catch (e) {
                setError(e);
            }
        };

        fetchData();
    }, [store]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!responseData) {
        return   <div>
                    <div className='user-info-cont-animation'>
                        <div className='animation-cont'>
                            <img className='animation' src={require('./icons8-спиннер,-кадр-5-100_1.png')}></img>
                        </div>
                    </div>
                </div>;
        
    }
    return (
        <div>
            <div className='user-info-cont'>
                <div className='stat'>Использовано компаний <span className='black-font'>{responseData.data.eventFiltersInfo.usedCompanyCount}</span></div>
                <div className='stat'>Лимит по компаниям <span className='green-font'>{responseData.data.eventFiltersInfo.companyLimit}</span></div>
            </div>
        </div>
    );
};

export default observer(UserInfo);
