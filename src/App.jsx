import { IconContext } from 'react-icons';
import AppLayout from './ui/AppLayout';
import About from './features/about/About';
import Resources from './features/resources/Resources';
import HardResources from './features/hard-resources/HardResources';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadPage from './features/resources/UploadPage';

const books = [
  {
    id: '1',
    name: 'Harry Potter',
    year: '2023',
    image: '/image1.jpeg',
    rating: '4',
    author: 'Arundhati Roy',
    category: 'Novel',
  },
  {
    id: '2',
    name: 'CNS',
    year: '2023',
    image: '/image1.jpeg',
    rating: '3',
    author: 'Smita Bansode',
    category: 'TE-IT',
  },
  {
    id: '3',
    name: 'IP',
    year: '2023',
    image: '/image1.jpeg',
    rating: '3',
    author: 'Jalpa',
    category: 'TE-IT',
  },
  {
    id: '4',
    name: 'Before We Fall',
    year: '2023',
    image: '/image1.jpeg',
    rating: '2',
    author: 'John Green',
    category: 'Novel',
  },
  {
    id: '5',
    name: 'Silent Patient',
    year: '2023',
    image: '/image1.jpeg',
    rating: '2',
    author: 'Unknwn',
    category: 'Novel',
  },
  {
    id: '6',
    name: 'Merchant of Venice',
    year: '2023',
    image: '/image1.jpeg',
    author: 'J K Rowling',
    rating: '2',
    category: 'Novel',
  },
  {
    id: '7',
    name: 'Paris Apartment',
    year: '2023',
    image: '/image1.jpeg',
    rating: '2',
    author: 'Unknown',
    category: 'Novel',
  },
];

function App() {
  return (
    <IconContext.Provider value={{ size: '1.5em' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="about" element={<About />} />
            <Route path="resources" element={<Resources books={books} />} />
            <Route path="hard-resources" element={<HardResources />} />
            <Route path="upload" elements={<UploadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IconContext.Provider>
  );
}

export default App;
