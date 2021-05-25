import React, { useState } from 'react';
import UserProfileComponent from 'modules/admin/userProfile/UserProfileComponent';

const UserProfileContainer = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userDetails'));

  const [changePassVisible, setChangePassVisible] = useState(false);
  const [editProfileVisible, setEditProfileVisible] = useState(false);

  return (
    <UserProfileComponent
      profileDetails={profileDetails}
      changePassVisible={changePassVisible}
      setChangePassVisible={setChangePassVisible}
      editProfileVisible={editProfileVisible}
      setEditProfileVisible={setEditProfileVisible}
    />
  );
};

export default React.memo(UserProfileContainer);
