import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/auth/signin')
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {session.user?.name}!</h2>
          <p className="text-gray-600 mb-4">
            This is a protected page that can only be accessed by authenticated users.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2">Your Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{session.user?.name || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{session.user?.email || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Next.js Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Server-side rendering</li>
              <li>Static site generation</li>
              <li>API routes</li>
              <li>File-based routing</li>
              <li>Built-in CSS support</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">TypeScript Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Static type checking</li>
              <li>Better IDE support</li>
              <li>Improved code quality</li>
              <li>Easier refactoring</li>
              <li>Self-documenting code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
