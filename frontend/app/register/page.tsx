"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully! 🎉");

        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      setMessage("Cannot connect to server");
    }
  };

  return (
    <main className="register-page">
      <div className="register-container">

        {/* LEFT IMAGE SECTION */}
        <section className="register-image">
          <div className="login-image">
            <img src="/login1.jpg" alt="Login" />
          </div>

          <div className="image-overlay"></div>

          <div className="image-content">
            <div className="brand-small">
              ✦ CREATE
            </div>

            <h1>
              Build your
              <br />
              <span>creative</span>
              <br />
              journey.
            </h1>

            <p>
              Create your account and start
              <br />
              exploring a world of possibilities.
            </p>

            <div className="image-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </section>

        {/* RIGHT FORM SECTION */}
        <section className="register-form-section">

          <div className="register-form">

            <div className="top-language">
              English (USA) ▾
            </div>

            <div className="form-header">
              <p className="welcome-label">
                WELCOME 👋
              </p>

              <h2>Create an account</h2>

              <p className="account-text">
                Already have an account?{" "}
                <Link href="/login">
                  Sign in
                </Link>
              </p>
            </div>

            <form onSubmit={handleRegister}>

              {/* NAME */}
              <div className="input-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="input-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="input-group">
                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                  minLength={6}
                />

                <small>
                  Password must contain at least 6 characters
                </small>
              </div>

              {/* TERMS */}
              <div className="terms-row">
                <input
                  type="checkbox"
                  id="terms"
                  required
                />

                <label htmlFor="terms">
                  I agree to the{" "}
                  <span>Terms & Conditions</span>
                </label>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="register-button"
              >
                Create Account
                <span>→</span>
              </button>

            </form>

            {/* MESSAGE */}
            {message && (
              <div className="register-message">
                {message}
              </div>
            )}

            {/* OR */}
            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="google-button"
            >
              <span className="google-letter">
                G
              </span>

              Continue with Google
            </button>

            <p className="bottom-text">
              Your information is securely protected.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}