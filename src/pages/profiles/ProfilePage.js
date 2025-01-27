import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';

const ProfilePage = ({profile_id}) => {

    const [profile, setProfile] = useState({});
    const {
        owner,
        name,
        bio,
        image,
        email,
        phone,
        created_at,
        updated_at,
    } = profile;

    useEffect(() => {
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/profiles/${profile_id}`);
          setProfile(data);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      handleMount();
    }, [profile_id]);

    
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage