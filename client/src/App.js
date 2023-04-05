import React from 'react';
import {Routes,Route} from 'react-router-dom' 
import HomeScreen from './Screens/HomeScreen'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'
import ContactUs from './Screens/ContactUs';
import MoviesPages from './Screens/Movies';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashbord/Profile';
import Aos from 'aos'
import Password from './Screens/Dashbord/Password';
import FavoritesMovies from './Screens/Dashbord/FavoritesMovies';
import MovieList from './Screens/Dashbord/Admin/MovieList';
import Dashboard from './Screens/Dashbord/Admin/Dashboard';
import Categories from './Screens/Dashbord/Admin/Categories';
import AddMovie from './Screens/Dashbord/Admin/AddMovie';
import Users from './Screens/Dashbord/Admin/Users';
import ToastContainer from "./Components/Notifications/ToastContainer"
import {ProtectedRouter , AdminProtectedRouter} from './ProtectedRouter'

function App() {
 Aos.init()
  return (
    <>
    <ToastContainer/>
    <Routes>
    
    <Route path ='/' element={<HomeScreen/>}/>
    <Route path ='/about-us' element={<AboutUs/>}/>
    <Route path ='/contact-us' element={<ContactUs/>}/>
    <Route path ='/login' element={<Login/>}/>
    <Route path ='/register' element={<Register/>}/>
    <Route path ='*' element={<NotFound/>}/>



    <Route element = {<ProtectedRouter/>}>
    <Route path ='/movies' element={<MoviesPages/>}/>
    <Route path ='/movie/:id' element={<SingleMovie/>}/>
    <Route path ='/watch/:id' element={<WatchPage/>}/>
    <Route path ='/profile' element={<Profile/>}/>
    <Route path ='/password' element={<Password/>}/>
    <Route path ='/favorites' element={<FavoritesMovies/>}/>
  
   <Route element={<AdminProtectedRouter/>}>
    <Route path ='/movieslist' element={<MovieList/>}/>
    <Route path ='/dashboard' element={<Dashboard/>}/>
    <Route path ='/categories' element={<Categories/>}/>
    <Route path ='/users' element={<Users/>}/>
    <Route path ='/addmovie' element={<AddMovie/>}/>
    </Route>
   </Route>
    </Routes>
    </>
  );
}

export default App;
