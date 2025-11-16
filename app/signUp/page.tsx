export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/images/wall5.jpg')] bg-cover bg-center bg-no-repeat">
            <main className="w-[90%] max-w-3xl mx-auto p-8 bg-black/20 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-8">
                <div className="w-full sm:w-2/5 flex justify-left">
                    <img
                        src="/images/login.jpg"
                        alt="Login"
                        className="w-48 sm:w-72 object-contain"
                    />
                </div>
                <div className="w-full sm:w-3/5 text-white">
                    <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
                    <form className="flex flex-col gap-3">
                        <input
                            className="border p-2 rounded"
                            placeholder="Email"
                            type="email"
                        />
                        <input
                            className="border p-2 rounded"
                            placeholder="Password"
                            type="password"
                        />
                        <input
                            className="border p-2 rounded"
                            placeholder="Confirm Password"
                            type="password"
                        />
                        <input
                            className="border p-2 rounded"
                            placeholder="Full Name"
                            type="text"
                        />
                        <input
                            className="border p-2 rounded"
                            placeholder="Phone Number"
                            type="number"
                        />
                        <button className="bg-(--green) text-(--white) py-2 rounded cursor-pointer">Login</button>
                    </form>
                    <div className="mt-4 text-center text-sm text-white">
                        © 2025 NOTTE AZZURA | All rights reserved.
                    </div>
                </div>
            </main>
        </div>
    );
}