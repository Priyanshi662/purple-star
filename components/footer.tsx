import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  { name: "Blog", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Contact us", href: "/contact" },
  { name: "About", href: "#" },
  { name: "Privacy Policy", href: "#" },
]

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Purple</h3>
            <p className="text-gray-400">
              Bringing you the best in stationery and office supplies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-red-500 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Street Name, City, Country</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>info@purple.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to receive updates and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none flex-1"
              />
              <button className="px-4 py-2 bg-red-600 text-white rounded-r hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            ©2024 All Rights Reserved. Made with ❤️ by{" "}
            <Link href="#" className="text-red-500 hover:text-red-400">
              Purple
            </Link>{" "}
            & distributed by{" "}
            <Link href="#" className="text-red-500 hover:text-red-400">
              Priyanshi Jain
            </Link>
          </p>
        </div> */}
      </div>
    </footer>
  )
}