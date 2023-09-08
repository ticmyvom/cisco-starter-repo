import React, { useEffect, useState } from 'react';

function IpAddress({ ipAddressType }) {
    const [ipAddress, setIpAddress] = useState('');
    const ipifyURL = `https://api.ipify.org?format=json${ipAddressType === 'IPv6' ? '&ipv6=true' : ''}`;

    useEffect(() => {
        // Fetch the IP address data from ipify API
        fetch(ipifyURL)
            .then((response) => response.json())
            .then((data) => setIpAddress(data.ip))
            .catch((error) => console.error('Error fetching IP address:', error));
    }, [ipifyURL]);
    return (
        <div className="ip-address">
            {/* <h2>{ipAddressType} Address</h2> */}
            <p>{ipAddress}</p>
        </div>
    );
}

export default IpAddress;