"use client"

import { PanelLeft, PanelRightClose } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface MobileNavProps {
  items: { href: string; label: string; sectionId: string }[]
  activeSection: string
  onNavigate: (href: string) => void
}

export function MobileNav({ items, activeSection, onNavigate }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setOpen(false)
    onNavigate(href)
  }

  return (
    <>
      {/* Fixed header */}
      <div className="mobile-header">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uUKedsE17DHcdxyNrIjBsHhW1OKAJR.svg"
          alt="Interlinear Logo"
          width={120}
          height={24}
          className="logo"
        />
        <button onClick={() => setOpen(!open)} className="menu-button">
          {open ? (
            <PanelRightClose className="icon" />
          ) : (
            <PanelLeft className="icon" />
          )}
        </button>
      </div>

      {/* Navigation drawer */}
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <div className="nav-content">
          {/* Logo in drawer */}
          <div className="nav-header">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uUKedsE17DHcdxyNrIjBsHhW1OKAJR.svg"
              alt="Interlinear Logo"
              width={120}
              height={24}
              className="logo"
            />
            <button
              onClick={() => setOpen(false)}
              className="close-button"
            >
              <PanelRightClose className="icon" />
            </button>
          </div>

          {/* Navigation items */}
          <nav className="nav-items">
            {items.map((item) => {
              const isActive = activeSection === item.sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                >
                  {isActive && <span className="active-dot" />}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Let's talk button */}
          <div className="talk-button-container">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
              className="talk-button"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

