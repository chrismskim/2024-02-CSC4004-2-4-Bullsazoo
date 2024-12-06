// src/apis/userData.js

let userData = null; // 사용자 정보 저장소

export const setUserData = (data) => {
    userData = data;
};

export const getUserData = () => userData;
