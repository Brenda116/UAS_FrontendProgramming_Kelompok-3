"use client";

import React from "react";
import { useState } from "react";

export default function SignUpPage() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"error" | "success" | "">("");
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        const email = form.get("email") as string | null;
        const password = form.get("password") as string | null;
        const confirm = form.get("confirm") as string | null;
        const name = form.get("name") as string | null;
        const phone = form.get("phone") as string | null;
        
        setMessage("");
		setStatus("");

        if (!email || !password || !confirm || !name || !phone) {
            setMessage("All fields must be filled in!");
			setStatus("error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Email format invalid");
            setStatus("error");
            return;
        }

        if (password.length < 8) {
            setMessage("Password must be at least 8 characters");
            setStatus("error");
            return;
        }

        if (password !== confirm) {
            setMessage("Password and confirmation do not match");
            setStatus("error");
            return;
        }

        const phoneRegex = /^[0-9]{10,16}$/;
        if (!phoneRegex.test(phone)) {
            setMessage("Phone number must be numeric and 10-16 digits");
            setStatus("error");
            return;
        }

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, name, phone }),
        });

        const json = await res.json();

        if (!res.ok) {
            setMessage(json.error || "Registration failed");
            setStatus("error");
            return;
        }

        setMessage("Registration successful!");
        setStatus("success");

        setTimeout(() => {
            window.location.href = "/login";
        }, 800);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/images/signUpWall.png')] bg-cover bg-center bg-no-repeat">
            <main className="w-[90%] max-w-3xl mx-auto p-8 bg-black/30 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-8">
                <div className="hidden sm:flex w-full sm:w-2/5 justify-start">
                    <img
                        src="/images/login.jpg"
                        alt="Sign Up"
                        className="w-48 sm:w-72 object-contain"
                    />
                </div>
                <div className="w-full sm:w-3/5 text-(--cream)">
                    <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
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
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
                        <input
                            name="confirm"
                            className="border p-3 rounded bg-white/20"
                            placeholder="Confirm Password"
                            type="password"
                        />
                        <input
                            name="name"
                            className="border p-3 rounded bg-white/20"
                            placeholder="Full Name"
                            type="text"
                        />
                        <input
                            name="phone"
                            className="border p-3 rounded bg-white/20"
                            placeholder="Phone Number"
                            type="tel"
                        />
                        <button className="bg-(--green) text-(--white) py-3 rounded cursor-pointer">
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        Already have an account?
                        <a href="/login" className="text-(--green-light)"><strong> Login</strong></a>
                    </p>
                    <div className="mt-6 text-center text-sm text-(--cream)">
                        © 2025 NOTTE AZZURA | All rights reserved.
                    </div>
                </div>
            </main>
        </div>
    );
}