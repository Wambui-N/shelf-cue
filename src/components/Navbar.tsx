"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, BookOpen, BarChart3, MessageSquare, FileText, Layers, X } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const Navbar = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/crm-tools", label: "CRM Tools", icon: <BarChart3 className="h-4 w-4 mr-2" /> },
    { href: "/marketing-automation", label: "Marketing Automation", icon: <Layers className="h-4 w-4 mr-2" /> },
    { href: "/blog", label: "Blog", icon: <BookOpen className="h-4 w-4 mr-2" /> },
  ]

  const resourcesItems = [
    { href: "/resources/guides", label: "Guides" },
    { href: "/resources/templates", label: "Templates" },
    { href: "/resources/webinars", label: "Webinars" },
    { href: "/resources/case-studies", label: "Case Studies" },
  ]

  const comparisonsItems = [
    { href: "/comparison/hubspot-vs-activecampaign", label: "HubSpot vs. ActiveCampaign" },
    { href: "/comparison/kajabi-vs-teachable", label: "Kajabi vs. Teachable" },
  ]

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-white shadow-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-[#2A5BDA] font-bold text-xl transition-transform hover:scale-105"
            >
              <div className="bg-[#2A5BDA] text-white p-1.5 rounded-md">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span>ShelfCue</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center",
                  pathname === item.href
                    ? "text-[#2A5BDA] bg-blue-50"
                    : "text-gray-600 hover:text-[#2A5BDA] hover:bg-blue-50/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center",
                    pathname?.startsWith("/comparison")
                      ? "text-[#2A5BDA] bg-blue-50"
                      : "text-gray-600 hover:text-[#2A5BDA] hover:bg-blue-50/50"
                  )}
                >
                  Comparisons
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {comparisonsItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link 
                      href={item.href}
                      className={cn(
                        "w-full cursor-pointer",
                        pathname === item.href && "text-[#2A5BDA] font-medium"
                      )}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center",
                    pathname?.startsWith("/resources")
                      ? "text-offwhite bg-blue-50"
                      : "text-offwhite hover:bg-orange hover: text-offwhite"
                  )}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {resourcesItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link 
                      href={item.href}
                      className={cn(
                        "w-full cursor-pointer",
                        pathname === item.href && "text-[#2A5BDA] font-medium"
                      )}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex justify-between items-center mb-8">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2 text-[#2A5BDA] font-bold text-xl"
                  >
                    <div className="bg-[#2A5BDA] text-white p-1.5 rounded-md">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <span>ShelfCue</span>
                  </Link>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>
                <div className="flex flex-col space-y-3 py-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link 
                        href={item.href} 
                        className={cn(
                          "flex items-center px-4 py-3 rounded-md text-sm font-medium transition-all",
                          pathname === item.href
                            ? "text-[#2A5BDA] bg-blue-50"
                            : "text-gray-600 hover:text-[#2A5BDA] hover:bg-blue-50/50"
                        )}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  
                  <div className="px-4 py-2">
                    <div className="text-sm font-medium text-gray-500 mb-2">Comparisons</div>
                    <div className="pl-4 flex flex-col space-y-2">
                      {comparisonsItems.map((item) => (
                        <SheetClose key={item.href} asChild>
                          <Link 
                            href={item.href}
                            className={cn(
                              "text-sm py-2 transition-colors",
                              pathname === item.href
                                ? "text-[#2A5BDA] font-medium"
                                : "text-gray-600 hover:text-[#2A5BDA]"
                            )}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-4 py-2">
                    <div className="text-sm font-medium text-gray-500 mb-2">Resources</div>
                    <div className="pl-4 flex flex-col space-y-2">
                      {resourcesItems.map((item) => (
                        <SheetClose key={item.href} asChild>
                          <Link 
                            href={item.href}
                            className={cn(
                              "text-sm py-2 transition-colors",
                              pathname === item.href
                                ? "text-[#2A5BDA] font-medium"
                                : "text-gray-600 hover:text-[#2A5BDA]"
                            )}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
