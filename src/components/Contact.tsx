import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="bg-[#0f3460] p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 mr-4" />
          <p>t26tejal@gmail.com | tsingh77@norquest.ca</p>
        </div>
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 mr-4" />
          <p>780 716 5373</p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-4" />
          <p>Edmonton AB, T5T 7T4</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;