import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Footer.scss';
function Footer(props) {
    let timer = null
    const [time, setTime] = useState(moment());
    useEffect(() => {
        timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <div className=''>
                { time.format('YYYY년MM월DD일') }
            </div>
            <div className=''>{ time.format('HH시mm분ss초')}</div>
        </div>
    )
}

export default Footer;