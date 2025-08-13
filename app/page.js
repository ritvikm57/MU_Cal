'use client';

export default function Home() {
  const publicCalendarUrl = 'webcal://p139-caldav.icloud.com/published/2/MTAxOTUxMDU0MjcxMDE5NavZ7iKCKPKsCuQJLEiddpdhZkbUV1N_3oVeoI2YTl2-OWQFvpVALRcPhpFZmoPxX7EmeiPDIuJS7NbSFZpEbx4';

  const handleSubscribe = () => {
    window.open(publicCalendarUrl, '_blank');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(publicCalendarUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-12 text-center max-w-md w-full relative z-10 transform hover:scale-105 transition-all duration-300">
        
        {/* Icon with glow effect */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur opacity-50 animate-pulse"></div>
          <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Title with gradient text */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4 tracking-tight">
          CSE-3 Class
        </h1>
        
        {/* Details with enhanced styling */}
        <div className="text-gray-600 mb-10 space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <p className="text-lg font-medium">Year-2</p>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
            <p className="text-lg font-medium">Sem-1</p>
          </div>
        </div>

        {/* Enhanced Subscribe Button */}
        <button 
          onClick={handleSubscribe}
          className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <div className="flex items-center justify-center space-x-3 relative z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-lg">Subscribe to Calendar</span>
          </div>
        </button>

        {/* Enhanced Note */}
        <p className="text-sm text-gray-500 mt-8 leading-relaxed font-medium">
          ✨ Get automatic updates for cancellations & changes
        </p>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-indigo-400 rounded-full opacity-40 animate-bounce delay-300"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-300 rounded-full opacity-60 animate-bounce delay-700"></div>
        <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce delay-1000"></div>
      </div>
    </div>
  );
}
