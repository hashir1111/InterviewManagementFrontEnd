import React from 'react';
import Navbar from './navbar';

const About = () => {
  return (
    <div>
      <Navbar />
     

      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-gray-700">
            At The Secure Solutions, our philosophy is centered around delivering high-quality software solutions
            that are secure, reliable, and tailored to meet the unique needs of our clients. We believe in
            fostering strong partnerships with our clients, understanding their business objectives, and
            leveraging the latest technologies to drive digital transformation. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla non arcu sed arcu mattis consequat. Quisque et sapien eu lectus
            ullamcorper lobortis. Nulla facilisi. Suspendisse potenti. Proin at commodo felis. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer condimentum elit
            non est scelerisque, sit amet lobortis lacus tincidunt. Donec eleifend elementum massa, nec faucibus
            sapien ultrices eu. Aliquam vitae lacinia ligula, in pellentesque mauris.
          </p>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700">
            Our team at The Secure Solutions consists of highly skilled and experienced professionals who are
            passionate about delivering exceptional software solutions. We have a diverse group of experts,
            including software engineers, web developers, UI/UX designers, project managers, and quality
            assurance specialists. Together, we work collaboratively to understand our clients' needs and
            provide customized solutions that meet their business objectives. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla non arcu sed arcu mattis consequat. Quisque et sapien eu lectus
            ullamcorper lobortis. Nulla facilisi. Suspendisse potenti. Proin at commodo felis. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer condimentum elit
            non est scelerisque, sit amet lobortis lacus tincidunt. Donec eleifend elementum massa, nec faucibus
            sapien ultrices eu. Aliquam vitae lacinia ligula, in pellentesque mauris.
          </p>
        </div>
      </section>

      <section className="bg-blue-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-700">
            At The Secure Solutions, we are guided by a set of core values that define our company culture and
            shape the way we work. These values include:
            <ul className="list-disc list-inside">
              <li>Excellence: We strive for excellence in everything we do, ensuring the highest quality of work.</li>
              <li>Innovation: We embrace innovation and continuously seek new and creative solutions.</li>
              <li>Collaboration: We believe in the power of collaboration and teamwork to achieve great results.</li>
              <li>Customer Satisfaction: We prioritize customer satisfaction and strive to exceed expectations.</li>
              <li>Integrity: We uphold the highest ethical standards and maintain transparency in our interactions.</li>
            </ul>
          </p>
        </div>
      </section>

      <section className="bg-gray-300 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-700">
            Over the years, we have had the privilege of working with a diverse range of clients, including
            startups, small and medium-sized businesses, and enterprise-level organizations. We are proud to have
            established long-lasting relationships with our clients, helping them achieve their digital objectives
            and driving their business growth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            arcu sed arcu mattis consequat. Quisque et sapien eu lectus ullamcorper lobortis. Nulla facilisi.
            Suspendisse potenti. Proin at commodo felis. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Integer condimentum elit non est scelerisque, sit amet lobortis lacus
            tincidunt. Donec eleifend elementum massa, nec faucibus sapien ultrices eu. Aliquam vitae lacinia
            ligula, in pellentesque mauris.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
