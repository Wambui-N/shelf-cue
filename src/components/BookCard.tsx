"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Book } from "@/types/book"
import { convertAmazonImageUrl } from "@/utils/imageUtils"
import { Star, ShoppingCart } from "lucide-react"

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const imageUrl = convertAmazonImageUrl(book.image_url)

  // Generate array of stars based on rating
  const renderRating = () => {
    const stars = []
    const rating = Math.round(book.rating)

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "fill-blush-pink text-blush-pink" : "text-muted-charcoal/30"}`}
        />,
      )
    }

    return stars
  }

  return (
    <div
      className="bg-soft-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden group flex items-center justify-center bg-gray-50">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={book.title}
          width={180}
          height={240}
          className={`object-contain transition-transform duration-300 max-h-64 ${isHovered ? "scale-[1.02]" : "scale-100"}`}
        />
      </div>
      <div className="px-5 pt-4 -mb-1">
        <div className="flex flex-wrap gap-1.5">
          {book.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-blush-pink text-deep-charcoal px-2.5 py-1 rounded-full text-xs font-normal tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-deep-charcoal text-xl font-bold leading-tight mb-1.5 line-clamp-2">{book.title}</h3>
        <p className="text-muted-charcoal text-sm mb-3">
          by <span className="font-medium">{book.author}</span>
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex">{renderRating()}</div>
          <span className="text-muted-charcoal text-sm font-normal">{book.rating.toFixed(1)}</span>
        </div>

        <div className="mt-auto">
          <Link
            href={book.amazon_affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blush-pink text-deep-charcoal font-medium text-center py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
