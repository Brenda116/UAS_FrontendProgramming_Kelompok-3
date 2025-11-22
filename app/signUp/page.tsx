"use client";

export default function SignUpPage() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get("email") as string | null;
        const password = form.get("password") as string | null;
        const confirm = form.get("confirm") as string | null;
        const name = form.get("name") as string | null;
        const phone = form.get("phone") as string | null;

        if (!email || !password || !confirm || !name || !phone) {
            alert("Semua field wajib diisi!");
            return;
        }

        if (password !== confirm) {
            alert("Password tidak sama!");
            return;
        }

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, name, phone }),
        });

        const json = await res.json();

        if (!res.ok) {
            alert(json.error);
            return;
        }

        alert("Registrasi berhasil!");
        window.location.href = "/login";
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/images/signUpWall.png')] bg-cover bg-center bg-no-repeat">
            <main className="w-[90%] max-w-3xl mx-auto p-8 bg-black/30 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-8">

                {/* SIDE IMAGE */}
                <div className="hidden sm:flex w-full sm:w-2/5 justify-start">
                    <img
                        src="/images/login.jpg"
                        alt="Sign Up"
                        className="w-48 sm:w-72 object-contain"
                    />
                </div>

                {/* FORM */}
                <div className="w-full sm:w-3/5 text-(--cream)">
                    <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <input name="email" className="border p-3 rounded bg-white/20" placeholder="Email" type="email" />
                        <input name="password" className="border p-3 rounded bg-white/20" placeholder="Password" type="password" />
                        <input name="confirm" className="border p-3 rounded bg-white/20" placeholder="Confirm Password" type="password" />
                        <input name="name" className="border p-3 rounded bg-white/20" placeholder="Full Name" type="text" />
                        <input name="phone" className="border p-3 rounded bg-white/20" placeholder="Phone Number" type="number" />

                        <button className="bg-(--green) text-(--white) py-3 rounded cursor-pointer">
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center mt-4">
                        Already have an account?
                        <a href="/login" className="text-(--green-light)">
                            <strong> Login</strong>
                        </a>
                    </p>

                    <div className="mt-6 text-center text-sm text-(--cream)">
                        © 2025 NOTTE AZZURA | All rights reserved.
                    </div>

                </div>
            </main>
        </div>
    );
}