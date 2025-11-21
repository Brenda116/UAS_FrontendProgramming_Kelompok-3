export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/images/signUpWall.png')] bg-cover bg-center bg-no-repeat">
            <main className="w-[90%] max-w-3xl mx-auto p-8 bg-black/30 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-8">
                <div className="hidden sm:flex w-full sm:w-2/5 justify-start">
                    <img
                        src="/images/login.jpg"
                        alt="Login"
                        className="w-48 sm:w-72 object-contain"
                    />
                </div>
                <div className="w-full sm:w-3/5 text-(--cream)">
                    <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
                    <form className="flex flex-col gap-3">
                        <input
                            className="border p-3 rounded bg-white/20"
                            placeholder="Email"
                            type="email"
                        />
                        <input
                            className="border p-3 rounded bg-white/20"
                            placeholder="Password"
                            type="password"
                        />
                        <input
                            className="border p-3 rounded bg-white/20"
                            placeholder="Confirm Password"
                            type="password"
                        />
                        <input
                            className="border p-3 rounded bg-white/20"
                            placeholder="Full Name"
                            type="text"
                        />
                        <input
                            className="border p-3 rounded bg-white/20"
                            placeholder="Phone Number"
                            type="number"
                        />
                        <button className="bg-(--green) text-(--white) py-3 rounded cursor-pointer">Sign Up</button>
                    </form>
                    <p className="text-center mt-4">Already have an account? <a href="/login" className="text-(--green-light)"><strong>Login</strong></a></p>
                    <div className="mt-6 text-center text-sm text-(--cream)">
                        © 2025 NOTTE AZZURA | All rights reserved.
                    </div>
                </div>
            </main>
        </div>
    );
}