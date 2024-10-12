import React from 'react';

interface BlogPreviewProps {
  setCurrentPage: (page: string) => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ setCurrentPage }) => {
  const blogPosts = [
    {
      title: "My Journey in Settlement Studies",
      excerpt: "Reflecting on my experiences and learnings in the field of settlement and integration.",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "The Impact of Community Service",
      excerpt: "How my involvement in various community initiatives has shaped my perspective.",
      date: "April 2, 2024",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Balancing Work and Studies",
      excerpt: "Tips and strategies for managing a part-time job while pursuing higher education.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="blog" className="py-16 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-[#0f3460] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setCurrentPage('blog')}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-[#ff6b6b] mb-4">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <span className="text-[#ff6b6b] hover:underline">Read more</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => setCurrentPage('blog')}
          className="bg-[#ff6b6b] text-white px-6 py-2 rounded-full hover:bg-[#ff8c8c] transition-colors duration-300 animate-pulse"
        >
          View All Blog Posts
        </button>
      </div>
    </section>
  );
};

export default BlogPreview;