import Link from 'next/link';
import Layout from '@/components/Layout';
import { UserGroupIcon, BuildingOffice2Icon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-yellow-50 py-12">
        <div className="bg-white/90 shadow-xl rounded-2xl p-10 max-w-3xl w-full mb-10 border border-gray-200">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center drop-shadow-sm">
            Welcome to the D&D Content Generator
          </h1>
          <p className="text-2xl text-gray-700 mb-6 text-center">
            Create rich, AI-assisted content for your D&D campaigns
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <Link
              href="/campaign/new"
              className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow"
            >
              Create Campaign
            </Link>
            <Link
              href="/campaign/list"
              className="inline-block bg-yellow-500 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors shadow"
            >
              Your Campaigns
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center">
            <UserGroupIcon className="h-10 w-10 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate NPCs</h3>
            <p className="text-gray-600 text-center">
              Create detailed non-player characters with rich backgrounds and personalities.
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center">
            <BuildingOffice2Icon className="h-10 w-10 text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Cities</h3>
            <p className="text-gray-600 text-center">
              Design vibrant cities with unique cultures, governments, and notable locations.
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center">
            <SparklesIcon className="h-10 w-10 text-purple-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Items</h3>
            <p className="text-gray-600 text-center">
              Generate magical items and artifacts with unique properties and histories.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
