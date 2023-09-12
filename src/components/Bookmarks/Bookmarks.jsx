import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='bg-gray-300 ml-6 p-4 text-center rounded-xl'>
                <h3 className='text-3xl text-blue-600/100'>Reading Time: {readingTime}</h3>
            </div>
            <div className='bg-gray-300 ml-6 mt-6 p-4 rounded-xl'>
                <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;