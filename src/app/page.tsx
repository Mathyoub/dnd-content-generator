import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to the D&D Content Generator
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Create rich, AI-assisted content for your D&D campaigns
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Start a New Campaign
            </h2>
            <p className="text-gray-600 mb-6">
              Create a new campaign and generate content tailored to your setting and theme.
            </p>
            <Link
              href="/campaign/new"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Campaign
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate NPCs</h3>
              <p className="text-gray-600">
                Create detailed non-player characters with rich backgrounds and personalities.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Cities</h3>
              <p className="text-gray-600">
                Design vibrant cities with unique cultures, governments, and notable locations.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Items</h3>
              <p className="text-gray-600">
                Generate magical items and artifacts with unique properties and histories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
