import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with The Colombian Insider for collaborations, advertising, content corrections, or general enquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <div className="w-16 h-1 bg-teal-500 mb-8 rounded-full" />

      <p className="text-gray-600 text-lg mb-10">
        Have a question, collaboration proposal, or want to advertise with us? We would love to hear from you.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="subject">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">Select a subject</option>
            <option value="advertising">Advertising / Sponsorship</option>
            <option value="collaboration">Editorial collaboration</option>
            <option value="correction">Content correction</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
