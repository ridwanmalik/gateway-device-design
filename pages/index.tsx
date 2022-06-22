import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start py-5">
      <Head>
        <title>Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full">
        <div className="container mx-auto">
          <h1 className="title text-xl font-medium mb-3">Geberit devices and gateways</h1>
          <div className="gateways space-y-4">
            <p className="company-name text-sm font-bold">Tammisaari</p>
            <div className="gateway-wrapper ml-4 flex items-center space-x-3 bg-gray-100 rounded">
              <a href="#" className="gateway-card block p-6 min-w-[15rem] max-w-sm bg-white rounded border shadow-md hover:bg-gray-100 border-l-8 border-green-700">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Gateway 1</h5>
                <p className="text-sm font-normal text-gray-700">status: online</p>
                <p className="text-sm font-normal text-gray-700">working properly</p>
              </a>
              <a href="#" className="device-card block p-4 min-w-[15rem] max-w-[20rem] bg-white rounded border shadow-md hover:bg-gray-100 border-l-8 border-green-700">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Lösare 1</h5>
                <p className="text-sm font-normal text-gray-700">Viscosity: 54 mPas​</p>
                <p className="text-sm font-normal text-gray-700">Device status: ok​</p>
              </a>
              <a href="#" className="device-card block p-4 min-w-[15rem] max-w-[20rem] bg-white rounded border shadow-md hover:bg-gray-100 border-l-8 border-red-600">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Blandare 2​</h5>
                <p className="text-sm font-normal text-gray-700">Offline</p>
                <p className="text-sm font-normal text-gray-700">Last seen 20.05.2022 12:12​</p>
              </a>
              <a href="#" className="device-card block p-4 min-w-[15rem] max-w-[20rem] bg-white rounded border shadow-md hover:bg-gray-100 border-l-8 border-yellow-400">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">FK3C</h5>
                <p className="text-sm font-normal text-gray-700">Viscosity 60 mPas</p>
                <p className="text-xs font-normal text-yellow-500">Viscosity exeeded the threshold value of 58 mPas​e</p>
                <p className="text-sm font-normal text-gray-700">Device status: ok​</p>
              </a>
              <a href="#" className="device-card block p-4 min-w-[15rem] max-w-[20rem] bg-white rounded border shadow-md hover:bg-gray-100 border-l-8 border-red-600">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Blandare 3</h5>
                <p className="text-sm font-normal text-gray-700">status: online</p>
                <p className="text-sm font-normal text-gray-700">working properly</p>
              </a>
            </div>
            <p className="company-name text-sm font-bold">Haldensleben</p>
            <div className="gateway-wrapper ml-4 flex items-center space-x-3 bg-gray-100 rounded">
              <a href="#" className="gateway-card block p-6 min-w-[15rem] max-w-sm bg-white rounded border shadow-md hover:bg-gray-100 border-l-8 border-red-600">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Gateway 2</h5>
                <p className="text-sm font-normal text-gray-700">Offline</p>
                <p className="text-sm font-normal text-gray-700">Last seen 20.05.2022 12:12​</p>
              </a>
              <a href="#" className="device-card block p-4 min-w-[15rem] max-w-[20rem] bg-white rounded border shadow-md hover:bg-gray-100 border-l-8 border-red-600">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Haldensleben Lab​​</h5>
                <p className="text-sm font-normal text-gray-700">Offline</p>
                <p className="text-sm font-normal text-gray-700">Last seen 20.05.2022 12:12​</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
