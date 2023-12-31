import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='mt-1 bg-slate-200 p-3'>
            <h3 className="text-2xl">{title}</h3>
            <hr />
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;