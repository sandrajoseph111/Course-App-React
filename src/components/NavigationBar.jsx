import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "rgba(116, 25, 110, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(119, 26, 26, 0.3)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold fs-3"
            href="/"
            style={{ color: "#4F46E5" }}
          >
            📚 Course App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link fw-semibold px-3"
                href="/"
                style={{ color: "#333" }}
              >
                📝 Register
              </a>

              <a
                className="nav-link fw-semibold px-3"
                href="/vi"
                style={{ color: "#333" }}
              >
                📖 View Courses
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar