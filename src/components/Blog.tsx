import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "My Journey in Settlement Studies",
      excerpt: "Reflecting on my experiences and learnings in the field of settlement and integration.",
      date: "May 15, 2024"
    },
    {
      title: "The Impact of Community Service",
      excerpt: "How my involvement in various community initiatives has shaped my perspective.",
      date: "April 2, 2024"
    },
    {
      title: "Balancing Work and Studies",
      excerpt: "Tips and strategies for managing a part-time job while pursuing higher education.",
      date: "March 10, 2024"
    }
  ];

  return (
    <section id="blog" className="py-16 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-[#0f3460] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-[#ff6b6b] mb-4">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <a href="#" className="text-[#ff6b6b] hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;