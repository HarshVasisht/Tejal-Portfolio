import React, { useState } from 'react';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      title: "My Journey in Settlement Studies",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "The Impact of Community Service",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "April 2, 2024",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Balancing Work and Studies",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ]);

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={index} 
            className="bg-[#0f3460] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openPost(post)}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-[#ff6b6b] mb-4">{post.date}</p>
            <p className="line-clamp-3">{post.content}</p>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0f3460] p-6 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{selectedPost.title}</h3>
            <p className="text-sm text-[#ff6b6b] mb-4">{selectedPost.date}</p>
            <p className="mb-4">{selectedPost.content}</p>
            <button 
              onClick={closePost}
              className="bg-[#ff6b6b] text-white px-4 py-2 rounded hover:bg-[#ff8c8c] transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;