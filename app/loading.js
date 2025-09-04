// @flow strict

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1224] overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-violet-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-green-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-2 animate-pulse">
            aviral.tech
          </h1>
          <p className="text-gray-400 text-sm md:text-base tracking-wider">
            Loading Portfolio...
          </p>
        </div>

        {/* Loading animation */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-violet-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 mx-auto">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 via-violet-500 to-green-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-6">
          <p className="text-gray-500 text-xs md:text-sm animate-pulse">
            Initializing experience...
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-float-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}