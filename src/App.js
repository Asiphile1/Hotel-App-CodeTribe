import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AccommodationList from './components/Accomodation/AccomodationList';
import AccommodationDetail from './components/Accomodation/AccomodationDetails';
import BookingForm from './components/Booking/BookingForm';
import UserProfile from './components/Profile/UserProfile';
import AdminDashboard from './components/Admin/AdminDashboard';
import Navbar from './components/Navbat'; 



function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        
        
        <Route 
          path="/" 
          element={
            <Layout>
              <AccommodationList />
            </Layout>
          } 
        />
        <Route 
          path="/accommodation/:id" 
          element={
            <Layout>
              <AccommodationDetail />
            </Layout>
          } 
        />
        <Route 
          path="/booking" 
          element={
            <Layout>
              <BookingForm />
            </Layout>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <Layout>
              <UserProfile />
            </Layout>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;










// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import AccommodationList from './components/Accomodation/AccomodationDetails';
// import AccommodationDetail from './components/Accomodation/AccomodationDetails';
// import BookingForm from './components/Booking/BookingForm';
// import UserProfile from './components/Profile/UserProfile';
// import AdminDashboard from './components/Admin/AdminDashboard';
// // import Navbar from './components/Navbat'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<AccommodationList />} />
//         <Route path="/accommodation/:id" element={<AccommodationDetail />} />
//         <Route path="/booking" element={<BookingForm />} />
//         <Route path="/profile" element={<UserProfile />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
