"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "./mobile-nav"

const navItems = [
  { href: "#company", label: "Company", sectionId: "company" },
  { href: "#approach", label: "Approach", sectionId: "approach" },
  { href: "#solutions", label: "Solutions", sectionId: "solutions" },
  { href: "#about", label: "Our story", sectionId: "about" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState<string>("company")

  const handleScroll = () => {
    const sections = navItems.map((item) => document.getElementById(item.sectionId)).filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    let mostVisibleSection = sections[0]
    let maxVisibility = 0

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const visibleTop = Math.max(0, rect.top)
      const visibleBottom = Math.min(windowHeight, rect.bottom)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)

      const visibility = visibleHeight / rect.height

      if (visibility > maxVisibility) {
        maxVisibility = visibility
        mostVisibleSection = section
      }
    })

    if (mostVisibleSection && mostVisibleSection.id !== activeSection) {
      setActiveSection(mostVisibleSection.id)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <MobileNav items={navItems} activeSection={activeSection} onNavigate={handleNavClick} />
      <nav className="desktop-nav">
        <div className="nav-wrapper">
          <Link href="/" className="nav-logo">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uUKedsE17DHcdxyNrIjBsHhW1OKAJR.svg"
              alt="Interlinear Logo"
              width={120}
              height={24}
              className="logo"
            />
          </Link>
          <div className="nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {isActive && <span className="nav-dot" />}
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

