import './Blog.css';
import BlogCard from './BlogCard/BlogCard';

function Blog() {
    document.title = 'FadhilAF - Blog Page';
    return (
        <div className="text-center">
            <p className="text-2xl font-bold m-8">Blog</p>
            <div className="m-auto title-desc">
                This is the place where I wanted to share something. Maybe like some topics
                or my school assignment that I proud of. And person with authentication could
                post a blog here too.
            </div>
            <div className="blog-container grid relative mx-auto my-6 px-4 py-6 rounded-xl">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Blog;