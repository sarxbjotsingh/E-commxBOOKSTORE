import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4">About Bookztron</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p className="text-gray-300">
            Founded in 2025, Bookztron emerged from a passion for storytelling
            and a desire to make books accessible to everyone, everywhere.
            <br />
            <br />
            What started as a small independent online bookstore has now evolved
            into one of the fastest-growing digital book destinations. We blend
            technology with the timeless joy of reading to give you a seamless,
            delightful, and personalized book shopping experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-300">
            <strong>
              Empowering readers through easy access to stories, knowledge, and
              ideas.
            </strong>
            <br />
            <br />
            We aim to make every reading journey enjoyable, affordable, and
            inspiring by offering a vast collection of books across all genres,
            languages, and interests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              📚 A curated collection of fiction, non-fiction, academic, and
              children’s books.
            </li>
            <li>💡 Personalized recommendations based on your preferences.</li>
            <li>🎁 Exclusive discounts, offers, and seasonal sales.</li>
            <li>🚚 Fast, eco-friendly, and reliable delivery.</li>
            <li>🤝 Dedicated customer support and easy returns.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-300">
            <strong>
              To be more than a bookstore. To be a community of readers,
              thinkers, and dreamers.
            </strong>
            <br />
            <br />
            We envision Bookztron as a digital space where stories connect
            people, ideas spark conversations, and every reader finds their next
            favorite book.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Join Our Community</h2>
          <p className="text-gray-300">
            Be part of our growing community of readers and book lovers. Follow
            us on social media, share your favorite books, and let's create a
            world where everyone loves to read.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-300 mb-2">
            📧 Email:{" "}
            <a
              href="mailto:support@bookztron.com"
              className="text-blue-400 underline"
            >
              sarxbjotsingh@gmail.com
            </a>
          </p>
          <p className="text-gray-300">📞 Phone: +918708094353</p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
