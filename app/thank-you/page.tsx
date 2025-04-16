'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '../components/Layout';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (!sessionId) {
      setError('No session ID found');
      return;
    }

    const fetchDownloadUrl = async () => {
      try {
        const response = await fetch(`/api/get-download-url?session_id=${sessionId}`);
        const data = await response.json();
        
        if (data.downloadUrl) {
          setDownloadUrl(data.downloadUrl);
        } else {
          setError('Unable to retrieve download URL');
        }
      } catch (err) {
        setError('An error occurred while processing your download');
      }
    };

    fetchDownloadUrl();
  }, [searchParams]);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-50 to-green-100 mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-medium text-gray-900 mb-4">
            Purchase Complete
          </h1>
          <p className="text-lg text-gray-600">
            Your wallpapers are ready to download
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-8 py-10">
            {downloadUrl ? (
              <div className="text-center">
                <a
                  href={downloadUrl}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-200 shadow-sm"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Wallpapers
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  Your download will start automatically
                </p>
              </div>
            ) : error ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-red-600 mb-2">{error}</p>
                <p className="text-sm text-gray-500">
                  Please contact support if you need help
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6">
                  <svg className="w-8 h-8 text-gray-600 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600">Preparing your download...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 