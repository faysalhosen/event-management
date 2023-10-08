

const ErrorPage = () => {
    return (
        <div>
             <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-semibold text-gray-800">404 - Page Not Found</h1>
        <p className="text-gray-600 text-lg mt-4">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Return to Homepage</a>
    </div>
        </div>
    );
};

export default ErrorPage;