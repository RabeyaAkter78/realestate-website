/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SolutionsCampaigns = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
         <div className="mb-16">
                <h3 className="text-2xl md:text-3xl text-black/80 font-semibold text-center mb-2"><span className='text-primary'>Solutions</span> for Every Type of Business <br />Sign Installation Companies</h3>
                <p className="text-gray-600 text-center mb-8 text-sm">Choose from three licensing options, all including branded apps for agents, installers, and administrators:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Insta Gold Card */}
                    <div className="rounded-xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-linear-to-br from-yellow-300 via-yellow-200 to-yellow-400">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Insta Gold®</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Entry-level package with more capability than many competitors' "full-function" systems
                        </p>
                    </div>
                    
                    {/* Insta Platinum Card */}
                    <div className="rounded-xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 relative bg-linear-to-br from-gray-100 via-gray-200 to-gray-300">
                        <div className="absolute top-4 right-4 bg-blue-400 text-white px-2 py-0.5 rounded text-xs font-medium">
                            Popular
                        </div>
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Insta Platinum</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Our most popular option, ideal for established businesses and those transitioning from other platforms.
                        </p>
                    </div>
                    
                    {/* Insta Diamond Card */}
                    <div className="rounded-xl p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-linear-to-br from-cyan-200 via-cyan-100 to-cyan-300">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Insta Diamond®</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Advanced solution for high-volume operations requiring priority support, advanced APIs, and enterprise-level functionality.
                        </p>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default SolutionsCampaigns;