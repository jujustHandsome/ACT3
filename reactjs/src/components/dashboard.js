import React, { useEffect, useState } from 'react';
import AuthUser from './AuthUser';

const Dashboard = () => {
  const { http } = AuthUser();
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await http.post('/me');
        setUserDetail(res.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [http]);

  const renderElement = () => {
    if (loading) {
      return <p>Loading.....</p>;
    }

    if (userDetail) {
      return (
        <div>
          <h4>Name</h4>
          <p>{userDetail.name}</p>
          <h4>Email</h4>
          <p>{userDetail.email}</p>
        </div>
      );
    }

    return <p>No user details available.</p>;
  };

  return (
    <div>
      <h1 className='mb-4 mt-4'>Dashboard page</h1>
      {renderElement()}
    </div>
  );
};

export default Dashboard;
