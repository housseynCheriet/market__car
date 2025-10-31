// Database abstraction layer - Easy to swap localStorage with other DB solutions
// Just modify the DatabaseAdapter implementation to use different storage

export interface Car {
  id: string;
  name: string;
  year: number;
  price: number;
  image: string;
  make: string;
  model: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  mileage: number;
  engine: string;
  horsepower: number;
  color: string;
  condition: string;
  location: string;
  seller: string;
  rating: number;
  views: number;
  isFavorite?: boolean;
}

export interface FilterOptions {
  make?: string[];
  bodyType?: string[];
  fuelType?: string[];
  condition?: string[];
  color?: string[];
  priceRange?: { min: number; max: number };
  yearRange?: { min: number; max: number };
  mileageRange?: { min: number; max: number };
  horsepowerRange?: { min: number; max: number };
  transmission?: string[];
  includeUnlabeledVehicles?: boolean;
  brandsOffer?: boolean;
}

export interface FilterPreset {
  id: string;
  name: string;
  filters: FilterOptions;
  createdAt: number;
}

// Database Adapter Interface - Implement this for different databases
interface DatabaseAdapter {
  getCars(): Car[];
  saveCars(cars: Car[]): void;
  clear(): void;
}

// LocalStorage Implementation
class LocalStorageAdapter implements DatabaseAdapter {
  private readonly STORAGE_KEY = 'recars_database';

  getCars(): Car[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return this.getInitialData();
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return this.getInitialData();
    }
  }

  saveCars(cars: Car[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cars));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private getInitialData(): Car[] {
    // Initial mock data with diverse vehicle listings
    const initialCars: Car[] = [
      {
        id: '1',
        name: 'Mercedes-Benz C43 AMG 2017',
        year: 2017,
        price: 93000,
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
        make: 'Mercedes-Benz',
        model: 'C43 AMG',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 97000,
        engine: '3.0L',
        horsepower: 435,
        color: 'Silver',
        condition: 'Excellent',
        location: 'New York, NY',
        seller: 'Premium Motors',
        rating: 4.5,
        views: 98,
        isFavorite: false
      },
      {
        id: '2',
        name: 'BMW M5 Competition 2022',
        year: 2022,
        price: 125000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        make: 'BMW',
        model: 'M5 Competition',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 12000,
        engine: '4.4L V8',
        horsepower: 617,
        color: 'Black',
        condition: 'Excellent',
        location: 'Los Angeles, CA',
        seller: 'Luxury Auto Group',
        rating: 5,
        views: 145,
        isFavorite: false
      },
      {
        id: '3',
        name: 'Audi RS7 Sportback 2021',
        year: 2021,
        price: 118500,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
        make: 'Audi',
        model: 'RS7 Sportback',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 18500,
        engine: '4.0L V8',
        horsepower: 591,
        color: 'Blue',
        condition: 'Excellent',
        location: 'Miami, FL',
        seller: 'Elite Motors',
        rating: 4.8,
        views: 132,
        isFavorite: false
      },
      {
        id: '4',
        name: 'Tesla Model S Plaid 2023',
        year: 2023,
        price: 135000,
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
        make: 'Tesla',
        model: 'Model S Plaid',
        bodyType: 'Sedan',
        fuelType: 'Electric',
        transmission: 'Automatic',
        mileage: 5200,
        engine: 'Electric',
        horsepower: 1020,
        color: 'White',
        condition: 'New Vehicle',
        location: 'San Francisco, CA',
        seller: 'Tesla Direct',
        rating: 4.9,
        views: 210,
        isFavorite: false
      },
      {
        id: '5',
        name: 'Porsche 911 Turbo S 2022',
        year: 2022,
        price: 225000,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
        make: 'Porsche',
        model: '911 Turbo S',
        bodyType: 'Coupe',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 8500,
        engine: '3.8L',
        horsepower: 640,
        color: 'Red',
        condition: 'Excellent',
        location: 'Chicago, IL',
        seller: 'Prestige Auto',
        rating: 5,
        views: 198,
        isFavorite: false
      },
      {
        id: '6',
        name: 'Toyota Camry XSE 2023',
        year: 2023,
        price: 32500,
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
        make: 'Toyota',
        model: 'Camry XSE',
        bodyType: 'Sedan',
        fuelType: 'Hybrid',
        transmission: 'Automatic',
        mileage: 3200,
        engine: '2.5L',
        horsepower: 208,
        color: 'Silver',
        condition: 'New Vehicle',
        location: 'Houston, TX',
        seller: 'Toyota Dealership',
        rating: 4.6,
        views: 87,
        isFavorite: false
      },
      {
        id: '7',
        name: 'Lexus RX 450h 2022',
        year: 2022,
        price: 58900,
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
        make: 'Lexus',
        model: 'RX 450h',
        bodyType: 'SUV',
        fuelType: 'Hybrid',
        transmission: 'Automatic',
        mileage: 15600,
        engine: '3.5L V6',
        horsepower: 308,
        color: 'Black',
        condition: 'Excellent',
        location: 'Seattle, WA',
        seller: 'Lexus Premium',
        rating: 4.7,
        views: 156,
        isFavorite: false
      },
      {
        id: '8',
        name: 'Range Rover Sport HSE 2021',
        year: 2021,
        price: 87500,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
        make: 'Land Rover',
        model: 'Range Rover Sport HSE',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 22000,
        engine: '3.0L',
        horsepower: 355,
        color: 'White',
        condition: 'Good',
        location: 'Boston, MA',
        seller: 'Luxury SUV Center',
        rating: 4.5,
        views: 112,
        isFavorite: false
      },
      {
        id: '9',
        name: 'Ford Mustang GT 2023',
        year: 2023,
        price: 48900,
        image: 'https://images.unsplash.com/photo-1584345604476-8ec5f6b3c6d0?w=400&h=300&fit=crop',
        make: 'Ford',
        model: 'Mustang GT',
        bodyType: 'Coupe',
        fuelType: 'Petrol',
        transmission: 'Manual',
        mileage: 1500,
        engine: '5.0L V8',
        horsepower: 450,
        color: 'Blue',
        condition: 'New Vehicle',
        location: 'Detroit, MI',
        seller: 'Ford Performance',
        rating: 4.8,
        views: 176,
        isFavorite: false
      },
      {
        id: '10',
        name: 'Chevrolet Corvette Stingray 2022',
        year: 2022,
        price: 72500,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
        make: 'Chevrolet',
        model: 'Corvette Stingray',
        bodyType: 'Coupe',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 6800,
        engine: '6.2L V8',
        horsepower: 490,
        color: 'Red',
        condition: 'Excellent',
        location: 'Phoenix, AZ',
        seller: 'Performance Auto',
        rating: 4.9,
        views: 203,
        isFavorite: false
      },
      {
        id: '11',
        name: 'Mercedes-Benz CLA200 2019',
        year: 2019,
        price: 45500,
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop',
        make: 'Mercedes-Benz',
        model: 'CLA200',
        bodyType: 'Coupe',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 28000,
        engine: '2.0L',
        horsepower: 188,
        color: 'Silver',
        condition: 'Good',
        location: 'Atlanta, GA',
        seller: 'Metro Motors',
        rating: 4.3,
        views: 83,
        isFavorite: false
      },
      {
        id: '12',
        name: 'BMW X5 M50i 2023',
        year: 2023,
        price: 98000,
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
        make: 'BMW',
        model: 'X5 M50i',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 4200,
        engine: '4.4L V8',
        horsepower: 523,
        color: 'Black',
        condition: 'New Vehicle',
        location: 'Dallas, TX',
        seller: 'BMW Elite',
        rating: 4.8,
        views: 167,
        isFavorite: false
      },
      {
        id: '13',
        name: 'Audi Q7 Premium Plus 2022',
        year: 2022,
        price: 68900,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
        make: 'Audi',
        model: 'Q7 Premium Plus',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 16500,
        engine: '3.0L V6',
        horsepower: 335,
        color: 'White',
        condition: 'Excellent',
        location: 'Denver, CO',
        seller: 'Audi Center',
        rating: 4.6,
        views: 134,
        isFavorite: false
      },
      {
        id: '14',
        name: 'Tesla Model 3 Performance 2023',
        year: 2023,
        price: 62000,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
        make: 'Tesla',
        model: 'Model 3 Performance',
        bodyType: 'Sedan',
        fuelType: 'Electric',
        transmission: 'Automatic',
        mileage: 2100,
        engine: 'Electric',
        horsepower: 450,
        color: 'Blue',
        condition: 'New Vehicle',
        location: 'Austin, TX',
        seller: 'Tesla Direct',
        rating: 4.9,
        views: 289,
        isFavorite: false
      },
      {
        id: '15',
        name: 'Honda Accord Sport 2023',
        year: 2023,
        price: 29500,
        image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop',
        make: 'Honda',
        model: 'Accord Sport',
        bodyType: 'Sedan',
        fuelType: 'Hybrid',
        transmission: 'Automatic',
        mileage: 5600,
        engine: '2.0L',
        horsepower: 204,
        color: 'Gray',
        condition: 'New Vehicle',
        location: 'Portland, OR',
        seller: 'Honda Dealership',
        rating: 4.5,
        views: 92,
        isFavorite: false
      },
      {
        id: '16',
        name: 'Porsche Cayenne Turbo 2022',
        year: 2022,
        price: 145000,
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
        make: 'Porsche',
        model: 'Cayenne Turbo',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 11200,
        engine: '4.0L V8',
        horsepower: 541,
        color: 'Black',
        condition: 'Excellent',
        location: 'Las Vegas, NV',
        seller: 'Prestige Auto',
        rating: 4.9,
        views: 178,
        isFavorite: false
      },
      {
        id: '17',
        name: 'Mazda CX-5 Turbo 2023',
        year: 2023,
        price: 38900,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
        make: 'Mazda',
        model: 'CX-5 Turbo',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 7200,
        engine: '2.5L',
        horsepower: 256,
        color: 'Red',
        condition: 'New Vehicle',
        location: 'Minneapolis, MN',
        seller: 'Mazda Center',
        rating: 4.4,
        views: 68,
        isFavorite: false
      },
      {
        id: '18',
        name: 'Jaguar F-Type R 2021',
        year: 2021,
        price: 89500,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
        make: 'Jaguar',
        model: 'F-Type R',
        bodyType: 'Coupe',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 14800,
        engine: '5.0L V8',
        horsepower: 575,
        color: 'Green',
        condition: 'Excellent',
        location: 'Nashville, TN',
        seller: 'Exotic Cars',
        rating: 4.7,
        views: 124,
        isFavorite: false
      },
      {
        id: '19',
        name: 'Volkswagen Golf GTI 2023',
        year: 2023,
        price: 34500,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
        make: 'Volkswagen',
        model: 'Golf GTI',
        bodyType: 'Hatchback',
        fuelType: 'Petrol',
        transmission: 'Manual',
        mileage: 2800,
        engine: '2.0L',
        horsepower: 241,
        color: 'White',
        condition: 'New Vehicle',
        location: 'Philadelphia, PA',
        seller: 'VW Performance',
        rating: 4.6,
        views: 95,
        isFavorite: false
      },
      {
        id: '20',
        name: 'Subaru WRX STI 2022',
        year: 2022,
        price: 42900,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        make: 'Subaru',
        model: 'WRX STI',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Manual',
        mileage: 9500,
        engine: '2.5L',
        horsepower: 310,
        color: 'Blue',
        condition: 'Excellent',
        location: 'San Diego, CA',
        seller: 'Rally Motors',
        rating: 4.8,
        views: 156,
        isFavorite: false
      },
      {
        id: '21',
        name: 'Mercedes-Benz GLE450 AMG 2023',
        year: 2023,
        price: 95500,
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
        make: 'Mercedes-Benz',
        model: 'GLE450 AMG',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 6200,
        engine: '3.0L',
        horsepower: 362,
        color: 'Silver',
        condition: 'New Vehicle',
        location: 'Charlotte, NC',
        seller: 'Premium Motors',
        rating: 4.7,
        views: 143,
        isFavorite: false
      },
      {
        id: '22',
        name: 'Nissan GT-R Nismo 2022',
        year: 2022,
        price: 178000,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
        make: 'Nissan',
        model: 'GT-R Nismo',
        bodyType: 'Coupe',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 3200,
        engine: '3.8L V6',
        horsepower: 600,
        color: 'Red',
        condition: 'Excellent',
        location: 'San Jose, CA',
        seller: 'Performance Imports',
        rating: 5,
        views: 211,
        isFavorite: false
      },
      {
        id: '23',
        name: 'Acura MDX Type S 2023',
        year: 2023,
        price: 68500,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
        make: 'Acura',
        model: 'MDX Type S',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 4100,
        engine: '3.0L V6',
        horsepower: 355,
        color: 'Black',
        condition: 'New Vehicle',
        location: 'Columbus, OH',
        seller: 'Acura Dealership',
        rating: 4.6,
        views: 98,
        isFavorite: false
      },
      {
        id: '24',
        name: 'Volvo XC90 Recharge 2023',
        year: 2023,
        price: 72900,
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
        make: 'Volvo',
        model: 'XC90 Recharge',
        bodyType: 'SUV',
        fuelType: 'Hybrid',
        transmission: 'Automatic',
        mileage: 2900,
        engine: '2.0L',
        horsepower: 400,
        color: 'White',
        condition: 'New Vehicle',
        location: 'Salt Lake City, UT',
        seller: 'Volvo Center',
        rating: 4.8,
        views: 127,
        isFavorite: false
      },
      {
        id: '25',
        name: 'Cadillac Escalade ESV 2023',
        year: 2023,
        price: 105000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
        make: 'Cadillac',
        model: 'Escalade ESV',
        bodyType: 'SUV',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 3500,
        engine: '6.2L V8',
        horsepower: 420,
        color: 'Black',
        condition: 'New Vehicle',
        location: 'Indianapolis, IN',
        seller: 'Luxury Auto Group',
        rating: 4.7,
        views: 156,
        isFavorite: false
      },
      {
        id: '26',
        name: 'Genesis G70 Sport 2023',
        year: 2023,
        price: 48900,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        make: 'Genesis',
        model: 'G70 Sport',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 5600,
        engine: '3.3L V6',
        horsepower: 365,
        color: 'Gray',
        condition: 'New Vehicle',
        location: 'Raleigh, NC',
        seller: 'Genesis Dealership',
        rating: 4.5,
        views: 89,
        isFavorite: false
      },
      {
        id: '27',
        name: 'Alfa Romeo Giulia Quadrifoglio 2022',
        year: 2022,
        price: 82500,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        make: 'Alfa Romeo',
        model: 'Giulia Quadrifoglio',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 12800,
        engine: '2.9L V6',
        horsepower: 505,
        color: 'Red',
        condition: 'Excellent',
        location: 'Tampa, FL',
        seller: 'Italian Motors',
        rating: 4.9,
        views: 167,
        isFavorite: false
      },
      {
        id: '28',
        name: 'Infiniti Q50 Red Sport 2023',
        year: 2023,
        price: 58900,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        make: 'Infiniti',
        model: 'Q50 Red Sport',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 3200,
        engine: '3.0L V6',
        horsepower: 400,
        color: 'Blue',
        condition: 'New Vehicle',
        location: 'Sacramento, CA',
        seller: 'Infiniti Center',
        rating: 4.4,
        views: 76,
        isFavorite: false
      },
      {
        id: '29',
        name: 'Kia Stinger GT2 2023',
        year: 2023,
        price: 52900,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        make: 'Kia',
        model: 'Stinger GT2',
        bodyType: 'Sedan',
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 4800,
        engine: '3.3L V6',
        horsepower: 368,
        color: 'Silver',
        condition: 'New Vehicle',
        location: 'Kansas City, MO',
        seller: 'Kia Performance',
        rating: 4.6,
        views: 112,
        isFavorite: false
      },
      {
        id: '30',
        name: 'Hyundai Ioniq 5 Limited 2023',
        year: 2023,
        price: 54500,
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
        make: 'Hyundai',
        model: 'Ioniq 5 Limited',
        bodyType: 'SUV',
        fuelType: 'Electric',
        transmission: 'Automatic',
        mileage: 1200,
        engine: 'Electric',
        horsepower: 320,
        color: 'White',
        condition: 'New Vehicle',
        location: 'Orlando, FL',
        seller: 'Hyundai EV Center',
        rating: 4.8,
        views: 194,
        isFavorite: false
      }
    ];
    
    this.saveCars(initialCars);
    return initialCars;
  }
}

// Current database adapter - Change this to use different storage
const dbAdapter: DatabaseAdapter = new LocalStorageAdapter();

// Public API for the application
export const db = {
  // Get all cars
  getAllCars(): Car[] {
    return dbAdapter.getCars();
  },

  // Get car by ID
  getCarById(id: string): Car | undefined {
    return dbAdapter.getCars().find(car => car.id === id);
  },

  // Search cars
  searchCars(query: string): Car[] {
    const cars = dbAdapter.getCars();
    const lowerQuery = query.toLowerCase();
    return cars.filter(car =>
      car.name.toLowerCase().includes(lowerQuery) ||
      car.make.toLowerCase().includes(lowerQuery) ||
      car.model.toLowerCase().includes(lowerQuery)
    );
  },

  // Filter cars
  filterCars(filters: FilterOptions): Car[] {
    let cars = dbAdapter.getCars();

    if (filters.make && filters.make.length > 0) {
      cars = cars.filter(car => filters.make!.includes(car.make));
    }

    if (filters.bodyType && filters.bodyType.length > 0) {
      cars = cars.filter(car => filters.bodyType!.includes(car.bodyType));
    }

    if (filters.fuelType && filters.fuelType.length > 0) {
      cars = cars.filter(car => filters.fuelType!.includes(car.fuelType));
    }

    if (filters.condition && filters.condition.length > 0) {
      cars = cars.filter(car => filters.condition!.includes(car.condition));
    }

    if (filters.color && filters.color.length > 0) {
      cars = cars.filter(car => filters.color!.includes(car.color));
    }

    if (filters.transmission && filters.transmission.length > 0) {
      cars = cars.filter(car => filters.transmission!.includes(car.transmission));
    }

    if (filters.priceRange) {
      cars = cars.filter(car =>
        car.price >= filters.priceRange!.min &&
        car.price <= filters.priceRange!.max
      );
    }

    if (filters.yearRange) {
      cars = cars.filter(car =>
        car.year >= filters.yearRange!.min &&
        car.year <= filters.yearRange!.max
      );
    }

    if (filters.mileageRange) {
      cars = cars.filter(car =>
        car.mileage >= filters.mileageRange!.min &&
        car.mileage <= filters.mileageRange!.max
      );
    }

    if (filters.horsepowerRange) {
      cars = cars.filter(car =>
        car.horsepower >= filters.horsepowerRange!.min &&
        car.horsepower <= filters.horsepowerRange!.max
      );
    }

    return cars;
  },

  // Add new car
  addCar(car: Omit<Car, 'id'>): Car {
    const cars = dbAdapter.getCars();
    const newCar: Car = {
      ...car,
      id: Date.now().toString()
    };
    cars.push(newCar);
    dbAdapter.saveCars(cars);
    return newCar;
  },

  // Update car
  updateCar(id: string, updates: Partial<Car>): Car | undefined {
    const cars = dbAdapter.getCars();
    const index = cars.findIndex(car => car.id === id);
    if (index === -1) return undefined;

    cars[index] = { ...cars[index], ...updates };
    dbAdapter.saveCars(cars);
    return cars[index];
  },

  // Delete car
  deleteCar(id: string): boolean {
    const cars = dbAdapter.getCars();
    const filteredCars = cars.filter(car => car.id !== id);
    if (filteredCars.length === cars.length) return false;
    
    dbAdapter.saveCars(filteredCars);
    return true;
  },

  // Toggle favorite
  toggleFavorite(id: string): Car | undefined {
    const cars = dbAdapter.getCars();
    const car = cars.find(c => c.id === id);
    if (!car) return undefined;

    car.isFavorite = !car.isFavorite;
    dbAdapter.saveCars(cars);
    return car;
  },

  // Clear all data
  clearAll(): void {
    dbAdapter.clear();
  },

  // Filter Preset Management
  saveFilterPreset(name: string, filters: FilterOptions): FilterPreset {
    const presets = this.getFilterPresets();
    const newPreset: FilterPreset = {
      id: Date.now().toString(),
      name,
      filters,
      createdAt: Date.now()
    };
    presets.push(newPreset);
    localStorage.setItem('recars_filter_presets', JSON.stringify(presets));
    return newPreset;
  },

  getFilterPresets(): FilterPreset[] {
    try {
      const data = localStorage.getItem('recars_filter_presets');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading filter presets:', error);
      return [];
    }
  },

  deleteFilterPreset(id: string): boolean {
    const presets = this.getFilterPresets();
    const filtered = presets.filter(p => p.id !== id);
    if (filtered.length === presets.length) return false;
    localStorage.setItem('recars_filter_presets', JSON.stringify(filtered));
    return true;
  },

  loadFilterPreset(id: string): FilterOptions | undefined {
    const presets = this.getFilterPresets();
    const preset = presets.find(p => p.id === id);
    return preset?.filters;
  },

  // Increment view count when user visits car details page
  incrementViews(id: string): Car | undefined {
    const cars = dbAdapter.getCars();
    const car = cars.find(c => c.id === id);
    if (!car) return undefined;

    car.views = (car.views || 0) + 1;
    dbAdapter.saveCars(cars);
    return car;
  },

  // ===== CHAT MESSAGES =====
  
  getChatMessages(carId: string): ChatMessage[] {
    try {
      const data = localStorage.getItem('recars_chat_messages');
      if (!data) return [];
      const allMessages: ChatMessage[] = JSON.parse(data);
      return allMessages.filter(msg => msg.carId === carId).sort((a, b) => a.timestamp - b.timestamp);
    } catch (error) {
      console.error('Error reading chat messages:', error);
      return [];
    }
  },

  addChatMessage(message: Omit<ChatMessage, 'id' | 'timestamp'>): ChatMessage {
    try {
      const data = localStorage.getItem('recars_chat_messages');
      const messages: ChatMessage[] = data ? JSON.parse(data) : [];
      const newMessage: ChatMessage = {
        ...message,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isEdited: false
      };
      messages.push(newMessage);
      localStorage.setItem('recars_chat_messages', JSON.stringify(messages));
      return newMessage;
    } catch (error) {
      console.error('Error adding chat message:', error);
      throw error;
    }
  },

  updateChatMessage(id: string, content: string): ChatMessage | undefined {
    try {
      const data = localStorage.getItem('recars_chat_messages');
      if (!data) return undefined;
      const messages: ChatMessage[] = JSON.parse(data);
      const message = messages.find(m => m.id === id);
      if (!message) return undefined;
      
      message.message = content;
      message.isEdited = true;
      localStorage.setItem('recars_chat_messages', JSON.stringify(messages));
      return message;
    } catch (error) {
      console.error('Error updating chat message:', error);
      return undefined;
    }
  },

  deleteChatMessage(id: string): boolean {
    try {
      const data = localStorage.getItem('recars_chat_messages');
      if (!data) return false;
      const messages: ChatMessage[] = JSON.parse(data);
      const filtered = messages.filter(m => m.id !== id);
      if (filtered.length === messages.length) return false;
      localStorage.setItem('recars_chat_messages', JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error deleting chat message:', error);
      return false;
    }
  },

  // ===== COMMENTS =====
  
  getComments(carId: string): Comment[] {
    try {
      const data = localStorage.getItem('recars_comments');
      if (!data) return [];
      const allComments: Comment[] = JSON.parse(data);
      return allComments.filter(c => c.carId === carId).sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error('Error reading comments:', error);
      return [];
    }
  },

  addComment(comment: Omit<Comment, 'id' | 'timestamp' | 'replies'>): Comment {
    try {
      const data = localStorage.getItem('recars_comments');
      const comments: Comment[] = data ? JSON.parse(data) : [];
      const newComment: Comment = {
        ...comment,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isEdited: false,
        replies: []
      };
      comments.push(newComment);
      localStorage.setItem('recars_comments', JSON.stringify(comments));
      return newComment;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },

  updateComment(id: string, content: string): Comment | undefined {
    try {
      const data = localStorage.getItem('recars_comments');
      if (!data) return undefined;
      const comments: Comment[] = JSON.parse(data);
      const comment = comments.find(c => c.id === id);
      if (!comment) return undefined;
      
      comment.content = content;
      comment.isEdited = true;
      localStorage.setItem('recars_comments', JSON.stringify(comments));
      return comment;
    } catch (error) {
      console.error('Error updating comment:', error);
      return undefined;
    }
  },

  deleteComment(id: string): boolean {
    try {
      const data = localStorage.getItem('recars_comments');
      if (!data) return false;
      const comments: Comment[] = JSON.parse(data);
      const filtered = comments.filter(c => c.id !== id);
      if (filtered.length === comments.length) return false;
      localStorage.setItem('recars_comments', JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error deleting comment:', error);
      return false;
    }
  },

  addCommentReply(commentId: string, reply: Omit<CommentReply, 'id' | 'timestamp'>): CommentReply | undefined {
    try {
      const data = localStorage.getItem('recars_comments');
      if (!data) return undefined;
      const comments: Comment[] = JSON.parse(data);
      const comment = comments.find(c => c.id === commentId);
      if (!comment) return undefined;
      
      const newReply: CommentReply = {
        ...reply,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isEdited: false
      };
      comment.replies.push(newReply);
      localStorage.setItem('recars_comments', JSON.stringify(comments));
      return newReply;
    } catch (error) {
      console.error('Error adding comment reply:', error);
      return undefined;
    }
  },

  updateCommentReply(commentId: string, replyId: string, content: string): CommentReply | undefined {
    try {
      const data = localStorage.getItem('recars_comments');
      if (!data) return undefined;
      const comments: Comment[] = JSON.parse(data);
      const comment = comments.find(c => c.id === commentId);
      if (!comment) return undefined;
      
      const reply = comment.replies.find(r => r.id === replyId);
      if (!reply) return undefined;
      
      reply.content = content;
      reply.isEdited = true;
      localStorage.setItem('recars_comments', JSON.stringify(comments));
      return reply;
    } catch (error) {
      console.error('Error updating comment reply:', error);
      return undefined;
    }
  },

  deleteCommentReply(commentId: string, replyId: string): boolean {
    try {
      const data = localStorage.getItem('recars_comments');
      if (!data) return false;
      const comments: Comment[] = JSON.parse(data);
      const comment = comments.find(c => c.id === commentId);
      if (!comment) return false;
      
      const filtered = comment.replies.filter(r => r.id !== replyId);
      if (filtered.length === comment.replies.length) return false;
      comment.replies = filtered;
      localStorage.setItem('recars_comments', JSON.stringify(comments));
      return true;
    } catch (error) {
      console.error('Error deleting comment reply:', error);
      return false;
    }
  },

  // ===== NOTIFICATIONS =====
  
  getNotifications(userId: string = 'user_123'): Notification[] {
    try {
      const data = localStorage.getItem('recars_notifications');
      if (!data) return [];
      const allNotifications: Notification[] = JSON.parse(data);
      // Return notifications where the current user is NOT the sender
      return allNotifications
        .filter(n => n.fromUserId !== userId)
        .sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error('Error reading notifications:', error);
      return [];
    }
  },

  addNotification(notification: Omit<Notification, 'id' | 'timestamp' | 'isRead'>): Notification {
    try {
      const data = localStorage.getItem('recars_notifications');
      const notifications: Notification[] = data ? JSON.parse(data) : [];
      const newNotification: Notification = {
        ...notification,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isRead: false
      };
      notifications.push(newNotification);
      localStorage.setItem('recars_notifications', JSON.stringify(notifications));
      return newNotification;
    } catch (error) {
      console.error('Error adding notification:', error);
      throw error;
    }
  },

  markNotificationAsRead(id: string): boolean {
    try {
      const data = localStorage.getItem('recars_notifications');
      if (!data) return false;
      const notifications: Notification[] = JSON.parse(data);
      const notification = notifications.find(n => n.id === id);
      if (!notification) return false;
      
      notification.isRead = true;
      localStorage.setItem('recars_notifications', JSON.stringify(notifications));
      return true;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      return false;
    }
  },

  markAllNotificationsAsRead(userId: string = 'user_123'): boolean {
    try {
      const data = localStorage.getItem('recars_notifications');
      if (!data) return false;
      const notifications: Notification[] = JSON.parse(data);
      
      notifications.forEach(n => {
        if (n.fromUserId !== userId) {
          n.isRead = true;
        }
      });
      
      localStorage.setItem('recars_notifications', JSON.stringify(notifications));
      return true;
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
      return false;
    }
  },

  deleteNotification(id: string): boolean {
    try {
      const data = localStorage.getItem('recars_notifications');
      if (!data) return false;
      const notifications: Notification[] = JSON.parse(data);
      const filtered = notifications.filter(n => n.id !== id);
      if (filtered.length === notifications.length) return false;
      localStorage.setItem('recars_notifications', JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error deleting notification:', error);
      return false;
    }
  },

  getUnreadNotificationCount(userId: string = 'user_123'): number {
    try {
      const notifications = this.getNotifications(userId);
      return notifications.filter(n => !n.isRead).length;
    } catch (error) {
      console.error('Error getting unread count:', error);
      return 0;
    }
  },

  clearAllNotifications(userId: string = 'user_123'): boolean {
    try {
      const data = localStorage.getItem('recars_notifications');
      if (!data) return false;
      const notifications: Notification[] = JSON.parse(data);
      // Keep notifications from current user (their own actions)
      const filtered = notifications.filter(n => n.fromUserId === userId);
      localStorage.setItem('recars_notifications', JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error clearing notifications:', error);
      return false;
    }
  }
};

export interface ChatMessage {
  id: string;
  carId: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: number;
  isFromSeller: boolean;
  isEdited?: boolean;
}

export interface Comment {
  id: string;
  carId: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: number;
  isEdited?: boolean;
  replies: CommentReply[];
}

export interface CommentReply {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: number;
  isEdited?: boolean;
}

export type NotificationType = 'comment' | 'reply' | 'message';

export interface Notification {
  id: string;
  type: NotificationType;
  carId: string;
  carName: string;
  carImage: string;
  fromUserId: string;
  fromUserName: string;
  content: string;
  timestamp: number;
  isRead: boolean;
  targetId: string; // ID of comment/reply/message to scroll to
  parentId?: string; // For replies, the parent comment ID
}