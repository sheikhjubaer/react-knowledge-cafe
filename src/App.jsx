import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  // Declaring State for handling Bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // Eventhandler for Bookmarks
  const handleAddToBookmark = blog => {
    // console.log('Bookmark adding soon');
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // Declaring state for Reading time
  const [readingTime, setReadingTime] = useState(0);

  // Eventhandler for Reading Time
  const handleMarkAsRead = (id, time) => {
    console.log('Marked as Read ', time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // Remove the read blog from bookmarks
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
