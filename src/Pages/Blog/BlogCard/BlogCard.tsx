import './BlogCard.css';

function BlogCard() {
    return (
        <div className="card grid">
            <div className="card-image block  bg-slate-800">
            </div>
            <div className="card-text block relative text-left px-2">
                <p className="category relative text-sm font-bold">PROGRAMMING</p>
                <div className="title block text-xl font-bold">How to reverse a linked list</div>
                <div className="description block text-xs">
                    The spoiler is, you do that by changing the .next value to the previous one +
                    unders buat limit
                </div>
                <hr className="line  my-1"/>
                <div className="profile h-max relative flex items-center">
                    <div className="profile-picture w-5 h-5 mr-2 rounded-xl"></div>
                    <span className="profile-name text-sm mr-1">Saetir Lujusaka Lee,</span>
                    <span className="post-date text-sm">23 Februari 2003</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;