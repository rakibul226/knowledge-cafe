import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,reading_time,author,author_img,posted_date,hashtag}= blog;
    return (
        <div className='my-3'>
            <img src={cover} alt={`Title of the cover ${title}`} />
                <div className='flex justify-between p-2'>
                    <div className='flex gap-2'>
                        <img className='w-12' src={author_img} alt="" />
                        <div className='gap-1'>
                            <h3>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <h4>{reading_time} min read</h4>
                    </div>
                </div>
            <h2 className='text-3xl'>{title}</h2>
            <div className=''>
                <h5>{hashtag}</h5> 
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;