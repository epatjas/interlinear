"use client"

import type React from "react"

import { Nav } from "@/components/nav"
import { FileText, GitBranch, Link2, Linkedin, Mail, Phone, BrainCircuit, GraduationCap, HeartHandshake } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function Home() {
  // Handle click on "Let's talk" button
  const handleLetsTalkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      })
    }
  }

  // Handle hash in URL on page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="main-container">
      {/*CTA button*/}
      <div className="cta-button-container">
        <a
          href="#contact"
          onClick={handleLetsTalkClick}
          className="talk-button"
        >
          Let's talk
        </a>
      </div>

      <Nav />

      {/* Company Section */}
      <section id="company" className="company-section">
        <div className="company-content">
          <div className="company-header">
            <span className="section-label">COMPANY</span>
            <h1 className="company-heading">About</h1>
            <p className="company-description">
              Interlinear is an educational technology company. Our mission is to bridge the gap between traditional
              learning materials and personalized digital experiences, making learning more accessible and effective for
              everyone.
            </p>
          </div>

          <div className="company-image-container">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e_patjas_httpss.mj.runfl-WbQqvxx0_Capture_a_contemplative_back__c587d705-660f-4f90-8436-3bd5b1f4159f.png-SuitpfrLspk52J95SOeP318a4hPCjO.jpeg"
              alt="Person standing contemplatively in front of a geometric window with natural light"
              width={1200}
              height={675}
              className="company-image"
              priority
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="approach-section">
        <div className="approach-content">
          <div className="approach-grid">
            <div className="approach-text">
              <span className="section-label">TECHNOLOGY APPROACH</span>
              <h2 className="approach-heading">
                Learning lives
                <br />
                between the lines
              </h2>
              <div className="approach-description">
                <p>
                We believe AI has the power to fundamentally transform education for the better, but only if it's designed with the needs of real learners in mind. We aim to harness AI to develop capable, independent thinkers.
                </p>
                <p>
                We build technology that that foster critical thinking through guided exploration, prioritizing deep conceptual understanding over convenient shortcuts. 
                </p>
              </div>
            </div>
            <div className="approach-image-container">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_technology-ZkQsSMu5PJqL7aLLVVNb6BaLPhKbJ7.png"
                alt="Technology visualization - Abstract green energy pattern"
                width={600}
                height={600}
                className="approach-image"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <GraduationCap />
              </div>
              <p className="feature-text">
              Designed for education first so AI becomes a learning partner, not just a shortcut
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <HeartHandshake />
              </div>
              <p className="feature-text">
              We create tools children can benefit from instead of leaving them behind in the AI revolution
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <BrainCircuit />
              </div>
              <p className="feature-text">
              Respect that students learn differently and need different kinds of support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="solutions-content">
          <div className="solutions-header">
            <span className="section-label">WHAT WE'VE BUILT</span>
            <h2 className="solutions-heading">Our solutions</h2>
          </div>
          <div className="solutions-grid">
            <div className="solution-item">
              <Image
                src="/image_lexie.png"
                alt="LexieLearn app interface"
                width={600}
                height={600}
                className="solution-image"
              />
              <h3 className="solution-title">LexieLearn</h3>
              <p className="solution-description">
                Lexie lets students take any printed material, digitize it, and turn it into interactive study tools
                that provide immediate feedback and active learning opportunities with the help of AI.
              </p>
              <a
                href="https://www.lexielearn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="solution-button"
              >
                Meet Lexie
              </a>
            </div>
            <div className="solution-item">
              <Image
                src="/image_yomi.png"
                alt="Yomi app interface"
                width={600}
                height={600}
                className="solution-image"
              />
              <h3 className="solution-title">Yomi</h3>
              <p className="solution-description">
                A reading companion that tracks comprehension in real-time and adapts to each student's needs. Provides
                immediate feedback and turns reading practice into a motivating experience.
              </p>
              <a
                href="https://www.helloyomi.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="solution-button"
              >
                Meet Yomi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="story-section">
        <div className="story-content">
          <div className="story-grid">
            <div className="story-image-container">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_story-AW5ODASv2QZY62T7ZiYzCk79uU4vPg.png"
                alt="Founder portrait"
                width={600}
                height={600}
                className="story-image"
              />
            </div>
            <div className="story-text">
              <span className="section-label">FOUNDER & VISION</span>
              <h2 className="story-heading">The story behind Interlinear</h2>
              <div className="story-description">
                <p>I started Interlinear after seeing a fundamental problem in education: Learning is deeply personal,
                  yet our educational systems can't scale individual attention. In a classroom with 30 students and one
                  teacher, many learners inevitably fall through the cracks - either moving too slowly or too quickly
                  through material they don't fully grasp.</p>
                <p>My background in educational technology showed me that despite our best efforts, traditional
                  approaches weren't solving this problem. Technology was supposed to be the answer, but neither teachers nor traditional educational software have
                  successfully provided all learners with consistent, personalized, insightful feedback at scale.</p>
                <p>Now, with advances in AI, we're at a turning point. I've built Lexie and Yomi to make this technology
                  accessible to all students in a simple, approachable format.</p>
              </div>
              <div className="founder-info">
                <p className="founder-name">Elina Patjas, Founder & CEO</p>
                <a
                  href="https://www.linkedin.com/in/elinapatjas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-linkedin"
                >
                  <Linkedin className="linkedin-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-heading">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <a
                href="mailto:elina.patjas@interlinear.tech"
                className="contact-link"
              >
                elina.patjas@interlinear.tech
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <p className="contact-text">+358 50 408 67 22</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

