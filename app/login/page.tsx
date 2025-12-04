"use client";

import React from "react";
import { useState } from "react";

export default function LoginPage() {
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<"error" | "success" | "">("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const form = new FormData(e.currentTarget);

        const email = form.get("email") as string | null;
        const password = form.get("password") as string | null;
		setMessage("");
		setStatus("");

        if (!email || !password) {
            setMessage("All fields must be filled in!");
			setStatus("error");
            return;
        }

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			setMessage("Email format invalid!");
			setStatus("error");
			return;
		}

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const json = await res.json();

        if (!res.ok) {
            setMessage("Incorrect email or password!");
			setStatus("error");
            return;
        }

		setMessage("Login successful!");
		setStatus("success");
        
        localStorage.setItem("token", json.token);
        document.cookie = `token=${json.token}; path=/;`;

        setTimeout(() => {
			window.location.href = "/";
		}, 800);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/images/loginWall.png')] bg-cover bg-center bg-no-repeat">
            <main className="w-[90%] max-w-3xl mx-auto p-8 bg-black/30 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-8">
                <div className="hidden sm:flex w-full sm:w-2/5 justify-start">
                    <img
                        src="/images/login.jpg"
                        alt="Login"
                        className="w-48 sm:w-72 object-contain"
                    />
                </div>
                <div className="w-full sm:w-3/5 text-(--cream)">
                    <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                    { message && (
						<div
                            className={`mb-4 text-center p-3 rounded font-semibold
                                ${status === "error" ? "border-red-500 border-1 bg-red-700/40 text-red-200" : ""}
                                ${status === "success" ? "border-green-500 border-1 bg-green-500/30 text-green-200" : ""}
                            `}
                        >
							{ message }
						</div>
					)}
					<form className="flex flex-col gap-4" onSubmit={ handleSubmit }>
                        <input
                            name="email"
                            className="border p-3 rounded bg-white/20"
                            placeholder="Email"
                            type="text"
                        />
                        <input
                            name="password"
                            className="border p-3 rounded bg-white/20"
                            placeholder="Password"
                            type="password"
                        />
                        <button className="bg-(--green) text-(--white) py-3 rounded cursor-pointer font-semibold">
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        Dont have an account yet?
                        <a href="/signUp" className="text-(--green-light)"><strong> Sign Up</strong></a>
                    </p>
                    <div className="mt-6 text-center text-sm text-(--cream)">
                        © 2025 NOTTE AZZURA | All rights reserved.
                    </div>
                </div>
            </main>
        </div>
    );
}