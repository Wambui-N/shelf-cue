'use client';

import { useState } from 'react';
import booksData from '@/data/books.json';
import BookCard from '@/components/BookCard';
import FilterBar from '@/components/FilterBar';
import type { Book } from '@/types/book';

export default function Home() {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(booksData.books);

  return (
    <main className="min-h-screen bg-soft-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-deep-charcoal mb-8 text-center">
          Shelf Cue
        </h1>
        <p className="text-muted-charcoal text-center mb-8">
          Discover your next great read based on your mood, journey, and preferences
        </p>

        <FilterBar books={booksData.books} onFilterChange={setFilteredBooks} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-charcoal text-lg">
              No books match your current filters. Try adjusting your selections.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
