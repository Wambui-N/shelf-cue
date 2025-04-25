import { useState } from 'react';
import type { Book } from '@/types/book';

interface FilterBarProps {
  books: Book[];
  onFilterChange: (filteredBooks: Book[]) => void;
}

export default function FilterBar({ books, onFilterChange }: FilterBarProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedMood, setSelectedMood] = useState<string>('all');
  const [selectedJourney, setSelectedJourney] = useState<string>('all');
  const [selectedSeasonal, setSelectedSeasonal] = useState<string>('all');

  // Get unique values for each filter
  const genres = ['all', ...new Set(books.map(book => book.genre))];
  const moods = ['all', ...new Set(books.flatMap(book => book.mood))];
  const journeys = ['all', ...new Set(books.flatMap(book => book.journey))];
  const seasonals = ['all', ...new Set(books.flatMap(book => book.seasonal))];

  const handleFilterChange = () => {
    let filteredBooks = [...books];

    if (selectedGenre !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.genre === selectedGenre);
    }

    if (selectedMood !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.mood.includes(selectedMood));
    }

    if (selectedJourney !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.journey.includes(selectedJourney));
    }

    if (selectedSeasonal !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.seasonal.includes(selectedSeasonal));
    }

    onFilterChange(filteredBooks);
  };

  return (
    <div className="bg-soft-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-deep-charcoal font-semibold mb-2">Genre</label>
          <select
            className="w-full p-2 border rounded-md bg-white text-muted-charcoal"
            value={selectedGenre}
            onChange={(e) => {
              setSelectedGenre(e.target.value);
              handleFilterChange();
            }}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-deep-charcoal font-semibold mb-2">Mood</label>
          <select
            className="w-full p-2 border rounded-md bg-white text-muted-charcoal"
            value={selectedMood}
            onChange={(e) => {
              setSelectedMood(e.target.value);
              handleFilterChange();
            }}
          >
            {moods.map((mood) => (
              <option key={mood} value={mood}>
                {mood}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-deep-charcoal font-semibold mb-2">Journey</label>
          <select
            className="w-full p-2 border rounded-md bg-white text-muted-charcoal"
            value={selectedJourney}
            onChange={(e) => {
              setSelectedJourney(e.target.value);
              handleFilterChange();
            }}
          >
            {journeys.map((journey) => (
              <option key={journey} value={journey}>
                {journey}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-deep-charcoal font-semibold mb-2">Seasonal</label>
          <select
            className="w-full p-2 border rounded-md bg-white text-muted-charcoal"
            value={selectedSeasonal}
            onChange={(e) => {
              setSelectedSeasonal(e.target.value);
              handleFilterChange();
            }}
          >
            {seasonals.map((seasonal) => (
              <option key={seasonal} value={seasonal}>
                {seasonal}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 