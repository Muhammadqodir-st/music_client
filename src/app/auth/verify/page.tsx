import { Suspense } from "react"

export default function VerifyPage() {
    return (
        <Suspense fallback={<VerifyLoading />}>
            
        </Suspense>
    )
}

function VerifyLoading() {
    return (
        <div className="w-100 flex flex-col gap-8">
            <div className="mx-auto w-13 h-13 bg-gray-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.orgx/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 lucide lucide-mail-check-icon lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><path d="m16 19 2 2 4-4" /></svg>
            </div>

            <h1 className="text-3xl font-bold text-center">Verify your email</h1>

            <p className="text-center font-semibold">We are verifying your email. Please wait a moment while we complete the process</p>

            <div className="w-full bg-gray-900 rounded-full flex items-center py-3 px-5 gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full border-2 border-t-white animate-spin" />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-semibold text-white">
                        Verifying your account...
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Redirecting you now…
                    </p>
                </div>
            </div>
        </div>
    )
}