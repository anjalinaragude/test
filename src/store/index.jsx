import { configureStore } from '@reduxjs/toolkit';
import skillReducer from '../store/slices/skillSlice';
import experienceReducer from "../store/slices/experienceSlice";
import aboutReducer from "../store/slices/aboutSlice";
import profilePhotoReducer from "../store/slices/imageSlice";
import  educationReducer from '../store/slices/educationSlice';
 import postReducer from "../store/slices/postSlice";
const store = configureStore({
  reducer: {
    skills: skillReducer,
    experience: experienceReducer,
    about: aboutReducer,
    profilePhoto: profilePhotoReducer,
    educations: educationReducer,
    post: postReducer
  
  },
});

export default store;
