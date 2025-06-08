"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  MessageSquare,
  DollarSign,
  Building,
  FileText,
  Package,
  UserCheck,
  BookOpen,
  Bus,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContactForm } from "./components/contact-form"

export default function EdTechLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const bannerSlides = [
    {
      title: "Transform Education with AI-Powered School Management",
      subtitle: "Streamline operations, enhance learning, and connect communities",
      image: "/placeholder.svg?height=600&width=800&text=AI+Powered+School+Management+Dashboard",
    },
    {
      title: "Comprehensive Academic Management System",
      subtitle: "From admissions to assessments, manage everything seamlessly",
      image: "/placeholder.svg?height=600&width=800&text=Academic+Management+System+Interface",
    },
    {
      title: "Smart Communication & Collaboration Platform",
      subtitle: "Bridge the gap between teachers, students, and parents",
      image: "/placeholder.svg?height=600&width=800&text=Communication+Platform+Screenshot",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Administration",
      description: "Complete administrative control with user management, permissions, and system configuration.",
      color: "bg-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Academics",
      description: "Curriculum management, lesson planning, grading, and academic performance tracking.",
      color: "bg-green-500",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Seamless communication between teachers, students, and parents with real-time messaging.",
      color: "bg-purple-500",
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Fee management, payment tracking, financial reporting, and budget planning.",
      color: "bg-yellow-500",
    },
    {
      icon: Building,
      title: "Hostel",
      description: "Hostel management with room allocation, attendance, and facility maintenance.",
      color: "bg-red-500",
    },
    {
      icon: FileText,
      title: "CBT (Computer Based Testing)",
      description: "Create, conduct, and evaluate online assessments with automated grading.",
      color: "bg-indigo-500",
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Track and manage school assets, supplies, and equipment efficiently.",
      color: "bg-orange-500",
    },
    {
      icon: UserCheck,
      title: "Human Resources",
      description: "Staff management, payroll, attendance, and performance evaluation systems.",
      color: "bg-teal-500",
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Digital library management with book cataloging, issuing, and return tracking.",
      color: "bg-pink-500",
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Route management, vehicle tracking, and student transportation coordination.",
      color: "bg-cyan-500",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [bannerSlides.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-VQnRYCsTpYma9ucXlLvcz8IWCQ72nr.jpeg"
                alt="Success Guide Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-gray-800">Success Guide</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Login
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Features
                </Link>
                <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Login
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Register</Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Animated Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                  {bannerSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 animate-fade-in-delay">
                  {bannerSlides[currentSlide].subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span>Trusted by 500+ Schools</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={bannerSlides[currentSlide].image || "/placeholder.svg"}
                  alt="EdTech Platform"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-4 shadow-lg animate-pulse">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comprehensive School Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to manage your educational institution efficiently
              and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Success Guide</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a leading EdTech company focused on the betterment of education and school resource management.
                  Success Guide is our AI-enabled platform that serves as a unified solution for students, parents,
                  teachers, and school staff.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From comprehensive course management to effective teacher training programs, we facilitate seamless
                  communication and provide AI-based assessment tools to help students excel in their academic journey.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">AI-Powered Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Unified Platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Real-time Communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Comprehensive Reporting</span>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Students+Using+Digital+Learning+Platform"
                  alt="Students learning"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Teachers+Collaborating+Online"
                  alt="Teachers collaborating"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg mt-8"
                />
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Smart+Classroom+Technology"
                  alt="Digital classroom"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg -mt-8"
                />
                <Image
                  src="/placeholder.svg?height=300&width=300&text=School+Administration+Dashboard"
                  alt="School management"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your educational institution? Contact us today for a personalized demo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">contact@successguide.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-600">123 Education Street, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-2">Schedule a Demo</h3>
                <p className="mb-4">See how Success Guide can transform your institution</p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50">Book Demo Now</Button>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-VQnRYCsTpYma9ucXlLvcz8IWCQ72nr.jpeg"
                  alt="Success Guide Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold">Success Guide</span>
              </div>
              <p className="text-gray-400">
                Transforming education through innovative technology and comprehensive school management solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#features" className="block text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <div className="space-y-2">
                <span className="block text-gray-400">Administration</span>
                <span className="block text-gray-400">Academics</span>
                <span className="block text-gray-400">Communication</span>
                <span className="block text-gray-400">Finance</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <span className="block text-gray-400">Help Center</span>
                <span className="block text-gray-400">Documentation</span>
                <span className="block text-gray-400">Training</span>
                <span className="block text-gray-400">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center justify-center space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-4 pt-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SARWADNYA EDUTECH SOLUTIONS LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
