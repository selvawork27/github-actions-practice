export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg text-gray-600">This is the main content of the home page.</p>
      <h2 className="text-2xl font-semibold mt-8">Features</h2>
      <ul className="mt-4 list-disc list-inside text-gray-700">
        <li>Feature 1: Description of feature 1.</li>
        <li>Feature 2: Description of feature 2.</li>
        <li>Feature 3: Description of feature 3.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8">Get Started</h2>
      <p className="mt-4 text-lg text-gray-600">To get started, follow the instructions below:</p>
      <ol className="mt-4 list-decimal list-inside text-gray-700">
        <li>Step 1: Do this first.</li>
        <li>Step 2: Then do this.</li>
        <li>Step 3: Finally, do this.</li>
      </ol>
    </main>
  );
}