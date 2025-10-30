class LocalStorageAdapter {
  STORAGE_KEY = "recars_database";
  getCars() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return this.getInitialData();
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return this.getInitialData();
    }
  }
  saveCars(cars) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cars));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
  getInitialData() {
    const initialCars = [
      {
        id: "1",
        name: "Mercedes-Benz C43 AMG 2017",
        year: 2017,
        price: 93e3,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
        make: "Mercedes-Benz",
        model: "C43 AMG",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 97e3,
        engine: "3.0L",
        horsepower: 435,
        color: "Silver",
        condition: "Excellent",
        location: "New York, NY",
        seller: "Premium Motors",
        rating: 4.5,
        views: 98,
        isFavorite: false
      },
      {
        id: "2",
        name: "BMW M5 Competition 2022",
        year: 2022,
        price: 125e3,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        make: "BMW",
        model: "M5 Competition",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 12e3,
        engine: "4.4L V8",
        horsepower: 617,
        color: "Black",
        condition: "Excellent",
        location: "Los Angeles, CA",
        seller: "Luxury Auto Group",
        rating: 5,
        views: 145,
        isFavorite: false
      },
      {
        id: "3",
        name: "Audi RS7 Sportback 2021",
        year: 2021,
        price: 118500,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        make: "Audi",
        model: "RS7 Sportback",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 18500,
        engine: "4.0L V8",
        horsepower: 591,
        color: "Blue",
        condition: "Excellent",
        location: "Miami, FL",
        seller: "Elite Motors",
        rating: 4.8,
        views: 132,
        isFavorite: false
      },
      {
        id: "4",
        name: "Tesla Model S Plaid 2023",
        year: 2023,
        price: 135e3,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
        make: "Tesla",
        model: "Model S Plaid",
        bodyType: "Sedan",
        fuelType: "Electric",
        transmission: "Automatic",
        mileage: 5200,
        engine: "Electric",
        horsepower: 1020,
        color: "White",
        condition: "New Vehicle",
        location: "San Francisco, CA",
        seller: "Tesla Direct",
        rating: 4.9,
        views: 210,
        isFavorite: false
      },
      {
        id: "5",
        name: "Porsche 911 Turbo S 2022",
        year: 2022,
        price: 225e3,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
        make: "Porsche",
        model: "911 Turbo S",
        bodyType: "Coupe",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 8500,
        engine: "3.8L",
        horsepower: 640,
        color: "Red",
        condition: "Excellent",
        location: "Chicago, IL",
        seller: "Prestige Auto",
        rating: 5,
        views: 198,
        isFavorite: false
      },
      {
        id: "6",
        name: "Toyota Camry XSE 2023",
        year: 2023,
        price: 32500,
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
        make: "Toyota",
        model: "Camry XSE",
        bodyType: "Sedan",
        fuelType: "Hybrid",
        transmission: "Automatic",
        mileage: 3200,
        engine: "2.5L",
        horsepower: 208,
        color: "Silver",
        condition: "New Vehicle",
        location: "Houston, TX",
        seller: "Toyota Dealership",
        rating: 4.6,
        views: 87,
        isFavorite: false
      },
      {
        id: "7",
        name: "Lexus RX 450h 2022",
        year: 2022,
        price: 58900,
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
        make: "Lexus",
        model: "RX 450h",
        bodyType: "SUV",
        fuelType: "Hybrid",
        transmission: "Automatic",
        mileage: 15600,
        engine: "3.5L V6",
        horsepower: 308,
        color: "Black",
        condition: "Excellent",
        location: "Seattle, WA",
        seller: "Lexus Premium",
        rating: 4.7,
        views: 156,
        isFavorite: false
      },
      {
        id: "8",
        name: "Range Rover Sport HSE 2021",
        year: 2021,
        price: 87500,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        make: "Land Rover",
        model: "Range Rover Sport HSE",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 22e3,
        engine: "3.0L",
        horsepower: 355,
        color: "White",
        condition: "Good",
        location: "Boston, MA",
        seller: "Luxury SUV Center",
        rating: 4.5,
        views: 112,
        isFavorite: false
      },
      {
        id: "9",
        name: "Ford Mustang GT 2023",
        year: 2023,
        price: 48900,
        image: "https://images.unsplash.com/photo-1584345604476-8ec5f6b3c6d0?w=400&h=300&fit=crop",
        make: "Ford",
        model: "Mustang GT",
        bodyType: "Coupe",
        fuelType: "Petrol",
        transmission: "Manual",
        mileage: 1500,
        engine: "5.0L V8",
        horsepower: 450,
        color: "Blue",
        condition: "New Vehicle",
        location: "Detroit, MI",
        seller: "Ford Performance",
        rating: 4.8,
        views: 176,
        isFavorite: false
      },
      {
        id: "10",
        name: "Chevrolet Corvette Stingray 2022",
        year: 2022,
        price: 72500,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
        make: "Chevrolet",
        model: "Corvette Stingray",
        bodyType: "Coupe",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 6800,
        engine: "6.2L V8",
        horsepower: 490,
        color: "Red",
        condition: "Excellent",
        location: "Phoenix, AZ",
        seller: "Performance Auto",
        rating: 4.9,
        views: 203,
        isFavorite: false
      },
      {
        id: "11",
        name: "Mercedes-Benz CLA200 2019",
        year: 2019,
        price: 45500,
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop",
        make: "Mercedes-Benz",
        model: "CLA200",
        bodyType: "Coupe",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 28e3,
        engine: "2.0L",
        horsepower: 188,
        color: "Silver",
        condition: "Good",
        location: "Atlanta, GA",
        seller: "Metro Motors",
        rating: 4.3,
        views: 83,
        isFavorite: false
      },
      {
        id: "12",
        name: "BMW X5 M50i 2023",
        year: 2023,
        price: 98e3,
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
        make: "BMW",
        model: "X5 M50i",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 4200,
        engine: "4.4L V8",
        horsepower: 523,
        color: "Black",
        condition: "New Vehicle",
        location: "Dallas, TX",
        seller: "BMW Elite",
        rating: 4.8,
        views: 167,
        isFavorite: false
      },
      {
        id: "13",
        name: "Audi Q7 Premium Plus 2022",
        year: 2022,
        price: 68900,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        make: "Audi",
        model: "Q7 Premium Plus",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 16500,
        engine: "3.0L V6",
        horsepower: 335,
        color: "White",
        condition: "Excellent",
        location: "Denver, CO",
        seller: "Audi Center",
        rating: 4.6,
        views: 134,
        isFavorite: false
      },
      {
        id: "14",
        name: "Tesla Model 3 Performance 2023",
        year: 2023,
        price: 62e3,
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
        make: "Tesla",
        model: "Model 3 Performance",
        bodyType: "Sedan",
        fuelType: "Electric",
        transmission: "Automatic",
        mileage: 2100,
        engine: "Electric",
        horsepower: 450,
        color: "Blue",
        condition: "New Vehicle",
        location: "Austin, TX",
        seller: "Tesla Direct",
        rating: 4.9,
        views: 289,
        isFavorite: false
      },
      {
        id: "15",
        name: "Honda Accord Sport 2023",
        year: 2023,
        price: 29500,
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
        make: "Honda",
        model: "Accord Sport",
        bodyType: "Sedan",
        fuelType: "Hybrid",
        transmission: "Automatic",
        mileage: 5600,
        engine: "2.0L",
        horsepower: 204,
        color: "Gray",
        condition: "New Vehicle",
        location: "Portland, OR",
        seller: "Honda Dealership",
        rating: 4.5,
        views: 92,
        isFavorite: false
      },
      {
        id: "16",
        name: "Porsche Cayenne Turbo 2022",
        year: 2022,
        price: 145e3,
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
        make: "Porsche",
        model: "Cayenne Turbo",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 11200,
        engine: "4.0L V8",
        horsepower: 541,
        color: "Black",
        condition: "Excellent",
        location: "Las Vegas, NV",
        seller: "Prestige Auto",
        rating: 4.9,
        views: 178,
        isFavorite: false
      },
      {
        id: "17",
        name: "Mazda CX-5 Turbo 2023",
        year: 2023,
        price: 38900,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        make: "Mazda",
        model: "CX-5 Turbo",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 7200,
        engine: "2.5L",
        horsepower: 256,
        color: "Red",
        condition: "New Vehicle",
        location: "Minneapolis, MN",
        seller: "Mazda Center",
        rating: 4.4,
        views: 68,
        isFavorite: false
      },
      {
        id: "18",
        name: "Jaguar F-Type R 2021",
        year: 2021,
        price: 89500,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
        make: "Jaguar",
        model: "F-Type R",
        bodyType: "Coupe",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 14800,
        engine: "5.0L V8",
        horsepower: 575,
        color: "Green",
        condition: "Excellent",
        location: "Nashville, TN",
        seller: "Exotic Cars",
        rating: 4.7,
        views: 124,
        isFavorite: false
      },
      {
        id: "19",
        name: "Volkswagen Golf GTI 2023",
        year: 2023,
        price: 34500,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
        make: "Volkswagen",
        model: "Golf GTI",
        bodyType: "Hatchback",
        fuelType: "Petrol",
        transmission: "Manual",
        mileage: 2800,
        engine: "2.0L",
        horsepower: 241,
        color: "White",
        condition: "New Vehicle",
        location: "Philadelphia, PA",
        seller: "VW Performance",
        rating: 4.6,
        views: 95,
        isFavorite: false
      },
      {
        id: "20",
        name: "Subaru WRX STI 2022",
        year: 2022,
        price: 42900,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        make: "Subaru",
        model: "WRX STI",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Manual",
        mileage: 9500,
        engine: "2.5L",
        horsepower: 310,
        color: "Blue",
        condition: "Excellent",
        location: "San Diego, CA",
        seller: "Rally Motors",
        rating: 4.8,
        views: 156,
        isFavorite: false
      },
      {
        id: "21",
        name: "Mercedes-Benz GLE450 AMG 2023",
        year: 2023,
        price: 95500,
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
        make: "Mercedes-Benz",
        model: "GLE450 AMG",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 6200,
        engine: "3.0L",
        horsepower: 362,
        color: "Silver",
        condition: "New Vehicle",
        location: "Charlotte, NC",
        seller: "Premium Motors",
        rating: 4.7,
        views: 143,
        isFavorite: false
      },
      {
        id: "22",
        name: "Nissan GT-R Nismo 2022",
        year: 2022,
        price: 178e3,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
        make: "Nissan",
        model: "GT-R Nismo",
        bodyType: "Coupe",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 3200,
        engine: "3.8L V6",
        horsepower: 600,
        color: "Red",
        condition: "Excellent",
        location: "San Jose, CA",
        seller: "Performance Imports",
        rating: 5,
        views: 211,
        isFavorite: false
      },
      {
        id: "23",
        name: "Acura MDX Type S 2023",
        year: 2023,
        price: 68500,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        make: "Acura",
        model: "MDX Type S",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 4100,
        engine: "3.0L V6",
        horsepower: 355,
        color: "Black",
        condition: "New Vehicle",
        location: "Columbus, OH",
        seller: "Acura Dealership",
        rating: 4.6,
        views: 98,
        isFavorite: false
      },
      {
        id: "24",
        name: "Volvo XC90 Recharge 2023",
        year: 2023,
        price: 72900,
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
        make: "Volvo",
        model: "XC90 Recharge",
        bodyType: "SUV",
        fuelType: "Hybrid",
        transmission: "Automatic",
        mileage: 2900,
        engine: "2.0L",
        horsepower: 400,
        color: "White",
        condition: "New Vehicle",
        location: "Salt Lake City, UT",
        seller: "Volvo Center",
        rating: 4.8,
        views: 127,
        isFavorite: false
      },
      {
        id: "25",
        name: "Cadillac Escalade ESV 2023",
        year: 2023,
        price: 105e3,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
        make: "Cadillac",
        model: "Escalade ESV",
        bodyType: "SUV",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 3500,
        engine: "6.2L V8",
        horsepower: 420,
        color: "Black",
        condition: "New Vehicle",
        location: "Indianapolis, IN",
        seller: "Luxury Auto Group",
        rating: 4.7,
        views: 156,
        isFavorite: false
      },
      {
        id: "26",
        name: "Genesis G70 Sport 2023",
        year: 2023,
        price: 48900,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        make: "Genesis",
        model: "G70 Sport",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 5600,
        engine: "3.3L V6",
        horsepower: 365,
        color: "Gray",
        condition: "New Vehicle",
        location: "Raleigh, NC",
        seller: "Genesis Dealership",
        rating: 4.5,
        views: 89,
        isFavorite: false
      },
      {
        id: "27",
        name: "Alfa Romeo Giulia Quadrifoglio 2022",
        year: 2022,
        price: 82500,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        make: "Alfa Romeo",
        model: "Giulia Quadrifoglio",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 12800,
        engine: "2.9L V6",
        horsepower: 505,
        color: "Red",
        condition: "Excellent",
        location: "Tampa, FL",
        seller: "Italian Motors",
        rating: 4.9,
        views: 167,
        isFavorite: false
      },
      {
        id: "28",
        name: "Infiniti Q50 Red Sport 2023",
        year: 2023,
        price: 58900,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        make: "Infiniti",
        model: "Q50 Red Sport",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 3200,
        engine: "3.0L V6",
        horsepower: 400,
        color: "Blue",
        condition: "New Vehicle",
        location: "Sacramento, CA",
        seller: "Infiniti Center",
        rating: 4.4,
        views: 76,
        isFavorite: false
      },
      {
        id: "29",
        name: "Kia Stinger GT2 2023",
        year: 2023,
        price: 52900,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
        make: "Kia",
        model: "Stinger GT2",
        bodyType: "Sedan",
        fuelType: "Petrol",
        transmission: "Automatic",
        mileage: 4800,
        engine: "3.3L V6",
        horsepower: 368,
        color: "Silver",
        condition: "New Vehicle",
        location: "Kansas City, MO",
        seller: "Kia Performance",
        rating: 4.6,
        views: 112,
        isFavorite: false
      },
      {
        id: "30",
        name: "Hyundai Ioniq 5 Limited 2023",
        year: 2023,
        price: 54500,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
        make: "Hyundai",
        model: "Ioniq 5 Limited",
        bodyType: "SUV",
        fuelType: "Electric",
        transmission: "Automatic",
        mileage: 1200,
        engine: "Electric",
        horsepower: 320,
        color: "White",
        condition: "New Vehicle",
        location: "Orlando, FL",
        seller: "Hyundai EV Center",
        rating: 4.8,
        views: 194,
        isFavorite: false
      }
    ];
    this.saveCars(initialCars);
    return initialCars;
  }
}
const dbAdapter = new LocalStorageAdapter();
export const db = {
  // Get all cars
  getAllCars() {
    return dbAdapter.getCars();
  },
  // Get car by ID
  getCarById(id) {
    return dbAdapter.getCars().find((car) => car.id === id);
  },
  // Search cars
  searchCars(query) {
    const cars = dbAdapter.getCars();
    const lowerQuery = query.toLowerCase();
    return cars.filter(
      (car) => car.name.toLowerCase().includes(lowerQuery) || car.make.toLowerCase().includes(lowerQuery) || car.model.toLowerCase().includes(lowerQuery)
    );
  },
  // Filter cars
  filterCars(filters) {
    let cars = dbAdapter.getCars();
    if (filters.make && filters.make.length > 0) {
      cars = cars.filter((car) => filters.make.includes(car.make));
    }
    if (filters.bodyType && filters.bodyType.length > 0) {
      cars = cars.filter((car) => filters.bodyType.includes(car.bodyType));
    }
    if (filters.fuelType && filters.fuelType.length > 0) {
      cars = cars.filter((car) => filters.fuelType.includes(car.fuelType));
    }
    if (filters.condition && filters.condition.length > 0) {
      cars = cars.filter((car) => filters.condition.includes(car.condition));
    }
    if (filters.color && filters.color.length > 0) {
      cars = cars.filter((car) => filters.color.includes(car.color));
    }
    if (filters.transmission && filters.transmission.length > 0) {
      cars = cars.filter((car) => filters.transmission.includes(car.transmission));
    }
    if (filters.priceRange) {
      cars = cars.filter(
        (car) => car.price >= filters.priceRange.min && car.price <= filters.priceRange.max
      );
    }
    if (filters.yearRange) {
      cars = cars.filter(
        (car) => car.year >= filters.yearRange.min && car.year <= filters.yearRange.max
      );
    }
    if (filters.mileageRange) {
      cars = cars.filter(
        (car) => car.mileage >= filters.mileageRange.min && car.mileage <= filters.mileageRange.max
      );
    }
    if (filters.horsepowerRange) {
      cars = cars.filter(
        (car) => car.horsepower >= filters.horsepowerRange.min && car.horsepower <= filters.horsepowerRange.max
      );
    }
    return cars;
  },
  // Add new car
  addCar(car) {
    const cars = dbAdapter.getCars();
    const newCar = {
      ...car,
      id: Date.now().toString()
    };
    cars.push(newCar);
    dbAdapter.saveCars(cars);
    return newCar;
  },
  // Update car
  updateCar(id, updates) {
    const cars = dbAdapter.getCars();
    const index = cars.findIndex((car) => car.id === id);
    if (index === -1) return void 0;
    cars[index] = { ...cars[index], ...updates };
    dbAdapter.saveCars(cars);
    return cars[index];
  },
  // Delete car
  deleteCar(id) {
    const cars = dbAdapter.getCars();
    const filteredCars = cars.filter((car) => car.id !== id);
    if (filteredCars.length === cars.length) return false;
    dbAdapter.saveCars(filteredCars);
    return true;
  },
  // Toggle favorite
  toggleFavorite(id) {
    const cars = dbAdapter.getCars();
    const car = cars.find((c) => c.id === id);
    if (!car) return void 0;
    car.isFavorite = !car.isFavorite;
    dbAdapter.saveCars(cars);
    return car;
  },
  // Clear all data
  clearAll() {
    dbAdapter.clear();
  },
  // Filter Preset Management
  saveFilterPreset(name, filters) {
    const presets = this.getFilterPresets();
    const newPreset = {
      id: Date.now().toString(),
      name,
      filters,
      createdAt: Date.now()
    };
    presets.push(newPreset);
    localStorage.setItem("recars_filter_presets", JSON.stringify(presets));
    return newPreset;
  },
  getFilterPresets() {
    try {
      const data = localStorage.getItem("recars_filter_presets");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error reading filter presets:", error);
      return [];
    }
  },
  deleteFilterPreset(id) {
    const presets = this.getFilterPresets();
    const filtered = presets.filter((p) => p.id !== id);
    if (filtered.length === presets.length) return false;
    localStorage.setItem("recars_filter_presets", JSON.stringify(filtered));
    return true;
  },
  loadFilterPreset(id) {
    const presets = this.getFilterPresets();
    const preset = presets.find((p) => p.id === id);
    return preset?.filters;
  },
  // Increment view count when user visits car details page
  incrementViews(id) {
    const cars = dbAdapter.getCars();
    const car = cars.find((c) => c.id === id);
    if (!car) return void 0;
    car.views = (car.views || 0) + 1;
    dbAdapter.saveCars(cars);
    return car;
  },
  // ===== CHAT MESSAGES =====
  getChatMessages(carId) {
    try {
      const data = localStorage.getItem("recars_chat_messages");
      if (!data) return [];
      const allMessages = JSON.parse(data);
      return allMessages.filter((msg) => msg.carId === carId).sort((a, b) => a.timestamp - b.timestamp);
    } catch (error) {
      console.error("Error reading chat messages:", error);
      return [];
    }
  },
  addChatMessage(message) {
    try {
      const data = localStorage.getItem("recars_chat_messages");
      const messages = data ? JSON.parse(data) : [];
      const newMessage = {
        ...message,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isEdited: false
      };
      messages.push(newMessage);
      localStorage.setItem("recars_chat_messages", JSON.stringify(messages));
      return newMessage;
    } catch (error) {
      console.error("Error adding chat message:", error);
      throw error;
    }
  },
  updateChatMessage(id, content) {
    try {
      const data = localStorage.getItem("recars_chat_messages");
      if (!data) return void 0;
      const messages = JSON.parse(data);
      const message = messages.find((m) => m.id === id);
      if (!message) return void 0;
      message.message = content;
      message.isEdited = true;
      localStorage.setItem("recars_chat_messages", JSON.stringify(messages));
      return message;
    } catch (error) {
      console.error("Error updating chat message:", error);
      return void 0;
    }
  },
  deleteChatMessage(id) {
    try {
      const data = localStorage.getItem("recars_chat_messages");
      if (!data) return false;
      const messages = JSON.parse(data);
      const filtered = messages.filter((m) => m.id !== id);
      if (filtered.length === messages.length) return false;
      localStorage.setItem("recars_chat_messages", JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error("Error deleting chat message:", error);
      return false;
    }
  },
  // ===== COMMENTS =====
  getComments(carId) {
    try {
      const data = localStorage.getItem("recars_comments");
      if (!data) return [];
      const allComments = JSON.parse(data);
      return allComments.filter((c) => c.carId === carId).sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error("Error reading comments:", error);
      return [];
    }
  },
  addComment(comment) {
    try {
      const data = localStorage.getItem("recars_comments");
      const comments = data ? JSON.parse(data) : [];
      const newComment = {
        ...comment,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isEdited: false,
        replies: []
      };
      comments.push(newComment);
      localStorage.setItem("recars_comments", JSON.stringify(comments));
      return newComment;
    } catch (error) {
      console.error("Error adding comment:", error);
      throw error;
    }
  },
  updateComment(id, content) {
    try {
      const data = localStorage.getItem("recars_comments");
      if (!data) return void 0;
      const comments = JSON.parse(data);
      const comment = comments.find((c) => c.id === id);
      if (!comment) return void 0;
      comment.content = content;
      comment.isEdited = true;
      localStorage.setItem("recars_comments", JSON.stringify(comments));
      return comment;
    } catch (error) {
      console.error("Error updating comment:", error);
      return void 0;
    }
  },
  deleteComment(id) {
    try {
      const data = localStorage.getItem("recars_comments");
      if (!data) return false;
      const comments = JSON.parse(data);
      const filtered = comments.filter((c) => c.id !== id);
      if (filtered.length === comments.length) return false;
      localStorage.setItem("recars_comments", JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error("Error deleting comment:", error);
      return false;
    }
  },
  addCommentReply(commentId, reply) {
    try {
      const data = localStorage.getItem("recars_comments");
      if (!data) return void 0;
      const comments = JSON.parse(data);
      const comment = comments.find((c) => c.id === commentId);
      if (!comment) return void 0;
      const newReply = {
        ...reply,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isEdited: false
      };
      comment.replies.push(newReply);
      localStorage.setItem("recars_comments", JSON.stringify(comments));
      return newReply;
    } catch (error) {
      console.error("Error adding comment reply:", error);
      return void 0;
    }
  },
  updateCommentReply(commentId, replyId, content) {
    try {
      const data = localStorage.getItem("recars_comments");
      if (!data) return void 0;
      const comments = JSON.parse(data);
      const comment = comments.find((c) => c.id === commentId);
      if (!comment) return void 0;
      const reply = comment.replies.find((r) => r.id === replyId);
      if (!reply) return void 0;
      reply.content = content;
      reply.isEdited = true;
      localStorage.setItem("recars_comments", JSON.stringify(comments));
      return reply;
    } catch (error) {
      console.error("Error updating comment reply:", error);
      return void 0;
    }
  },
  deleteCommentReply(commentId, replyId) {
    try {
      const data = localStorage.getItem("recars_comments");
      if (!data) return false;
      const comments = JSON.parse(data);
      const comment = comments.find((c) => c.id === commentId);
      if (!comment) return false;
      const filtered = comment.replies.filter((r) => r.id !== replyId);
      if (filtered.length === comment.replies.length) return false;
      comment.replies = filtered;
      localStorage.setItem("recars_comments", JSON.stringify(comments));
      return true;
    } catch (error) {
      console.error("Error deleting comment reply:", error);
      return false;
    }
  },
  // ===== NOTIFICATIONS =====
  getNotifications(userId = "user_123") {
    try {
      const data = localStorage.getItem("recars_notifications");
      if (!data) return [];
      const allNotifications = JSON.parse(data);
      return allNotifications.filter((n) => n.fromUserId !== userId).sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error("Error reading notifications:", error);
      return [];
    }
  },
  addNotification(notification) {
    try {
      const data = localStorage.getItem("recars_notifications");
      const notifications = data ? JSON.parse(data) : [];
      const newNotification = {
        ...notification,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        isRead: false
      };
      notifications.push(newNotification);
      localStorage.setItem("recars_notifications", JSON.stringify(notifications));
      return newNotification;
    } catch (error) {
      console.error("Error adding notification:", error);
      throw error;
    }
  },
  markNotificationAsRead(id) {
    try {
      const data = localStorage.getItem("recars_notifications");
      if (!data) return false;
      const notifications = JSON.parse(data);
      const notification = notifications.find((n) => n.id === id);
      if (!notification) return false;
      notification.isRead = true;
      localStorage.setItem("recars_notifications", JSON.stringify(notifications));
      return true;
    } catch (error) {
      console.error("Error marking notification as read:", error);
      return false;
    }
  },
  markAllNotificationsAsRead(userId = "user_123") {
    try {
      const data = localStorage.getItem("recars_notifications");
      if (!data) return false;
      const notifications = JSON.parse(data);
      notifications.forEach((n) => {
        if (n.fromUserId !== userId) {
          n.isRead = true;
        }
      });
      localStorage.setItem("recars_notifications", JSON.stringify(notifications));
      return true;
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
      return false;
    }
  },
  deleteNotification(id) {
    try {
      const data = localStorage.getItem("recars_notifications");
      if (!data) return false;
      const notifications = JSON.parse(data);
      const filtered = notifications.filter((n) => n.id !== id);
      if (filtered.length === notifications.length) return false;
      localStorage.setItem("recars_notifications", JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error("Error deleting notification:", error);
      return false;
    }
  },
  getUnreadNotificationCount(userId = "user_123") {
    try {
      const notifications = this.getNotifications(userId);
      return notifications.filter((n) => !n.isRead).length;
    } catch (error) {
      console.error("Error getting unread count:", error);
      return 0;
    }
  },
  clearAllNotifications(userId = "user_123") {
    try {
      const data = localStorage.getItem("recars_notifications");
      if (!data) return false;
      const notifications = JSON.parse(data);
      const filtered = notifications.filter((n) => n.fromUserId === userId);
      localStorage.setItem("recars_notifications", JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error("Error clearing notifications:", error);
      return false;
    }
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERhdGFiYXNlIGFic3RyYWN0aW9uIGxheWVyIC0gRWFzeSB0byBzd2FwIGxvY2FsU3RvcmFnZSB3aXRoIG90aGVyIERCIHNvbHV0aW9uc1xuLy8gSnVzdCBtb2RpZnkgdGhlIERhdGFiYXNlQWRhcHRlciBpbXBsZW1lbnRhdGlvbiB0byB1c2UgZGlmZmVyZW50IHN0b3JhZ2VcblxuZXhwb3J0IGludGVyZmFjZSBDYXIge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHllYXI6IG51bWJlcjtcbiAgcHJpY2U6IG51bWJlcjtcbiAgaW1hZ2U6IHN0cmluZztcbiAgbWFrZTogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBib2R5VHlwZTogc3RyaW5nO1xuICBmdWVsVHlwZTogc3RyaW5nO1xuICB0cmFuc21pc3Npb246IHN0cmluZztcbiAgbWlsZWFnZTogbnVtYmVyO1xuICBlbmdpbmU6IHN0cmluZztcbiAgaG9yc2Vwb3dlcjogbnVtYmVyO1xuICBjb2xvcjogc3RyaW5nO1xuICBjb25kaXRpb246IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbiAgc2VsbGVyOiBzdHJpbmc7XG4gIHJhdGluZzogbnVtYmVyO1xuICB2aWV3czogbnVtYmVyO1xuICBpc0Zhdm9yaXRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJPcHRpb25zIHtcbiAgbWFrZT86IHN0cmluZ1tdO1xuICBib2R5VHlwZT86IHN0cmluZ1tdO1xuICBmdWVsVHlwZT86IHN0cmluZ1tdO1xuICBjb25kaXRpb24/OiBzdHJpbmdbXTtcbiAgY29sb3I/OiBzdHJpbmdbXTtcbiAgcHJpY2VSYW5nZT86IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH07XG4gIHllYXJSYW5nZT86IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH07XG4gIG1pbGVhZ2VSYW5nZT86IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH07XG4gIGhvcnNlcG93ZXJSYW5nZT86IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH07XG4gIHRyYW5zbWlzc2lvbj86IHN0cmluZ1tdO1xuICBpbmNsdWRlVW5sYWJlbGVkVmVoaWNsZXM/OiBib29sZWFuO1xuICBicmFuZHNPZmZlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyUHJlc2V0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBmaWx0ZXJzOiBGaWx0ZXJPcHRpb25zO1xuICBjcmVhdGVkQXQ6IG51bWJlcjtcbn1cblxuLy8gRGF0YWJhc2UgQWRhcHRlciBJbnRlcmZhY2UgLSBJbXBsZW1lbnQgdGhpcyBmb3IgZGlmZmVyZW50IGRhdGFiYXNlc1xuaW50ZXJmYWNlIERhdGFiYXNlQWRhcHRlciB7XG4gIGdldENhcnMoKTogQ2FyW107XG4gIHNhdmVDYXJzKGNhcnM6IENhcltdKTogdm9pZDtcbiAgY2xlYXIoKTogdm9pZDtcbn1cblxuLy8gTG9jYWxTdG9yYWdlIEltcGxlbWVudGF0aW9uXG5jbGFzcyBMb2NhbFN0b3JhZ2VBZGFwdGVyIGltcGxlbWVudHMgRGF0YWJhc2VBZGFwdGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBTVE9SQUdFX0tFWSA9ICdyZWNhcnNfZGF0YWJhc2UnO1xuXG4gIGdldENhcnMoKTogQ2FyW10ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5TVE9SQUdFX0tFWSk7XG4gICAgICBpZiAoIWRhdGEpIHJldHVybiB0aGlzLmdldEluaXRpYWxEYXRhKCk7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBmcm9tIGxvY2FsU3RvcmFnZTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVDYXJzKGNhcnM6IENhcltdKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGNhcnMpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIHRvIGxvY2FsU3RvcmFnZTonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5TVE9SQUdFX0tFWSk7XG4gIH1cblxuICBwcml2YXRlIGdldEluaXRpYWxEYXRhKCk6IENhcltdIHtcbiAgICAvLyBJbml0aWFsIG1vY2sgZGF0YSB3aXRoIGRpdmVyc2UgdmVoaWNsZSBsaXN0aW5nc1xuICAgIGNvbnN0IGluaXRpYWxDYXJzOiBDYXJbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgbmFtZTogJ01lcmNlZGVzLUJlbnogQzQzIEFNRyAyMDE3JyxcbiAgICAgICAgeWVhcjogMjAxNyxcbiAgICAgICAgcHJpY2U6IDkzMDAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE4ODQzNDc5MzEzLTQwZjhhZmI0YjRkOD93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdNZXJjZWRlcy1CZW56JyxcbiAgICAgICAgbW9kZWw6ICdDNDMgQU1HJyxcbiAgICAgICAgYm9keVR5cGU6ICdTZWRhbicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnUGV0cm9sJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogOTcwMDAsXG4gICAgICAgIGVuZ2luZTogJzMuMEwnLFxuICAgICAgICBob3JzZXBvd2VyOiA0MzUsXG4gICAgICAgIGNvbG9yOiAnU2lsdmVyJyxcbiAgICAgICAgY29uZGl0aW9uOiAnRXhjZWxsZW50JyxcbiAgICAgICAgbG9jYXRpb246ICdOZXcgWW9yaywgTlknLFxuICAgICAgICBzZWxsZXI6ICdQcmVtaXVtIE1vdG9ycycsXG4gICAgICAgIHJhdGluZzogNC41LFxuICAgICAgICB2aWV3czogOTgsXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICBuYW1lOiAnQk1XIE01IENvbXBldGl0aW9uIDIwMjInLFxuICAgICAgICB5ZWFyOiAyMDIyLFxuICAgICAgICBwcmljZTogMTI1MDAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU1MjE1Njk1LTMwMDQ5ODBhZDU0ZT93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdCTVcnLFxuICAgICAgICBtb2RlbDogJ001IENvbXBldGl0aW9uJyxcbiAgICAgICAgYm9keVR5cGU6ICdTZWRhbicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnUGV0cm9sJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMTIwMDAsXG4gICAgICAgIGVuZ2luZTogJzQuNEwgVjgnLFxuICAgICAgICBob3JzZXBvd2VyOiA2MTcsXG4gICAgICAgIGNvbG9yOiAnQmxhY2snLFxuICAgICAgICBjb25kaXRpb246ICdFeGNlbGxlbnQnLFxuICAgICAgICBsb2NhdGlvbjogJ0xvcyBBbmdlbGVzLCBDQScsXG4gICAgICAgIHNlbGxlcjogJ0x1eHVyeSBBdXRvIEdyb3VwJyxcbiAgICAgICAgcmF0aW5nOiA1LFxuICAgICAgICB2aWV3czogMTQ1LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgbmFtZTogJ0F1ZGkgUlM3IFNwb3J0YmFjayAyMDIxJyxcbiAgICAgICAgeWVhcjogMjAyMSxcbiAgICAgICAgcHJpY2U6IDExODUwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwNjY2NDUxNTUyNC1lZDJmNzg2YTBiZDY/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnQXVkaScsXG4gICAgICAgIG1vZGVsOiAnUlM3IFNwb3J0YmFjaycsXG4gICAgICAgIGJvZHlUeXBlOiAnU2VkYW4nLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDE4NTAwLFxuICAgICAgICBlbmdpbmU6ICc0LjBMIFY4JyxcbiAgICAgICAgaG9yc2Vwb3dlcjogNTkxLFxuICAgICAgICBjb2xvcjogJ0JsdWUnLFxuICAgICAgICBjb25kaXRpb246ICdFeGNlbGxlbnQnLFxuICAgICAgICBsb2NhdGlvbjogJ01pYW1pLCBGTCcsXG4gICAgICAgIHNlbGxlcjogJ0VsaXRlIE1vdG9ycycsXG4gICAgICAgIHJhdGluZzogNC44LFxuICAgICAgICB2aWV3czogMTMyLFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgbmFtZTogJ1Rlc2xhIE1vZGVsIFMgUGxhaWQgMjAyMycsXG4gICAgICAgIHllYXI6IDIwMjMsXG4gICAgICAgIHByaWNlOiAxMzUwMDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTc3ODgxMzgwMTctODBhZDQwNjUxMzk5P3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ1Rlc2xhJyxcbiAgICAgICAgbW9kZWw6ICdNb2RlbCBTIFBsYWlkJyxcbiAgICAgICAgYm9keVR5cGU6ICdTZWRhbicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnRWxlY3RyaWMnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiA1MjAwLFxuICAgICAgICBlbmdpbmU6ICdFbGVjdHJpYycsXG4gICAgICAgIGhvcnNlcG93ZXI6IDEwMjAsXG4gICAgICAgIGNvbG9yOiAnV2hpdGUnLFxuICAgICAgICBjb25kaXRpb246ICdOZXcgVmVoaWNsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnU2FuIEZyYW5jaXNjbywgQ0EnLFxuICAgICAgICBzZWxsZXI6ICdUZXNsYSBEaXJlY3QnLFxuICAgICAgICByYXRpbmc6IDQuOSxcbiAgICAgICAgdmlld3M6IDIxMCxcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnNScsXG4gICAgICAgIG5hbWU6ICdQb3JzY2hlIDkxMSBUdXJibyBTIDIwMjInLFxuICAgICAgICB5ZWFyOiAyMDIyLFxuICAgICAgICBwcmljZTogMjI1MDAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAzMzc2NzgwMzUzLTdlNjY5Mjc2N2I3MD93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdQb3JzY2hlJyxcbiAgICAgICAgbW9kZWw6ICc5MTEgVHVyYm8gUycsXG4gICAgICAgIGJvZHlUeXBlOiAnQ291cGUnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDg1MDAsXG4gICAgICAgIGVuZ2luZTogJzMuOEwnLFxuICAgICAgICBob3JzZXBvd2VyOiA2NDAsXG4gICAgICAgIGNvbG9yOiAnUmVkJyxcbiAgICAgICAgY29uZGl0aW9uOiAnRXhjZWxsZW50JyxcbiAgICAgICAgbG9jYXRpb246ICdDaGljYWdvLCBJTCcsXG4gICAgICAgIHNlbGxlcjogJ1ByZXN0aWdlIEF1dG8nLFxuICAgICAgICByYXRpbmc6IDUsXG4gICAgICAgIHZpZXdzOiAxOTgsXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzYnLFxuICAgICAgICBuYW1lOiAnVG95b3RhIENhbXJ5IFhTRSAyMDIzJyxcbiAgICAgICAgeWVhcjogMjAyMyxcbiAgICAgICAgcHJpY2U6IDMyNTAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjIxMDA3OTQ3MzgyLWJiM2MzOTk0ZTNmYj93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdUb3lvdGEnLFxuICAgICAgICBtb2RlbDogJ0NhbXJ5IFhTRScsXG4gICAgICAgIGJvZHlUeXBlOiAnU2VkYW4nLFxuICAgICAgICBmdWVsVHlwZTogJ0h5YnJpZCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDMyMDAsXG4gICAgICAgIGVuZ2luZTogJzIuNUwnLFxuICAgICAgICBob3JzZXBvd2VyOiAyMDgsXG4gICAgICAgIGNvbG9yOiAnU2lsdmVyJyxcbiAgICAgICAgY29uZGl0aW9uOiAnTmV3IFZlaGljbGUnLFxuICAgICAgICBsb2NhdGlvbjogJ0hvdXN0b24sIFRYJyxcbiAgICAgICAgc2VsbGVyOiAnVG95b3RhIERlYWxlcnNoaXAnLFxuICAgICAgICByYXRpbmc6IDQuNixcbiAgICAgICAgdmlld3M6IDg3LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc3JyxcbiAgICAgICAgbmFtZTogJ0xleHVzIFJYIDQ1MGggMjAyMicsXG4gICAgICAgIHllYXI6IDIwMjIsXG4gICAgICAgIHByaWNlOiA1ODkwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwOTUyMTI2MzA0Ny1mOGYyMDUyOTNmMjQ/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnTGV4dXMnLFxuICAgICAgICBtb2RlbDogJ1JYIDQ1MGgnLFxuICAgICAgICBib2R5VHlwZTogJ1NVVicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnSHlicmlkJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMTU2MDAsXG4gICAgICAgIGVuZ2luZTogJzMuNUwgVjYnLFxuICAgICAgICBob3JzZXBvd2VyOiAzMDgsXG4gICAgICAgIGNvbG9yOiAnQmxhY2snLFxuICAgICAgICBjb25kaXRpb246ICdFeGNlbGxlbnQnLFxuICAgICAgICBsb2NhdGlvbjogJ1NlYXR0bGUsIFdBJyxcbiAgICAgICAgc2VsbGVyOiAnTGV4dXMgUHJlbWl1bScsXG4gICAgICAgIHJhdGluZzogNC43LFxuICAgICAgICB2aWV3czogMTU2LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICc4JyxcbiAgICAgICAgbmFtZTogJ1JhbmdlIFJvdmVyIFNwb3J0IEhTRSAyMDIxJyxcbiAgICAgICAgeWVhcjogMjAyMSxcbiAgICAgICAgcHJpY2U6IDg3NTAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA2NjY0NTE1NTI0LWVkMmY3ODZhMGJkNj93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdMYW5kIFJvdmVyJyxcbiAgICAgICAgbW9kZWw6ICdSYW5nZSBSb3ZlciBTcG9ydCBIU0UnLFxuICAgICAgICBib2R5VHlwZTogJ1NVVicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnUGV0cm9sJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMjIwMDAsXG4gICAgICAgIGVuZ2luZTogJzMuMEwnLFxuICAgICAgICBob3JzZXBvd2VyOiAzNTUsXG4gICAgICAgIGNvbG9yOiAnV2hpdGUnLFxuICAgICAgICBjb25kaXRpb246ICdHb29kJyxcbiAgICAgICAgbG9jYXRpb246ICdCb3N0b24sIE1BJyxcbiAgICAgICAgc2VsbGVyOiAnTHV4dXJ5IFNVViBDZW50ZXInLFxuICAgICAgICByYXRpbmc6IDQuNSxcbiAgICAgICAgdmlld3M6IDExMixcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnOScsXG4gICAgICAgIG5hbWU6ICdGb3JkIE11c3RhbmcgR1QgMjAyMycsXG4gICAgICAgIHllYXI6IDIwMjMsXG4gICAgICAgIHByaWNlOiA0ODkwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NDM0NTYwNDQ3Ni04ZWM1ZjZiM2M2ZDA/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnRm9yZCcsXG4gICAgICAgIG1vZGVsOiAnTXVzdGFuZyBHVCcsXG4gICAgICAgIGJvZHlUeXBlOiAnQ291cGUnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ01hbnVhbCcsXG4gICAgICAgIG1pbGVhZ2U6IDE1MDAsXG4gICAgICAgIGVuZ2luZTogJzUuMEwgVjgnLFxuICAgICAgICBob3JzZXBvd2VyOiA0NTAsXG4gICAgICAgIGNvbG9yOiAnQmx1ZScsXG4gICAgICAgIGNvbmRpdGlvbjogJ05ldyBWZWhpY2xlJyxcbiAgICAgICAgbG9jYXRpb246ICdEZXRyb2l0LCBNSScsXG4gICAgICAgIHNlbGxlcjogJ0ZvcmQgUGVyZm9ybWFuY2UnLFxuICAgICAgICByYXRpbmc6IDQuOCxcbiAgICAgICAgdmlld3M6IDE3NixcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMTAnLFxuICAgICAgICBuYW1lOiAnQ2hldnJvbGV0IENvcnZldHRlIFN0aW5ncmF5IDIwMjInLFxuICAgICAgICB5ZWFyOiAyMDIyLFxuICAgICAgICBwcmljZTogNzI1MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTI1MTk1MDctZGEzYjE0MmM2ZTNkP3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ0NoZXZyb2xldCcsXG4gICAgICAgIG1vZGVsOiAnQ29ydmV0dGUgU3RpbmdyYXknLFxuICAgICAgICBib2R5VHlwZTogJ0NvdXBlJyxcbiAgICAgICAgZnVlbFR5cGU6ICdQZXRyb2wnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiA2ODAwLFxuICAgICAgICBlbmdpbmU6ICc2LjJMIFY4JyxcbiAgICAgICAgaG9yc2Vwb3dlcjogNDkwLFxuICAgICAgICBjb2xvcjogJ1JlZCcsXG4gICAgICAgIGNvbmRpdGlvbjogJ0V4Y2VsbGVudCcsXG4gICAgICAgIGxvY2F0aW9uOiAnUGhvZW5peCwgQVonLFxuICAgICAgICBzZWxsZXI6ICdQZXJmb3JtYW5jZSBBdXRvJyxcbiAgICAgICAgcmF0aW5nOiA0LjksXG4gICAgICAgIHZpZXdzOiAyMDMsXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzExJyxcbiAgICAgICAgbmFtZTogJ01lcmNlZGVzLUJlbnogQ0xBMjAwIDIwMTknLFxuICAgICAgICB5ZWFyOiAyMDE5LFxuICAgICAgICBwcmljZTogNDU1MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTc4MTQwNzYzNjctYjc1OWM3ZDdlNzM4P3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ01lcmNlZGVzLUJlbnonLFxuICAgICAgICBtb2RlbDogJ0NMQTIwMCcsXG4gICAgICAgIGJvZHlUeXBlOiAnQ291cGUnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDI4MDAwLFxuICAgICAgICBlbmdpbmU6ICcyLjBMJyxcbiAgICAgICAgaG9yc2Vwb3dlcjogMTg4LFxuICAgICAgICBjb2xvcjogJ1NpbHZlcicsXG4gICAgICAgIGNvbmRpdGlvbjogJ0dvb2QnLFxuICAgICAgICBsb2NhdGlvbjogJ0F0bGFudGEsIEdBJyxcbiAgICAgICAgc2VsbGVyOiAnTWV0cm8gTW90b3JzJyxcbiAgICAgICAgcmF0aW5nOiA0LjMsXG4gICAgICAgIHZpZXdzOiA4MyxcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMTInLFxuICAgICAgICBuYW1lOiAnQk1XIFg1IE01MGkgMjAyMycsXG4gICAgICAgIHllYXI6IDIwMjMsXG4gICAgICAgIHByaWNlOiA5ODAwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwOTUyMTI2MzA0Ny1mOGYyMDUyOTNmMjQ/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnQk1XJyxcbiAgICAgICAgbW9kZWw6ICdYNSBNNTBpJyxcbiAgICAgICAgYm9keVR5cGU6ICdTVVYnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDQyMDAsXG4gICAgICAgIGVuZ2luZTogJzQuNEwgVjgnLFxuICAgICAgICBob3JzZXBvd2VyOiA1MjMsXG4gICAgICAgIGNvbG9yOiAnQmxhY2snLFxuICAgICAgICBjb25kaXRpb246ICdOZXcgVmVoaWNsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnRGFsbGFzLCBUWCcsXG4gICAgICAgIHNlbGxlcjogJ0JNVyBFbGl0ZScsXG4gICAgICAgIHJhdGluZzogNC44LFxuICAgICAgICB2aWV3czogMTY3LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxMycsXG4gICAgICAgIG5hbWU6ICdBdWRpIFE3IFByZW1pdW0gUGx1cyAyMDIyJyxcbiAgICAgICAgeWVhcjogMjAyMixcbiAgICAgICAgcHJpY2U6IDY4OTAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA2NjY0NTE1NTI0LWVkMmY3ODZhMGJkNj93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdBdWRpJyxcbiAgICAgICAgbW9kZWw6ICdRNyBQcmVtaXVtIFBsdXMnLFxuICAgICAgICBib2R5VHlwZTogJ1NVVicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnUGV0cm9sJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMTY1MDAsXG4gICAgICAgIGVuZ2luZTogJzMuMEwgVjYnLFxuICAgICAgICBob3JzZXBvd2VyOiAzMzUsXG4gICAgICAgIGNvbG9yOiAnV2hpdGUnLFxuICAgICAgICBjb25kaXRpb246ICdFeGNlbGxlbnQnLFxuICAgICAgICBsb2NhdGlvbjogJ0RlbnZlciwgQ08nLFxuICAgICAgICBzZWxsZXI6ICdBdWRpIENlbnRlcicsXG4gICAgICAgIHJhdGluZzogNC42LFxuICAgICAgICB2aWV3czogMTM0LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxNCcsXG4gICAgICAgIG5hbWU6ICdUZXNsYSBNb2RlbCAzIFBlcmZvcm1hbmNlIDIwMjMnLFxuICAgICAgICB5ZWFyOiAyMDIzLFxuICAgICAgICBwcmljZTogNjIwMDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjA5NTgwODktYjhhMTkyOWNlYTg5P3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ1Rlc2xhJyxcbiAgICAgICAgbW9kZWw6ICdNb2RlbCAzIFBlcmZvcm1hbmNlJyxcbiAgICAgICAgYm9keVR5cGU6ICdTZWRhbicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnRWxlY3RyaWMnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiAyMTAwLFxuICAgICAgICBlbmdpbmU6ICdFbGVjdHJpYycsXG4gICAgICAgIGhvcnNlcG93ZXI6IDQ1MCxcbiAgICAgICAgY29sb3I6ICdCbHVlJyxcbiAgICAgICAgY29uZGl0aW9uOiAnTmV3IFZlaGljbGUnLFxuICAgICAgICBsb2NhdGlvbjogJ0F1c3RpbiwgVFgnLFxuICAgICAgICBzZWxsZXI6ICdUZXNsYSBEaXJlY3QnLFxuICAgICAgICByYXRpbmc6IDQuOSxcbiAgICAgICAgdmlld3M6IDI4OSxcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMTUnLFxuICAgICAgICBuYW1lOiAnSG9uZGEgQWNjb3JkIFNwb3J0IDIwMjMnLFxuICAgICAgICB5ZWFyOiAyMDIzLFxuICAgICAgICBwcmljZTogMjk1MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTAzNjI4OTE5OTEtZjc3NmU3NDdhNTg4P3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ0hvbmRhJyxcbiAgICAgICAgbW9kZWw6ICdBY2NvcmQgU3BvcnQnLFxuICAgICAgICBib2R5VHlwZTogJ1NlZGFuJyxcbiAgICAgICAgZnVlbFR5cGU6ICdIeWJyaWQnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiA1NjAwLFxuICAgICAgICBlbmdpbmU6ICcyLjBMJyxcbiAgICAgICAgaG9yc2Vwb3dlcjogMjA0LFxuICAgICAgICBjb2xvcjogJ0dyYXknLFxuICAgICAgICBjb25kaXRpb246ICdOZXcgVmVoaWNsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnUG9ydGxhbmQsIE9SJyxcbiAgICAgICAgc2VsbGVyOiAnSG9uZGEgRGVhbGVyc2hpcCcsXG4gICAgICAgIHJhdGluZzogNC41LFxuICAgICAgICB2aWV3czogOTIsXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzE2JyxcbiAgICAgICAgbmFtZTogJ1BvcnNjaGUgQ2F5ZW5uZSBUdXJibyAyMDIyJyxcbiAgICAgICAgeWVhcjogMjAyMixcbiAgICAgICAgcHJpY2U6IDE0NTAwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwOTUyMTI2MzA0Ny1mOGYyMDUyOTNmMjQ/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnUG9yc2NoZScsXG4gICAgICAgIG1vZGVsOiAnQ2F5ZW5uZSBUdXJibycsXG4gICAgICAgIGJvZHlUeXBlOiAnU1VWJyxcbiAgICAgICAgZnVlbFR5cGU6ICdQZXRyb2wnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiAxMTIwMCxcbiAgICAgICAgZW5naW5lOiAnNC4wTCBWOCcsXG4gICAgICAgIGhvcnNlcG93ZXI6IDU0MSxcbiAgICAgICAgY29sb3I6ICdCbGFjaycsXG4gICAgICAgIGNvbmRpdGlvbjogJ0V4Y2VsbGVudCcsXG4gICAgICAgIGxvY2F0aW9uOiAnTGFzIFZlZ2FzLCBOVicsXG4gICAgICAgIHNlbGxlcjogJ1ByZXN0aWdlIEF1dG8nLFxuICAgICAgICByYXRpbmc6IDQuOSxcbiAgICAgICAgdmlld3M6IDE3OCxcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMTcnLFxuICAgICAgICBuYW1lOiAnTWF6ZGEgQ1gtNSBUdXJibyAyMDIzJyxcbiAgICAgICAgeWVhcjogMjAyMyxcbiAgICAgICAgcHJpY2U6IDM4OTAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA2NjY0NTE1NTI0LWVkMmY3ODZhMGJkNj93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdNYXpkYScsXG4gICAgICAgIG1vZGVsOiAnQ1gtNSBUdXJibycsXG4gICAgICAgIGJvZHlUeXBlOiAnU1VWJyxcbiAgICAgICAgZnVlbFR5cGU6ICdQZXRyb2wnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiA3MjAwLFxuICAgICAgICBlbmdpbmU6ICcyLjVMJyxcbiAgICAgICAgaG9yc2Vwb3dlcjogMjU2LFxuICAgICAgICBjb2xvcjogJ1JlZCcsXG4gICAgICAgIGNvbmRpdGlvbjogJ05ldyBWZWhpY2xlJyxcbiAgICAgICAgbG9jYXRpb246ICdNaW5uZWFwb2xpcywgTU4nLFxuICAgICAgICBzZWxsZXI6ICdNYXpkYSBDZW50ZXInLFxuICAgICAgICByYXRpbmc6IDQuNCxcbiAgICAgICAgdmlld3M6IDY4LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxOCcsXG4gICAgICAgIG5hbWU6ICdKYWd1YXIgRi1UeXBlIFIgMjAyMScsXG4gICAgICAgIHllYXI6IDIwMjEsXG4gICAgICAgIHByaWNlOiA4OTUwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMzM3Njc4MDM1My03ZTY2OTI3NjdiNzA/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnSmFndWFyJyxcbiAgICAgICAgbW9kZWw6ICdGLVR5cGUgUicsXG4gICAgICAgIGJvZHlUeXBlOiAnQ291cGUnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDE0ODAwLFxuICAgICAgICBlbmdpbmU6ICc1LjBMIFY4JyxcbiAgICAgICAgaG9yc2Vwb3dlcjogNTc1LFxuICAgICAgICBjb2xvcjogJ0dyZWVuJyxcbiAgICAgICAgY29uZGl0aW9uOiAnRXhjZWxsZW50JyxcbiAgICAgICAgbG9jYXRpb246ICdOYXNodmlsbGUsIFROJyxcbiAgICAgICAgc2VsbGVyOiAnRXhvdGljIENhcnMnLFxuICAgICAgICByYXRpbmc6IDQuNyxcbiAgICAgICAgdmlld3M6IDEyNCxcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMTknLFxuICAgICAgICBuYW1lOiAnVm9sa3N3YWdlbiBHb2xmIEdUSSAyMDIzJyxcbiAgICAgICAgeWVhcjogMjAyMyxcbiAgICAgICAgcHJpY2U6IDM0NTAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUyNTE5NTA3LWRhM2IxNDJjNmUzZD93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdWb2xrc3dhZ2VuJyxcbiAgICAgICAgbW9kZWw6ICdHb2xmIEdUSScsXG4gICAgICAgIGJvZHlUeXBlOiAnSGF0Y2hiYWNrJyxcbiAgICAgICAgZnVlbFR5cGU6ICdQZXRyb2wnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdNYW51YWwnLFxuICAgICAgICBtaWxlYWdlOiAyODAwLFxuICAgICAgICBlbmdpbmU6ICcyLjBMJyxcbiAgICAgICAgaG9yc2Vwb3dlcjogMjQxLFxuICAgICAgICBjb2xvcjogJ1doaXRlJyxcbiAgICAgICAgY29uZGl0aW9uOiAnTmV3IFZlaGljbGUnLFxuICAgICAgICBsb2NhdGlvbjogJ1BoaWxhZGVscGhpYSwgUEEnLFxuICAgICAgICBzZWxsZXI6ICdWVyBQZXJmb3JtYW5jZScsXG4gICAgICAgIHJhdGluZzogNC42LFxuICAgICAgICB2aWV3czogOTUsXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzIwJyxcbiAgICAgICAgbmFtZTogJ1N1YmFydSBXUlggU1RJIDIwMjInLFxuICAgICAgICB5ZWFyOiAyMDIyLFxuICAgICAgICBwcmljZTogNDI5MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUyMTU2OTUtMzAwNDk4MGFkNTRlP3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ1N1YmFydScsXG4gICAgICAgIG1vZGVsOiAnV1JYIFNUSScsXG4gICAgICAgIGJvZHlUeXBlOiAnU2VkYW4nLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ01hbnVhbCcsXG4gICAgICAgIG1pbGVhZ2U6IDk1MDAsXG4gICAgICAgIGVuZ2luZTogJzIuNUwnLFxuICAgICAgICBob3JzZXBvd2VyOiAzMTAsXG4gICAgICAgIGNvbG9yOiAnQmx1ZScsXG4gICAgICAgIGNvbmRpdGlvbjogJ0V4Y2VsbGVudCcsXG4gICAgICAgIGxvY2F0aW9uOiAnU2FuIERpZWdvLCBDQScsXG4gICAgICAgIHNlbGxlcjogJ1JhbGx5IE1vdG9ycycsXG4gICAgICAgIHJhdGluZzogNC44LFxuICAgICAgICB2aWV3czogMTU2LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcyMScsXG4gICAgICAgIG5hbWU6ICdNZXJjZWRlcy1CZW56IEdMRTQ1MCBBTUcgMjAyMycsXG4gICAgICAgIHllYXI6IDIwMjMsXG4gICAgICAgIHByaWNlOiA5NTUwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwOTUyMTI2MzA0Ny1mOGYyMDUyOTNmMjQ/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnTWVyY2VkZXMtQmVueicsXG4gICAgICAgIG1vZGVsOiAnR0xFNDUwIEFNRycsXG4gICAgICAgIGJvZHlUeXBlOiAnU1VWJyxcbiAgICAgICAgZnVlbFR5cGU6ICdQZXRyb2wnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiA2MjAwLFxuICAgICAgICBlbmdpbmU6ICczLjBMJyxcbiAgICAgICAgaG9yc2Vwb3dlcjogMzYyLFxuICAgICAgICBjb2xvcjogJ1NpbHZlcicsXG4gICAgICAgIGNvbmRpdGlvbjogJ05ldyBWZWhpY2xlJyxcbiAgICAgICAgbG9jYXRpb246ICdDaGFybG90dGUsIE5DJyxcbiAgICAgICAgc2VsbGVyOiAnUHJlbWl1bSBNb3RvcnMnLFxuICAgICAgICByYXRpbmc6IDQuNyxcbiAgICAgICAgdmlld3M6IDE0MyxcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMjInLFxuICAgICAgICBuYW1lOiAnTmlzc2FuIEdULVIgTmlzbW8gMjAyMicsXG4gICAgICAgIHllYXI6IDIwMjIsXG4gICAgICAgIHByaWNlOiAxNzgwMDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTI1MTk1MDctZGEzYjE0MmM2ZTNkP3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ05pc3NhbicsXG4gICAgICAgIG1vZGVsOiAnR1QtUiBOaXNtbycsXG4gICAgICAgIGJvZHlUeXBlOiAnQ291cGUnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDMyMDAsXG4gICAgICAgIGVuZ2luZTogJzMuOEwgVjYnLFxuICAgICAgICBob3JzZXBvd2VyOiA2MDAsXG4gICAgICAgIGNvbG9yOiAnUmVkJyxcbiAgICAgICAgY29uZGl0aW9uOiAnRXhjZWxsZW50JyxcbiAgICAgICAgbG9jYXRpb246ICdTYW4gSm9zZSwgQ0EnLFxuICAgICAgICBzZWxsZXI6ICdQZXJmb3JtYW5jZSBJbXBvcnRzJyxcbiAgICAgICAgcmF0aW5nOiA1LFxuICAgICAgICB2aWV3czogMjExLFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcyMycsXG4gICAgICAgIG5hbWU6ICdBY3VyYSBNRFggVHlwZSBTIDIwMjMnLFxuICAgICAgICB5ZWFyOiAyMDIzLFxuICAgICAgICBwcmljZTogNjg1MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MDY2NjQ1MTU1MjQtZWQyZjc4NmEwYmQ2P3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ0FjdXJhJyxcbiAgICAgICAgbW9kZWw6ICdNRFggVHlwZSBTJyxcbiAgICAgICAgYm9keVR5cGU6ICdTVVYnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDQxMDAsXG4gICAgICAgIGVuZ2luZTogJzMuMEwgVjYnLFxuICAgICAgICBob3JzZXBvd2VyOiAzNTUsXG4gICAgICAgIGNvbG9yOiAnQmxhY2snLFxuICAgICAgICBjb25kaXRpb246ICdOZXcgVmVoaWNsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnQ29sdW1idXMsIE9IJyxcbiAgICAgICAgc2VsbGVyOiAnQWN1cmEgRGVhbGVyc2hpcCcsXG4gICAgICAgIHJhdGluZzogNC42LFxuICAgICAgICB2aWV3czogOTgsXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzI0JyxcbiAgICAgICAgbmFtZTogJ1ZvbHZvIFhDOTAgUmVjaGFyZ2UgMjAyMycsXG4gICAgICAgIHllYXI6IDIwMjMsXG4gICAgICAgIHByaWNlOiA3MjkwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwOTUyMTI2MzA0Ny1mOGYyMDUyOTNmMjQ/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnVm9sdm8nLFxuICAgICAgICBtb2RlbDogJ1hDOTAgUmVjaGFyZ2UnLFxuICAgICAgICBib2R5VHlwZTogJ1NVVicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnSHlicmlkJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMjkwMCxcbiAgICAgICAgZW5naW5lOiAnMi4wTCcsXG4gICAgICAgIGhvcnNlcG93ZXI6IDQwMCxcbiAgICAgICAgY29sb3I6ICdXaGl0ZScsXG4gICAgICAgIGNvbmRpdGlvbjogJ05ldyBWZWhpY2xlJyxcbiAgICAgICAgbG9jYXRpb246ICdTYWx0IExha2UgQ2l0eSwgVVQnLFxuICAgICAgICBzZWxsZXI6ICdWb2x2byBDZW50ZXInLFxuICAgICAgICByYXRpbmc6IDQuOCxcbiAgICAgICAgdmlld3M6IDEyNyxcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMjUnLFxuICAgICAgICBuYW1lOiAnQ2FkaWxsYWMgRXNjYWxhZGUgRVNWIDIwMjMnLFxuICAgICAgICB5ZWFyOiAyMDIzLFxuICAgICAgICBwcmljZTogMTA1MDAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA2NjY0NTE1NTI0LWVkMmY3ODZhMGJkNj93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdDYWRpbGxhYycsXG4gICAgICAgIG1vZGVsOiAnRXNjYWxhZGUgRVNWJyxcbiAgICAgICAgYm9keVR5cGU6ICdTVVYnLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDM1MDAsXG4gICAgICAgIGVuZ2luZTogJzYuMkwgVjgnLFxuICAgICAgICBob3JzZXBvd2VyOiA0MjAsXG4gICAgICAgIGNvbG9yOiAnQmxhY2snLFxuICAgICAgICBjb25kaXRpb246ICdOZXcgVmVoaWNsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnSW5kaWFuYXBvbGlzLCBJTicsXG4gICAgICAgIHNlbGxlcjogJ0x1eHVyeSBBdXRvIEdyb3VwJyxcbiAgICAgICAgcmF0aW5nOiA0LjcsXG4gICAgICAgIHZpZXdzOiAxNTYsXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzI2JyxcbiAgICAgICAgbmFtZTogJ0dlbmVzaXMgRzcwIFNwb3J0IDIwMjMnLFxuICAgICAgICB5ZWFyOiAyMDIzLFxuICAgICAgICBwcmljZTogNDg5MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUyMTU2OTUtMzAwNDk4MGFkNTRlP3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ0dlbmVzaXMnLFxuICAgICAgICBtb2RlbDogJ0c3MCBTcG9ydCcsXG4gICAgICAgIGJvZHlUeXBlOiAnU2VkYW4nLFxuICAgICAgICBmdWVsVHlwZTogJ1BldHJvbCcsXG4gICAgICAgIHRyYW5zbWlzc2lvbjogJ0F1dG9tYXRpYycsXG4gICAgICAgIG1pbGVhZ2U6IDU2MDAsXG4gICAgICAgIGVuZ2luZTogJzMuM0wgVjYnLFxuICAgICAgICBob3JzZXBvd2VyOiAzNjUsXG4gICAgICAgIGNvbG9yOiAnR3JheScsXG4gICAgICAgIGNvbmRpdGlvbjogJ05ldyBWZWhpY2xlJyxcbiAgICAgICAgbG9jYXRpb246ICdSYWxlaWdoLCBOQycsXG4gICAgICAgIHNlbGxlcjogJ0dlbmVzaXMgRGVhbGVyc2hpcCcsXG4gICAgICAgIHJhdGluZzogNC41LFxuICAgICAgICB2aWV3czogODksXG4gICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJzI3JyxcbiAgICAgICAgbmFtZTogJ0FsZmEgUm9tZW8gR2l1bGlhIFF1YWRyaWZvZ2xpbyAyMDIyJyxcbiAgICAgICAgeWVhcjogMjAyMixcbiAgICAgICAgcHJpY2U6IDgyNTAwLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU1MjE1Njk1LTMwMDQ5ODBhZDU0ZT93PTQwMCZoPTMwMCZmaXQ9Y3JvcCcsXG4gICAgICAgIG1ha2U6ICdBbGZhIFJvbWVvJyxcbiAgICAgICAgbW9kZWw6ICdHaXVsaWEgUXVhZHJpZm9nbGlvJyxcbiAgICAgICAgYm9keVR5cGU6ICdTZWRhbicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnUGV0cm9sJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMTI4MDAsXG4gICAgICAgIGVuZ2luZTogJzIuOUwgVjYnLFxuICAgICAgICBob3JzZXBvd2VyOiA1MDUsXG4gICAgICAgIGNvbG9yOiAnUmVkJyxcbiAgICAgICAgY29uZGl0aW9uOiAnRXhjZWxsZW50JyxcbiAgICAgICAgbG9jYXRpb246ICdUYW1wYSwgRkwnLFxuICAgICAgICBzZWxsZXI6ICdJdGFsaWFuIE1vdG9ycycsXG4gICAgICAgIHJhdGluZzogNC45LFxuICAgICAgICB2aWV3czogMTY3LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcyOCcsXG4gICAgICAgIG5hbWU6ICdJbmZpbml0aSBRNTAgUmVkIFNwb3J0IDIwMjMnLFxuICAgICAgICB5ZWFyOiAyMDIzLFxuICAgICAgICBwcmljZTogNTg5MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUyMTU2OTUtMzAwNDk4MGFkNTRlP3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ0luZmluaXRpJyxcbiAgICAgICAgbW9kZWw6ICdRNTAgUmVkIFNwb3J0JyxcbiAgICAgICAgYm9keVR5cGU6ICdTZWRhbicsXG4gICAgICAgIGZ1ZWxUeXBlOiAnUGV0cm9sJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMzIwMCxcbiAgICAgICAgZW5naW5lOiAnMy4wTCBWNicsXG4gICAgICAgIGhvcnNlcG93ZXI6IDQwMCxcbiAgICAgICAgY29sb3I6ICdCbHVlJyxcbiAgICAgICAgY29uZGl0aW9uOiAnTmV3IFZlaGljbGUnLFxuICAgICAgICBsb2NhdGlvbjogJ1NhY3JhbWVudG8sIENBJyxcbiAgICAgICAgc2VsbGVyOiAnSW5maW5pdGkgQ2VudGVyJyxcbiAgICAgICAgcmF0aW5nOiA0LjQsXG4gICAgICAgIHZpZXdzOiA3NixcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMjknLFxuICAgICAgICBuYW1lOiAnS2lhIFN0aW5nZXIgR1QyIDIwMjMnLFxuICAgICAgICB5ZWFyOiAyMDIzLFxuICAgICAgICBwcmljZTogNTI5MDAsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUyMTU2OTUtMzAwNDk4MGFkNTRlP3c9NDAwJmg9MzAwJmZpdD1jcm9wJyxcbiAgICAgICAgbWFrZTogJ0tpYScsXG4gICAgICAgIG1vZGVsOiAnU3RpbmdlciBHVDInLFxuICAgICAgICBib2R5VHlwZTogJ1NlZGFuJyxcbiAgICAgICAgZnVlbFR5cGU6ICdQZXRyb2wnLFxuICAgICAgICB0cmFuc21pc3Npb246ICdBdXRvbWF0aWMnLFxuICAgICAgICBtaWxlYWdlOiA0ODAwLFxuICAgICAgICBlbmdpbmU6ICczLjNMIFY2JyxcbiAgICAgICAgaG9yc2Vwb3dlcjogMzY4LFxuICAgICAgICBjb2xvcjogJ1NpbHZlcicsXG4gICAgICAgIGNvbmRpdGlvbjogJ05ldyBWZWhpY2xlJyxcbiAgICAgICAgbG9jYXRpb246ICdLYW5zYXMgQ2l0eSwgTU8nLFxuICAgICAgICBzZWxsZXI6ICdLaWEgUGVyZm9ybWFuY2UnLFxuICAgICAgICByYXRpbmc6IDQuNixcbiAgICAgICAgdmlld3M6IDExMixcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMzAnLFxuICAgICAgICBuYW1lOiAnSHl1bmRhaSBJb25pcSA1IExpbWl0ZWQgMjAyMycsXG4gICAgICAgIHllYXI6IDIwMjMsXG4gICAgICAgIHByaWNlOiA1NDUwMCxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxNzc4ODEzODAxNy04MGFkNDA2NTEzOTk/dz00MDAmaD0zMDAmZml0PWNyb3AnLFxuICAgICAgICBtYWtlOiAnSHl1bmRhaScsXG4gICAgICAgIG1vZGVsOiAnSW9uaXEgNSBMaW1pdGVkJyxcbiAgICAgICAgYm9keVR5cGU6ICdTVVYnLFxuICAgICAgICBmdWVsVHlwZTogJ0VsZWN0cmljJyxcbiAgICAgICAgdHJhbnNtaXNzaW9uOiAnQXV0b21hdGljJyxcbiAgICAgICAgbWlsZWFnZTogMTIwMCxcbiAgICAgICAgZW5naW5lOiAnRWxlY3RyaWMnLFxuICAgICAgICBob3JzZXBvd2VyOiAzMjAsXG4gICAgICAgIGNvbG9yOiAnV2hpdGUnLFxuICAgICAgICBjb25kaXRpb246ICdOZXcgVmVoaWNsZScsXG4gICAgICAgIGxvY2F0aW9uOiAnT3JsYW5kbywgRkwnLFxuICAgICAgICBzZWxsZXI6ICdIeXVuZGFpIEVWIENlbnRlcicsXG4gICAgICAgIHJhdGluZzogNC44LFxuICAgICAgICB2aWV3czogMTk0LFxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgICAgfVxuICAgIF07XG4gICAgXG4gICAgdGhpcy5zYXZlQ2Fycyhpbml0aWFsQ2Fycyk7XG4gICAgcmV0dXJuIGluaXRpYWxDYXJzO1xuICB9XG59XG5cbi8vIEN1cnJlbnQgZGF0YWJhc2UgYWRhcHRlciAtIENoYW5nZSB0aGlzIHRvIHVzZSBkaWZmZXJlbnQgc3RvcmFnZVxuY29uc3QgZGJBZGFwdGVyOiBEYXRhYmFzZUFkYXB0ZXIgPSBuZXcgTG9jYWxTdG9yYWdlQWRhcHRlcigpO1xuXG4vLyBQdWJsaWMgQVBJIGZvciB0aGUgYXBwbGljYXRpb25cbmV4cG9ydCBjb25zdCBkYiA9IHtcbiAgLy8gR2V0IGFsbCBjYXJzXG4gIGdldEFsbENhcnMoKTogQ2FyW10ge1xuICAgIHJldHVybiBkYkFkYXB0ZXIuZ2V0Q2FycygpO1xuICB9LFxuXG4gIC8vIEdldCBjYXIgYnkgSURcbiAgZ2V0Q2FyQnlJZChpZDogc3RyaW5nKTogQ2FyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gZGJBZGFwdGVyLmdldENhcnMoKS5maW5kKGNhciA9PiBjYXIuaWQgPT09IGlkKTtcbiAgfSxcblxuICAvLyBTZWFyY2ggY2Fyc1xuICBzZWFyY2hDYXJzKHF1ZXJ5OiBzdHJpbmcpOiBDYXJbXSB7XG4gICAgY29uc3QgY2FycyA9IGRiQWRhcHRlci5nZXRDYXJzKCk7XG4gICAgY29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGNhcnMuZmlsdGVyKGNhciA9PlxuICAgICAgY2FyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fFxuICAgICAgY2FyLm1ha2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fFxuICAgICAgY2FyLm1vZGVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSlcbiAgICApO1xuICB9LFxuXG4gIC8vIEZpbHRlciBjYXJzXG4gIGZpbHRlckNhcnMoZmlsdGVyczogRmlsdGVyT3B0aW9ucyk6IENhcltdIHtcbiAgICBsZXQgY2FycyA9IGRiQWRhcHRlci5nZXRDYXJzKCk7XG5cbiAgICBpZiAoZmlsdGVycy5tYWtlICYmIGZpbHRlcnMubWFrZS5sZW5ndGggPiAwKSB7XG4gICAgICBjYXJzID0gY2Fycy5maWx0ZXIoY2FyID0+IGZpbHRlcnMubWFrZSEuaW5jbHVkZXMoY2FyLm1ha2UpKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVycy5ib2R5VHlwZSAmJiBmaWx0ZXJzLmJvZHlUeXBlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNhcnMgPSBjYXJzLmZpbHRlcihjYXIgPT4gZmlsdGVycy5ib2R5VHlwZSEuaW5jbHVkZXMoY2FyLmJvZHlUeXBlKSk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcnMuZnVlbFR5cGUgJiYgZmlsdGVycy5mdWVsVHlwZS5sZW5ndGggPiAwKSB7XG4gICAgICBjYXJzID0gY2Fycy5maWx0ZXIoY2FyID0+IGZpbHRlcnMuZnVlbFR5cGUhLmluY2x1ZGVzKGNhci5mdWVsVHlwZSkpO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJzLmNvbmRpdGlvbiAmJiBmaWx0ZXJzLmNvbmRpdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICBjYXJzID0gY2Fycy5maWx0ZXIoY2FyID0+IGZpbHRlcnMuY29uZGl0aW9uIS5pbmNsdWRlcyhjYXIuY29uZGl0aW9uKSk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcnMuY29sb3IgJiYgZmlsdGVycy5jb2xvci5sZW5ndGggPiAwKSB7XG4gICAgICBjYXJzID0gY2Fycy5maWx0ZXIoY2FyID0+IGZpbHRlcnMuY29sb3IhLmluY2x1ZGVzKGNhci5jb2xvcikpO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJzLnRyYW5zbWlzc2lvbiAmJiBmaWx0ZXJzLnRyYW5zbWlzc2lvbi5sZW5ndGggPiAwKSB7XG4gICAgICBjYXJzID0gY2Fycy5maWx0ZXIoY2FyID0+IGZpbHRlcnMudHJhbnNtaXNzaW9uIS5pbmNsdWRlcyhjYXIudHJhbnNtaXNzaW9uKSk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcnMucHJpY2VSYW5nZSkge1xuICAgICAgY2FycyA9IGNhcnMuZmlsdGVyKGNhciA9PlxuICAgICAgICBjYXIucHJpY2UgPj0gZmlsdGVycy5wcmljZVJhbmdlIS5taW4gJiZcbiAgICAgICAgY2FyLnByaWNlIDw9IGZpbHRlcnMucHJpY2VSYW5nZSEubWF4XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJzLnllYXJSYW5nZSkge1xuICAgICAgY2FycyA9IGNhcnMuZmlsdGVyKGNhciA9PlxuICAgICAgICBjYXIueWVhciA+PSBmaWx0ZXJzLnllYXJSYW5nZSEubWluICYmXG4gICAgICAgIGNhci55ZWFyIDw9IGZpbHRlcnMueWVhclJhbmdlIS5tYXhcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcnMubWlsZWFnZVJhbmdlKSB7XG4gICAgICBjYXJzID0gY2Fycy5maWx0ZXIoY2FyID0+XG4gICAgICAgIGNhci5taWxlYWdlID49IGZpbHRlcnMubWlsZWFnZVJhbmdlIS5taW4gJiZcbiAgICAgICAgY2FyLm1pbGVhZ2UgPD0gZmlsdGVycy5taWxlYWdlUmFuZ2UhLm1heFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVycy5ob3JzZXBvd2VyUmFuZ2UpIHtcbiAgICAgIGNhcnMgPSBjYXJzLmZpbHRlcihjYXIgPT5cbiAgICAgICAgY2FyLmhvcnNlcG93ZXIgPj0gZmlsdGVycy5ob3JzZXBvd2VyUmFuZ2UhLm1pbiAmJlxuICAgICAgICBjYXIuaG9yc2Vwb3dlciA8PSBmaWx0ZXJzLmhvcnNlcG93ZXJSYW5nZSEubWF4XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBjYXJzO1xuICB9LFxuXG4gIC8vIEFkZCBuZXcgY2FyXG4gIGFkZENhcihjYXI6IE9taXQ8Q2FyLCAnaWQnPik6IENhciB7XG4gICAgY29uc3QgY2FycyA9IGRiQWRhcHRlci5nZXRDYXJzKCk7XG4gICAgY29uc3QgbmV3Q2FyOiBDYXIgPSB7XG4gICAgICAuLi5jYXIsXG4gICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpXG4gICAgfTtcbiAgICBjYXJzLnB1c2gobmV3Q2FyKTtcbiAgICBkYkFkYXB0ZXIuc2F2ZUNhcnMoY2Fycyk7XG4gICAgcmV0dXJuIG5ld0NhcjtcbiAgfSxcblxuICAvLyBVcGRhdGUgY2FyXG4gIHVwZGF0ZUNhcihpZDogc3RyaW5nLCB1cGRhdGVzOiBQYXJ0aWFsPENhcj4pOiBDYXIgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNhcnMgPSBkYkFkYXB0ZXIuZ2V0Q2FycygpO1xuICAgIGNvbnN0IGluZGV4ID0gY2Fycy5maW5kSW5kZXgoY2FyID0+IGNhci5pZCA9PT0gaWQpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBjYXJzW2luZGV4XSA9IHsgLi4uY2Fyc1tpbmRleF0sIC4uLnVwZGF0ZXMgfTtcbiAgICBkYkFkYXB0ZXIuc2F2ZUNhcnMoY2Fycyk7XG4gICAgcmV0dXJuIGNhcnNbaW5kZXhdO1xuICB9LFxuXG4gIC8vIERlbGV0ZSBjYXJcbiAgZGVsZXRlQ2FyKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjYXJzID0gZGJBZGFwdGVyLmdldENhcnMoKTtcbiAgICBjb25zdCBmaWx0ZXJlZENhcnMgPSBjYXJzLmZpbHRlcihjYXIgPT4gY2FyLmlkICE9PSBpZCk7XG4gICAgaWYgKGZpbHRlcmVkQ2Fycy5sZW5ndGggPT09IGNhcnMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgZGJBZGFwdGVyLnNhdmVDYXJzKGZpbHRlcmVkQ2Fycyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLy8gVG9nZ2xlIGZhdm9yaXRlXG4gIHRvZ2dsZUZhdm9yaXRlKGlkOiBzdHJpbmcpOiBDYXIgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNhcnMgPSBkYkFkYXB0ZXIuZ2V0Q2FycygpO1xuICAgIGNvbnN0IGNhciA9IGNhcnMuZmluZChjID0+IGMuaWQgPT09IGlkKTtcbiAgICBpZiAoIWNhcikgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNhci5pc0Zhdm9yaXRlID0gIWNhci5pc0Zhdm9yaXRlO1xuICAgIGRiQWRhcHRlci5zYXZlQ2FycyhjYXJzKTtcbiAgICByZXR1cm4gY2FyO1xuICB9LFxuXG4gIC8vIENsZWFyIGFsbCBkYXRhXG4gIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgIGRiQWRhcHRlci5jbGVhcigpO1xuICB9LFxuXG4gIC8vIEZpbHRlciBQcmVzZXQgTWFuYWdlbWVudFxuICBzYXZlRmlsdGVyUHJlc2V0KG5hbWU6IHN0cmluZywgZmlsdGVyczogRmlsdGVyT3B0aW9ucyk6IEZpbHRlclByZXNldCB7XG4gICAgY29uc3QgcHJlc2V0cyA9IHRoaXMuZ2V0RmlsdGVyUHJlc2V0cygpO1xuICAgIGNvbnN0IG5ld1ByZXNldDogRmlsdGVyUHJlc2V0ID0ge1xuICAgICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgIG5hbWUsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpXG4gICAgfTtcbiAgICBwcmVzZXRzLnB1c2gobmV3UHJlc2V0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjYXJzX2ZpbHRlcl9wcmVzZXRzJywgSlNPTi5zdHJpbmdpZnkocHJlc2V0cykpO1xuICAgIHJldHVybiBuZXdQcmVzZXQ7XG4gIH0sXG5cbiAgZ2V0RmlsdGVyUHJlc2V0cygpOiBGaWx0ZXJQcmVzZXRbXSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX2ZpbHRlcl9wcmVzZXRzJyk7XG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBmaWx0ZXIgcHJlc2V0czonLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9LFxuXG4gIGRlbGV0ZUZpbHRlclByZXNldChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcHJlc2V0cyA9IHRoaXMuZ2V0RmlsdGVyUHJlc2V0cygpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0gcHJlc2V0cy5maWx0ZXIocCA9PiBwLmlkICE9PSBpZCk7XG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gcHJlc2V0cy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjYXJzX2ZpbHRlcl9wcmVzZXRzJywgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBsb2FkRmlsdGVyUHJlc2V0KGlkOiBzdHJpbmcpOiBGaWx0ZXJPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBwcmVzZXRzID0gdGhpcy5nZXRGaWx0ZXJQcmVzZXRzKCk7XG4gICAgY29uc3QgcHJlc2V0ID0gcHJlc2V0cy5maW5kKHAgPT4gcC5pZCA9PT0gaWQpO1xuICAgIHJldHVybiBwcmVzZXQ/LmZpbHRlcnM7XG4gIH0sXG5cbiAgLy8gSW5jcmVtZW50IHZpZXcgY291bnQgd2hlbiB1c2VyIHZpc2l0cyBjYXIgZGV0YWlscyBwYWdlXG4gIGluY3JlbWVudFZpZXdzKGlkOiBzdHJpbmcpOiBDYXIgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNhcnMgPSBkYkFkYXB0ZXIuZ2V0Q2FycygpO1xuICAgIGNvbnN0IGNhciA9IGNhcnMuZmluZChjID0+IGMuaWQgPT09IGlkKTtcbiAgICBpZiAoIWNhcikgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNhci52aWV3cyA9IChjYXIudmlld3MgfHwgMCkgKyAxO1xuICAgIGRiQWRhcHRlci5zYXZlQ2FycyhjYXJzKTtcbiAgICByZXR1cm4gY2FyO1xuICB9LFxuXG4gIC8vID09PT09IENIQVQgTUVTU0FHRVMgPT09PT1cbiAgXG4gIGdldENoYXRNZXNzYWdlcyhjYXJJZDogc3RyaW5nKTogQ2hhdE1lc3NhZ2VbXSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX2NoYXRfbWVzc2FnZXMnKTtcbiAgICAgIGlmICghZGF0YSkgcmV0dXJuIFtdO1xuICAgICAgY29uc3QgYWxsTWVzc2FnZXM6IENoYXRNZXNzYWdlW10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgcmV0dXJuIGFsbE1lc3NhZ2VzLmZpbHRlcihtc2cgPT4gbXNnLmNhcklkID09PSBjYXJJZCkuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlYWRpbmcgY2hhdCBtZXNzYWdlczonLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9LFxuXG4gIGFkZENoYXRNZXNzYWdlKG1lc3NhZ2U6IE9taXQ8Q2hhdE1lc3NhZ2UsICdpZCcgfCAndGltZXN0YW1wJz4pOiBDaGF0TWVzc2FnZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX2NoYXRfbWVzc2FnZXMnKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzOiBDaGF0TWVzc2FnZVtdID0gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICAgIGNvbnN0IG5ld01lc3NhZ2U6IENoYXRNZXNzYWdlID0ge1xuICAgICAgICAuLi5tZXNzYWdlLFxuICAgICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpLFxuICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgIGlzRWRpdGVkOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIG1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjYXJzX2NoYXRfbWVzc2FnZXMnLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlcykpO1xuICAgICAgcmV0dXJuIG5ld01lc3NhZ2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBjaGF0IG1lc3NhZ2U6JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNoYXRNZXNzYWdlKGlkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IENoYXRNZXNzYWdlIHwgdW5kZWZpbmVkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNhcnNfY2hhdF9tZXNzYWdlcycpO1xuICAgICAgaWYgKCFkYXRhKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgbWVzc2FnZXM6IENoYXRNZXNzYWdlW10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzLmZpbmQobSA9PiBtLmlkID09PSBpZCk7XG4gICAgICBpZiAoIW1lc3NhZ2UpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBcbiAgICAgIG1lc3NhZ2UubWVzc2FnZSA9IGNvbnRlbnQ7XG4gICAgICBtZXNzYWdlLmlzRWRpdGVkID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNhcnNfY2hhdF9tZXNzYWdlcycsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VzKSk7XG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2hhdCBtZXNzYWdlOicsIGVycm9yKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuXG4gIGRlbGV0ZUNoYXRNZXNzYWdlKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNhcnNfY2hhdF9tZXNzYWdlcycpO1xuICAgICAgaWYgKCFkYXRhKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBtZXNzYWdlczogQ2hhdE1lc3NhZ2VbXSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IG1lc3NhZ2VzLmZpbHRlcihtID0+IG0uaWQgIT09IGlkKTtcbiAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IG1lc3NhZ2VzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlY2Fyc19jaGF0X21lc3NhZ2VzJywgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjaGF0IG1lc3NhZ2U6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICAvLyA9PT09PSBDT01NRU5UUyA9PT09PVxuICBcbiAgZ2V0Q29tbWVudHMoY2FySWQ6IHN0cmluZyk6IENvbW1lbnRbXSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX2NvbW1lbnRzJyk7XG4gICAgICBpZiAoIWRhdGEpIHJldHVybiBbXTtcbiAgICAgIGNvbnN0IGFsbENvbW1lbnRzOiBDb21tZW50W10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgcmV0dXJuIGFsbENvbW1lbnRzLmZpbHRlcihjID0+IGMuY2FySWQgPT09IGNhcklkKS5zb3J0KChhLCBiKSA9PiBiLnRpbWVzdGFtcCAtIGEudGltZXN0YW1wKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBjb21tZW50czonLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9LFxuXG4gIGFkZENvbW1lbnQoY29tbWVudDogT21pdDxDb21tZW50LCAnaWQnIHwgJ3RpbWVzdGFtcCcgfCAncmVwbGllcyc+KTogQ29tbWVudCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX2NvbW1lbnRzJyk7XG4gICAgICBjb25zdCBjb21tZW50czogQ29tbWVudFtdID0gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICAgIGNvbnN0IG5ld0NvbW1lbnQ6IENvbW1lbnQgPSB7XG4gICAgICAgIC4uLmNvbW1lbnQsXG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSksXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgaXNFZGl0ZWQ6IGZhbHNlLFxuICAgICAgICByZXBsaWVzOiBbXVxuICAgICAgfTtcbiAgICAgIGNvbW1lbnRzLnB1c2gobmV3Q29tbWVudCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjYXJzX2NvbW1lbnRzJywgSlNPTi5zdHJpbmdpZnkoY29tbWVudHMpKTtcbiAgICAgIHJldHVybiBuZXdDb21tZW50O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgY29tbWVudDonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQ29tbWVudChpZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBDb21tZW50IHwgdW5kZWZpbmVkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNhcnNfY29tbWVudHMnKTtcbiAgICAgIGlmICghZGF0YSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNvbW1lbnRzOiBDb21tZW50W10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRzLmZpbmQoYyA9PiBjLmlkID09PSBpZCk7XG4gICAgICBpZiAoIWNvbW1lbnQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBcbiAgICAgIGNvbW1lbnQuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBjb21tZW50LmlzRWRpdGVkID0gdHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNhcnNfY29tbWVudHMnLCBKU09OLnN0cmluZ2lmeShjb21tZW50cykpO1xuICAgICAgcmV0dXJuIGNvbW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNvbW1lbnQ6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG5cbiAgZGVsZXRlQ29tbWVudChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX2NvbW1lbnRzJyk7XG4gICAgICBpZiAoIWRhdGEpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGNvbW1lbnRzOiBDb21tZW50W10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSBjb21tZW50cy5maWx0ZXIoYyA9PiBjLmlkICE9PSBpZCk7XG4gICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSBjb21tZW50cy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNhcnNfY29tbWVudHMnLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNvbW1lbnQ6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBhZGRDb21tZW50UmVwbHkoY29tbWVudElkOiBzdHJpbmcsIHJlcGx5OiBPbWl0PENvbW1lbnRSZXBseSwgJ2lkJyB8ICd0aW1lc3RhbXAnPik6IENvbW1lbnRSZXBseSB8IHVuZGVmaW5lZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX2NvbW1lbnRzJyk7XG4gICAgICBpZiAoIWRhdGEpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBjb21tZW50czogQ29tbWVudFtdID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cy5maW5kKGMgPT4gYy5pZCA9PT0gY29tbWVudElkKTtcbiAgICAgIGlmICghY29tbWVudCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIFxuICAgICAgY29uc3QgbmV3UmVwbHk6IENvbW1lbnRSZXBseSA9IHtcbiAgICAgICAgLi4ucmVwbHksXG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSksXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgaXNFZGl0ZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgY29tbWVudC5yZXBsaWVzLnB1c2gobmV3UmVwbHkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlY2Fyc19jb21tZW50cycsIEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKSk7XG4gICAgICByZXR1cm4gbmV3UmVwbHk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBjb21tZW50IHJlcGx5OicsIGVycm9yKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbW1lbnRSZXBseShjb21tZW50SWQ6IHN0cmluZywgcmVwbHlJZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBDb21tZW50UmVwbHkgfCB1bmRlZmluZWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY2Fyc19jb21tZW50cycpO1xuICAgICAgaWYgKCFkYXRhKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgY29tbWVudHM6IENvbW1lbnRbXSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICBjb25zdCBjb21tZW50ID0gY29tbWVudHMuZmluZChjID0+IGMuaWQgPT09IGNvbW1lbnRJZCk7XG4gICAgICBpZiAoIWNvbW1lbnQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlcGx5ID0gY29tbWVudC5yZXBsaWVzLmZpbmQociA9PiByLmlkID09PSByZXBseUlkKTtcbiAgICAgIGlmICghcmVwbHkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBcbiAgICAgIHJlcGx5LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgcmVwbHkuaXNFZGl0ZWQgPSB0cnVlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlY2Fyc19jb21tZW50cycsIEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKSk7XG4gICAgICByZXR1cm4gcmVwbHk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGNvbW1lbnQgcmVwbHk6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG5cbiAgZGVsZXRlQ29tbWVudFJlcGx5KGNvbW1lbnRJZDogc3RyaW5nLCByZXBseUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNhcnNfY29tbWVudHMnKTtcbiAgICAgIGlmICghZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgY29tbWVudHM6IENvbW1lbnRbXSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICBjb25zdCBjb21tZW50ID0gY29tbWVudHMuZmluZChjID0+IGMuaWQgPT09IGNvbW1lbnRJZCk7XG4gICAgICBpZiAoIWNvbW1lbnQpIHJldHVybiBmYWxzZTtcbiAgICAgIFxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBjb21tZW50LnJlcGxpZXMuZmlsdGVyKHIgPT4gci5pZCAhPT0gcmVwbHlJZCk7XG4gICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSBjb21tZW50LnJlcGxpZXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb21tZW50LnJlcGxpZXMgPSBmaWx0ZXJlZDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNhcnNfY29tbWVudHMnLCBKU09OLnN0cmluZ2lmeShjb21tZW50cykpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNvbW1lbnQgcmVwbHk6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICAvLyA9PT09PSBOT1RJRklDQVRJT05TID09PT09XG4gIFxuICBnZXROb3RpZmljYXRpb25zKHVzZXJJZDogc3RyaW5nID0gJ3VzZXJfMTIzJyk6IE5vdGlmaWNhdGlvbltdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNhcnNfbm90aWZpY2F0aW9ucycpO1xuICAgICAgaWYgKCFkYXRhKSByZXR1cm4gW107XG4gICAgICBjb25zdCBhbGxOb3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAvLyBSZXR1cm4gbm90aWZpY2F0aW9ucyB3aGVyZSB0aGUgY3VycmVudCB1c2VyIGlzIE5PVCB0aGUgc2VuZGVyXG4gICAgICByZXR1cm4gYWxsTm90aWZpY2F0aW9uc1xuICAgICAgICAuZmlsdGVyKG4gPT4gbi5mcm9tVXNlcklkICE9PSB1c2VySWQpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnRpbWVzdGFtcCAtIGEudGltZXN0YW1wKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBub3RpZmljYXRpb25zOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogT21pdDxOb3RpZmljYXRpb24sICdpZCcgfCAndGltZXN0YW1wJyB8ICdpc1JlYWQnPik6IE5vdGlmaWNhdGlvbiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX25vdGlmaWNhdGlvbnMnKTtcbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdID0gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcbiAgICAgIGNvbnN0IG5ld05vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uID0ge1xuICAgICAgICAuLi5ub3RpZmljYXRpb24sXG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSksXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgaXNSZWFkOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIG5vdGlmaWNhdGlvbnMucHVzaChuZXdOb3RpZmljYXRpb24pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlY2Fyc19ub3RpZmljYXRpb25zJywgSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9ucykpO1xuICAgICAgcmV0dXJuIG5ld05vdGlmaWNhdGlvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIG5vdGlmaWNhdGlvbjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH0sXG5cbiAgbWFya05vdGlmaWNhdGlvbkFzUmVhZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX25vdGlmaWNhdGlvbnMnKTtcbiAgICAgIGlmICghZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbm90aWZpY2F0aW9ucy5maW5kKG4gPT4gbi5pZCA9PT0gaWQpO1xuICAgICAgaWYgKCFub3RpZmljYXRpb24pIHJldHVybiBmYWxzZTtcbiAgICAgIFxuICAgICAgbm90aWZpY2F0aW9uLmlzUmVhZCA9IHRydWU7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjYXJzX25vdGlmaWNhdGlvbnMnLCBKU09OLnN0cmluZ2lmeShub3RpZmljYXRpb25zKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBub3RpZmljYXRpb24gYXMgcmVhZDonLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIG1hcmtBbGxOb3RpZmljYXRpb25zQXNSZWFkKHVzZXJJZDogc3RyaW5nID0gJ3VzZXJfMTIzJyk6IGJvb2xlYW4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY2Fyc19ub3RpZmljYXRpb25zJyk7XG4gICAgICBpZiAoIWRhdGEpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIFxuICAgICAgbm90aWZpY2F0aW9ucy5mb3JFYWNoKG4gPT4ge1xuICAgICAgICBpZiAobi5mcm9tVXNlcklkICE9PSB1c2VySWQpIHtcbiAgICAgICAgICBuLmlzUmVhZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjYXJzX25vdGlmaWNhdGlvbnMnLCBKU09OLnN0cmluZ2lmeShub3RpZmljYXRpb25zKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFya2luZyBhbGwgbm90aWZpY2F0aW9ucyBhcyByZWFkOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgZGVsZXRlTm90aWZpY2F0aW9uKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWNhcnNfbm90aWZpY2F0aW9ucycpO1xuICAgICAgaWYgKCFkYXRhKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IG5vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gbi5pZCAhPT0gaWQpO1xuICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gbm90aWZpY2F0aW9ucy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNhcnNfbm90aWZpY2F0aW9ucycsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgbm90aWZpY2F0aW9uOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VW5yZWFkTm90aWZpY2F0aW9uQ291bnQodXNlcklkOiBzdHJpbmcgPSAndXNlcl8xMjMnKTogbnVtYmVyIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHRoaXMuZ2V0Tm90aWZpY2F0aW9ucyh1c2VySWQpO1xuICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gIW4uaXNSZWFkKS5sZW5ndGg7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgdW5yZWFkIGNvdW50OicsIGVycm9yKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSxcblxuICBjbGVhckFsbE5vdGlmaWNhdGlvbnModXNlcklkOiBzdHJpbmcgPSAndXNlcl8xMjMnKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjYXJzX25vdGlmaWNhdGlvbnMnKTtcbiAgICAgIGlmICghZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgLy8gS2VlcCBub3RpZmljYXRpb25zIGZyb20gY3VycmVudCB1c2VyICh0aGVpciBvd24gYWN0aW9ucylcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gbm90aWZpY2F0aW9ucy5maWx0ZXIobiA9PiBuLmZyb21Vc2VySWQgPT09IHVzZXJJZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVjYXJzX25vdGlmaWNhdGlvbnMnLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNsZWFyaW5nIG5vdGlmaWNhdGlvbnM6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGF0TWVzc2FnZSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNhcklkOiBzdHJpbmc7XG4gIHNlbmRlcklkOiBzdHJpbmc7XG4gIHNlbmRlck5hbWU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgaXNGcm9tU2VsbGVyOiBib29sZWFuO1xuICBpc0VkaXRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWVudCB7XG4gIGlkOiBzdHJpbmc7XG4gIGNhcklkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBpc0VkaXRlZD86IGJvb2xlYW47XG4gIHJlcGxpZXM6IENvbW1lbnRSZXBseVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnRSZXBseSB7XG4gIGlkOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBpc0VkaXRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvblR5cGUgPSAnY29tbWVudCcgfCAncmVwbHknIHwgJ21lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IE5vdGlmaWNhdGlvblR5cGU7XG4gIGNhcklkOiBzdHJpbmc7XG4gIGNhck5hbWU6IHN0cmluZztcbiAgY2FySW1hZ2U6IHN0cmluZztcbiAgZnJvbVVzZXJJZDogc3RyaW5nO1xuICBmcm9tVXNlck5hbWU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgaXNSZWFkOiBib29sZWFuO1xuICB0YXJnZXRJZDogc3RyaW5nOyAvLyBJRCBvZiBjb21tZW50L3JlcGx5L21lc3NhZ2UgdG8gc2Nyb2xsIHRvXG4gIHBhcmVudElkPzogc3RyaW5nOyAvLyBGb3IgcmVwbGllcywgdGhlIHBhcmVudCBjb21tZW50IElEXG59Il0sIm1hcHBpbmdzIjoiQUF3REEsTUFBTSxvQkFBK0M7QUFBQSxFQUNsQyxjQUFjO0FBQUEsRUFFL0IsVUFBaUI7QUFDZixRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxLQUFLLFdBQVc7QUFDbEQsVUFBSSxDQUFDLEtBQU0sUUFBTyxLQUFLLGVBQWU7QUFDdEMsYUFBTyxLQUFLLE1BQU0sSUFBSTtBQUFBLElBQ3hCLFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSxvQ0FBb0MsS0FBSztBQUN2RCxhQUFPLEtBQUssZUFBZTtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUyxNQUFtQjtBQUMxQixRQUFJO0FBQ0YsbUJBQWEsUUFBUSxLQUFLLGFBQWEsS0FBSyxVQUFVLElBQUksQ0FBQztBQUFBLElBQzdELFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSxpQ0FBaUMsS0FBSztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBYztBQUNaLGlCQUFhLFdBQVcsS0FBSyxXQUFXO0FBQUEsRUFDMUM7QUFBQSxFQUVRLGlCQUF3QjtBQUU5QixVQUFNLGNBQXFCO0FBQUEsTUFDekI7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxRQUNFLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLFFBQ0UsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFFBQ1AsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixjQUFjO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFFQSxTQUFLLFNBQVMsV0FBVztBQUN6QixXQUFPO0FBQUEsRUFDVDtBQUNGO0FBR0EsTUFBTSxZQUE2QixJQUFJLG9CQUFvQjtBQUdwRCxhQUFNLEtBQUs7QUFBQTtBQUFBLEVBRWhCLGFBQW9CO0FBQ2xCLFdBQU8sVUFBVSxRQUFRO0FBQUEsRUFDM0I7QUFBQTtBQUFBLEVBR0EsV0FBVyxJQUE2QjtBQUN0QyxXQUFPLFVBQVUsUUFBUSxFQUFFLEtBQUssU0FBTyxJQUFJLE9BQU8sRUFBRTtBQUFBLEVBQ3REO0FBQUE7QUFBQSxFQUdBLFdBQVcsT0FBc0I7QUFDL0IsVUFBTSxPQUFPLFVBQVUsUUFBUTtBQUMvQixVQUFNLGFBQWEsTUFBTSxZQUFZO0FBQ3JDLFdBQU8sS0FBSztBQUFBLE1BQU8sU0FDakIsSUFBSSxLQUFLLFlBQVksRUFBRSxTQUFTLFVBQVUsS0FDMUMsSUFBSSxLQUFLLFlBQVksRUFBRSxTQUFTLFVBQVUsS0FDMUMsSUFBSSxNQUFNLFlBQVksRUFBRSxTQUFTLFVBQVU7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0EsV0FBVyxTQUErQjtBQUN4QyxRQUFJLE9BQU8sVUFBVSxRQUFRO0FBRTdCLFFBQUksUUFBUSxRQUFRLFFBQVEsS0FBSyxTQUFTLEdBQUc7QUFDM0MsYUFBTyxLQUFLLE9BQU8sU0FBTyxRQUFRLEtBQU0sU0FBUyxJQUFJLElBQUksQ0FBQztBQUFBLElBQzVEO0FBRUEsUUFBSSxRQUFRLFlBQVksUUFBUSxTQUFTLFNBQVMsR0FBRztBQUNuRCxhQUFPLEtBQUssT0FBTyxTQUFPLFFBQVEsU0FBVSxTQUFTLElBQUksUUFBUSxDQUFDO0FBQUEsSUFDcEU7QUFFQSxRQUFJLFFBQVEsWUFBWSxRQUFRLFNBQVMsU0FBUyxHQUFHO0FBQ25ELGFBQU8sS0FBSyxPQUFPLFNBQU8sUUFBUSxTQUFVLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFBQSxJQUNwRTtBQUVBLFFBQUksUUFBUSxhQUFhLFFBQVEsVUFBVSxTQUFTLEdBQUc7QUFDckQsYUFBTyxLQUFLLE9BQU8sU0FBTyxRQUFRLFVBQVcsU0FBUyxJQUFJLFNBQVMsQ0FBQztBQUFBLElBQ3RFO0FBRUEsUUFBSSxRQUFRLFNBQVMsUUFBUSxNQUFNLFNBQVMsR0FBRztBQUM3QyxhQUFPLEtBQUssT0FBTyxTQUFPLFFBQVEsTUFBTyxTQUFTLElBQUksS0FBSyxDQUFDO0FBQUEsSUFDOUQ7QUFFQSxRQUFJLFFBQVEsZ0JBQWdCLFFBQVEsYUFBYSxTQUFTLEdBQUc7QUFDM0QsYUFBTyxLQUFLLE9BQU8sU0FBTyxRQUFRLGFBQWMsU0FBUyxJQUFJLFlBQVksQ0FBQztBQUFBLElBQzVFO0FBRUEsUUFBSSxRQUFRLFlBQVk7QUFDdEIsYUFBTyxLQUFLO0FBQUEsUUFBTyxTQUNqQixJQUFJLFNBQVMsUUFBUSxXQUFZLE9BQ2pDLElBQUksU0FBUyxRQUFRLFdBQVk7QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFFQSxRQUFJLFFBQVEsV0FBVztBQUNyQixhQUFPLEtBQUs7QUFBQSxRQUFPLFNBQ2pCLElBQUksUUFBUSxRQUFRLFVBQVcsT0FDL0IsSUFBSSxRQUFRLFFBQVEsVUFBVztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUVBLFFBQUksUUFBUSxjQUFjO0FBQ3hCLGFBQU8sS0FBSztBQUFBLFFBQU8sU0FDakIsSUFBSSxXQUFXLFFBQVEsYUFBYyxPQUNyQyxJQUFJLFdBQVcsUUFBUSxhQUFjO0FBQUEsTUFDdkM7QUFBQSxJQUNGO0FBRUEsUUFBSSxRQUFRLGlCQUFpQjtBQUMzQixhQUFPLEtBQUs7QUFBQSxRQUFPLFNBQ2pCLElBQUksY0FBYyxRQUFRLGdCQUFpQixPQUMzQyxJQUFJLGNBQWMsUUFBUSxnQkFBaUI7QUFBQSxNQUM3QztBQUFBLElBQ0Y7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFHQSxPQUFPLEtBQTJCO0FBQ2hDLFVBQU0sT0FBTyxVQUFVLFFBQVE7QUFDL0IsVUFBTSxTQUFjO0FBQUEsTUFDbEIsR0FBRztBQUFBLE1BQ0gsSUFBSSxLQUFLLElBQUksRUFBRSxTQUFTO0FBQUEsSUFDMUI7QUFDQSxTQUFLLEtBQUssTUFBTTtBQUNoQixjQUFVLFNBQVMsSUFBSTtBQUN2QixXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFHQSxVQUFVLElBQVksU0FBd0M7QUFDNUQsVUFBTSxPQUFPLFVBQVUsUUFBUTtBQUMvQixVQUFNLFFBQVEsS0FBSyxVQUFVLFNBQU8sSUFBSSxPQUFPLEVBQUU7QUFDakQsUUFBSSxVQUFVLEdBQUksUUFBTztBQUV6QixTQUFLLEtBQUssSUFBSSxFQUFFLEdBQUcsS0FBSyxLQUFLLEdBQUcsR0FBRyxRQUFRO0FBQzNDLGNBQVUsU0FBUyxJQUFJO0FBQ3ZCLFdBQU8sS0FBSyxLQUFLO0FBQUEsRUFDbkI7QUFBQTtBQUFBLEVBR0EsVUFBVSxJQUFxQjtBQUM3QixVQUFNLE9BQU8sVUFBVSxRQUFRO0FBQy9CLFVBQU0sZUFBZSxLQUFLLE9BQU8sU0FBTyxJQUFJLE9BQU8sRUFBRTtBQUNyRCxRQUFJLGFBQWEsV0FBVyxLQUFLLE9BQVEsUUFBTztBQUVoRCxjQUFVLFNBQVMsWUFBWTtBQUMvQixXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFHQSxlQUFlLElBQTZCO0FBQzFDLFVBQU0sT0FBTyxVQUFVLFFBQVE7QUFDL0IsVUFBTSxNQUFNLEtBQUssS0FBSyxPQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLFFBQUksQ0FBQyxJQUFLLFFBQU87QUFFakIsUUFBSSxhQUFhLENBQUMsSUFBSTtBQUN0QixjQUFVLFNBQVMsSUFBSTtBQUN2QixXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFHQSxXQUFpQjtBQUNmLGNBQVUsTUFBTTtBQUFBLEVBQ2xCO0FBQUE7QUFBQSxFQUdBLGlCQUFpQixNQUFjLFNBQXNDO0FBQ25FLFVBQU0sVUFBVSxLQUFLLGlCQUFpQjtBQUN0QyxVQUFNLFlBQTBCO0FBQUEsTUFDOUIsSUFBSSxLQUFLLElBQUksRUFBRSxTQUFTO0FBQUEsTUFDeEI7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFXLEtBQUssSUFBSTtBQUFBLElBQ3RCO0FBQ0EsWUFBUSxLQUFLLFNBQVM7QUFDdEIsaUJBQWEsUUFBUSx5QkFBeUIsS0FBSyxVQUFVLE9BQU8sQ0FBQztBQUNyRSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsbUJBQW1DO0FBQ2pDLFFBQUk7QUFDRixZQUFNLE9BQU8sYUFBYSxRQUFRLHVCQUF1QjtBQUN6RCxhQUFPLE9BQU8sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQUEsSUFDcEMsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLGlDQUFpQyxLQUFLO0FBQ3BELGFBQU8sQ0FBQztBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxtQkFBbUIsSUFBcUI7QUFDdEMsVUFBTSxVQUFVLEtBQUssaUJBQWlCO0FBQ3RDLFVBQU0sV0FBVyxRQUFRLE9BQU8sT0FBSyxFQUFFLE9BQU8sRUFBRTtBQUNoRCxRQUFJLFNBQVMsV0FBVyxRQUFRLE9BQVEsUUFBTztBQUMvQyxpQkFBYSxRQUFRLHlCQUF5QixLQUFLLFVBQVUsUUFBUSxDQUFDO0FBQ3RFLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxpQkFBaUIsSUFBdUM7QUFDdEQsVUFBTSxVQUFVLEtBQUssaUJBQWlCO0FBQ3RDLFVBQU0sU0FBUyxRQUFRLEtBQUssT0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM1QyxXQUFPLFFBQVE7QUFBQSxFQUNqQjtBQUFBO0FBQUEsRUFHQSxlQUFlLElBQTZCO0FBQzFDLFVBQU0sT0FBTyxVQUFVLFFBQVE7QUFDL0IsVUFBTSxNQUFNLEtBQUssS0FBSyxPQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLFFBQUksQ0FBQyxJQUFLLFFBQU87QUFFakIsUUFBSSxTQUFTLElBQUksU0FBUyxLQUFLO0FBQy9CLGNBQVUsU0FBUyxJQUFJO0FBQ3ZCLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUlBLGdCQUFnQixPQUE4QjtBQUM1QyxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxzQkFBc0I7QUFDeEQsVUFBSSxDQUFDLEtBQU0sUUFBTyxDQUFDO0FBQ25CLFlBQU0sY0FBNkIsS0FBSyxNQUFNLElBQUk7QUFDbEQsYUFBTyxZQUFZLE9BQU8sU0FBTyxJQUFJLFVBQVUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUztBQUFBLElBQ2hHLFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSxnQ0FBZ0MsS0FBSztBQUNuRCxhQUFPLENBQUM7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBRUEsZUFBZSxTQUE2RDtBQUMxRSxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxzQkFBc0I7QUFDeEQsWUFBTSxXQUEwQixPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUMzRCxZQUFNLGFBQTBCO0FBQUEsUUFDOUIsR0FBRztBQUFBLFFBQ0gsSUFBSSxLQUFLLElBQUksRUFBRSxTQUFTLElBQUksS0FBSyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFBQSxRQUNsRSxXQUFXLEtBQUssSUFBSTtBQUFBLFFBQ3BCLFVBQVU7QUFBQSxNQUNaO0FBQ0EsZUFBUyxLQUFLLFVBQVU7QUFDeEIsbUJBQWEsUUFBUSx3QkFBd0IsS0FBSyxVQUFVLFFBQVEsQ0FBQztBQUNyRSxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0sOEJBQThCLEtBQUs7QUFDakQsWUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFFQSxrQkFBa0IsSUFBWSxTQUEwQztBQUN0RSxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxzQkFBc0I7QUFDeEQsVUFBSSxDQUFDLEtBQU0sUUFBTztBQUNsQixZQUFNLFdBQTBCLEtBQUssTUFBTSxJQUFJO0FBQy9DLFlBQU0sVUFBVSxTQUFTLEtBQUssT0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM5QyxVQUFJLENBQUMsUUFBUyxRQUFPO0FBRXJCLGNBQVEsVUFBVTtBQUNsQixjQUFRLFdBQVc7QUFDbkIsbUJBQWEsUUFBUSx3QkFBd0IsS0FBSyxVQUFVLFFBQVEsQ0FBQztBQUNyRSxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0sZ0NBQWdDLEtBQUs7QUFDbkQsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxrQkFBa0IsSUFBcUI7QUFDckMsUUFBSTtBQUNGLFlBQU0sT0FBTyxhQUFhLFFBQVEsc0JBQXNCO0FBQ3hELFVBQUksQ0FBQyxLQUFNLFFBQU87QUFDbEIsWUFBTSxXQUEwQixLQUFLLE1BQU0sSUFBSTtBQUMvQyxZQUFNLFdBQVcsU0FBUyxPQUFPLE9BQUssRUFBRSxPQUFPLEVBQUU7QUFDakQsVUFBSSxTQUFTLFdBQVcsU0FBUyxPQUFRLFFBQU87QUFDaEQsbUJBQWEsUUFBUSx3QkFBd0IsS0FBSyxVQUFVLFFBQVEsQ0FBQztBQUNyRSxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0sZ0NBQWdDLEtBQUs7QUFDbkQsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUlBLFlBQVksT0FBMEI7QUFDcEMsUUFBSTtBQUNGLFlBQU0sT0FBTyxhQUFhLFFBQVEsaUJBQWlCO0FBQ25ELFVBQUksQ0FBQyxLQUFNLFFBQU8sQ0FBQztBQUNuQixZQUFNLGNBQXlCLEtBQUssTUFBTSxJQUFJO0FBQzlDLGFBQU8sWUFBWSxPQUFPLE9BQUssRUFBRSxVQUFVLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVM7QUFBQSxJQUM1RixTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0sMkJBQTJCLEtBQUs7QUFDOUMsYUFBTyxDQUFDO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFdBQVcsU0FBaUU7QUFDMUUsUUFBSTtBQUNGLFlBQU0sT0FBTyxhQUFhLFFBQVEsaUJBQWlCO0FBQ25ELFlBQU0sV0FBc0IsT0FBTyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDdkQsWUFBTSxhQUFzQjtBQUFBLFFBQzFCLEdBQUc7QUFBQSxRQUNILElBQUksS0FBSyxJQUFJLEVBQUUsU0FBUyxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDbEUsV0FBVyxLQUFLLElBQUk7QUFBQSxRQUNwQixVQUFVO0FBQUEsUUFDVixTQUFTLENBQUM7QUFBQSxNQUNaO0FBQ0EsZUFBUyxLQUFLLFVBQVU7QUFDeEIsbUJBQWEsUUFBUSxtQkFBbUIsS0FBSyxVQUFVLFFBQVEsQ0FBQztBQUNoRSxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0seUJBQXlCLEtBQUs7QUFDNUMsWUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFFQSxjQUFjLElBQVksU0FBc0M7QUFDOUQsUUFBSTtBQUNGLFlBQU0sT0FBTyxhQUFhLFFBQVEsaUJBQWlCO0FBQ25ELFVBQUksQ0FBQyxLQUFNLFFBQU87QUFDbEIsWUFBTSxXQUFzQixLQUFLLE1BQU0sSUFBSTtBQUMzQyxZQUFNLFVBQVUsU0FBUyxLQUFLLE9BQUssRUFBRSxPQUFPLEVBQUU7QUFDOUMsVUFBSSxDQUFDLFFBQVMsUUFBTztBQUVyQixjQUFRLFVBQVU7QUFDbEIsY0FBUSxXQUFXO0FBQ25CLG1CQUFhLFFBQVEsbUJBQW1CLEtBQUssVUFBVSxRQUFRLENBQUM7QUFDaEUsYUFBTztBQUFBLElBQ1QsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLDJCQUEyQixLQUFLO0FBQzlDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsY0FBYyxJQUFxQjtBQUNqQyxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxpQkFBaUI7QUFDbkQsVUFBSSxDQUFDLEtBQU0sUUFBTztBQUNsQixZQUFNLFdBQXNCLEtBQUssTUFBTSxJQUFJO0FBQzNDLFlBQU0sV0FBVyxTQUFTLE9BQU8sT0FBSyxFQUFFLE9BQU8sRUFBRTtBQUNqRCxVQUFJLFNBQVMsV0FBVyxTQUFTLE9BQVEsUUFBTztBQUNoRCxtQkFBYSxRQUFRLG1CQUFtQixLQUFLLFVBQVUsUUFBUSxDQUFDO0FBQ2hFLGFBQU87QUFBQSxJQUNULFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSwyQkFBMkIsS0FBSztBQUM5QyxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGdCQUFnQixXQUFtQixPQUF5RTtBQUMxRyxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxpQkFBaUI7QUFDbkQsVUFBSSxDQUFDLEtBQU0sUUFBTztBQUNsQixZQUFNLFdBQXNCLEtBQUssTUFBTSxJQUFJO0FBQzNDLFlBQU0sVUFBVSxTQUFTLEtBQUssT0FBSyxFQUFFLE9BQU8sU0FBUztBQUNyRCxVQUFJLENBQUMsUUFBUyxRQUFPO0FBRXJCLFlBQU0sV0FBeUI7QUFBQSxRQUM3QixHQUFHO0FBQUEsUUFDSCxJQUFJLEtBQUssSUFBSSxFQUFFLFNBQVMsSUFBSSxLQUFLLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUFBLFFBQ2xFLFdBQVcsS0FBSyxJQUFJO0FBQUEsUUFDcEIsVUFBVTtBQUFBLE1BQ1o7QUFDQSxjQUFRLFFBQVEsS0FBSyxRQUFRO0FBQzdCLG1CQUFhLFFBQVEsbUJBQW1CLEtBQUssVUFBVSxRQUFRLENBQUM7QUFDaEUsYUFBTztBQUFBLElBQ1QsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLCtCQUErQixLQUFLO0FBQ2xELGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsbUJBQW1CLFdBQW1CLFNBQWlCLFNBQTJDO0FBQ2hHLFFBQUk7QUFDRixZQUFNLE9BQU8sYUFBYSxRQUFRLGlCQUFpQjtBQUNuRCxVQUFJLENBQUMsS0FBTSxRQUFPO0FBQ2xCLFlBQU0sV0FBc0IsS0FBSyxNQUFNLElBQUk7QUFDM0MsWUFBTSxVQUFVLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxTQUFTO0FBQ3JELFVBQUksQ0FBQyxRQUFTLFFBQU87QUFFckIsWUFBTSxRQUFRLFFBQVEsUUFBUSxLQUFLLE9BQUssRUFBRSxPQUFPLE9BQU87QUFDeEQsVUFBSSxDQUFDLE1BQU8sUUFBTztBQUVuQixZQUFNLFVBQVU7QUFDaEIsWUFBTSxXQUFXO0FBQ2pCLG1CQUFhLFFBQVEsbUJBQW1CLEtBQUssVUFBVSxRQUFRLENBQUM7QUFDaEUsYUFBTztBQUFBLElBQ1QsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLGlDQUFpQyxLQUFLO0FBQ3BELGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsbUJBQW1CLFdBQW1CLFNBQTBCO0FBQzlELFFBQUk7QUFDRixZQUFNLE9BQU8sYUFBYSxRQUFRLGlCQUFpQjtBQUNuRCxVQUFJLENBQUMsS0FBTSxRQUFPO0FBQ2xCLFlBQU0sV0FBc0IsS0FBSyxNQUFNLElBQUk7QUFDM0MsWUFBTSxVQUFVLFNBQVMsS0FBSyxPQUFLLEVBQUUsT0FBTyxTQUFTO0FBQ3JELFVBQUksQ0FBQyxRQUFTLFFBQU87QUFFckIsWUFBTSxXQUFXLFFBQVEsUUFBUSxPQUFPLE9BQUssRUFBRSxPQUFPLE9BQU87QUFDN0QsVUFBSSxTQUFTLFdBQVcsUUFBUSxRQUFRLE9BQVEsUUFBTztBQUN2RCxjQUFRLFVBQVU7QUFDbEIsbUJBQWEsUUFBUSxtQkFBbUIsS0FBSyxVQUFVLFFBQVEsQ0FBQztBQUNoRSxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0saUNBQWlDLEtBQUs7QUFDcEQsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUlBLGlCQUFpQixTQUFpQixZQUE0QjtBQUM1RCxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxzQkFBc0I7QUFDeEQsVUFBSSxDQUFDLEtBQU0sUUFBTyxDQUFDO0FBQ25CLFlBQU0sbUJBQW1DLEtBQUssTUFBTSxJQUFJO0FBRXhELGFBQU8saUJBQ0osT0FBTyxPQUFLLEVBQUUsZUFBZSxNQUFNLEVBQ25DLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUztBQUFBLElBQzdDLFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSxnQ0FBZ0MsS0FBSztBQUNuRCxhQUFPLENBQUM7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBRUEsZ0JBQWdCLGNBQStFO0FBQzdGLFFBQUk7QUFDRixZQUFNLE9BQU8sYUFBYSxRQUFRLHNCQUFzQjtBQUN4RCxZQUFNLGdCQUFnQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQztBQUNqRSxZQUFNLGtCQUFnQztBQUFBLFFBQ3BDLEdBQUc7QUFBQSxRQUNILElBQUksS0FBSyxJQUFJLEVBQUUsU0FBUyxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDbEUsV0FBVyxLQUFLLElBQUk7QUFBQSxRQUNwQixRQUFRO0FBQUEsTUFDVjtBQUNBLG9CQUFjLEtBQUssZUFBZTtBQUNsQyxtQkFBYSxRQUFRLHdCQUF3QixLQUFLLFVBQVUsYUFBYSxDQUFDO0FBQzFFLGFBQU87QUFBQSxJQUNULFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSw4QkFBOEIsS0FBSztBQUNqRCxZQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLHVCQUF1QixJQUFxQjtBQUMxQyxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxzQkFBc0I7QUFDeEQsVUFBSSxDQUFDLEtBQU0sUUFBTztBQUNsQixZQUFNLGdCQUFnQyxLQUFLLE1BQU0sSUFBSTtBQUNyRCxZQUFNLGVBQWUsY0FBYyxLQUFLLE9BQUssRUFBRSxPQUFPLEVBQUU7QUFDeEQsVUFBSSxDQUFDLGFBQWMsUUFBTztBQUUxQixtQkFBYSxTQUFTO0FBQ3RCLG1CQUFhLFFBQVEsd0JBQXdCLEtBQUssVUFBVSxhQUFhLENBQUM7QUFDMUUsYUFBTztBQUFBLElBQ1QsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLHVDQUF1QyxLQUFLO0FBQzFELGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsMkJBQTJCLFNBQWlCLFlBQXFCO0FBQy9ELFFBQUk7QUFDRixZQUFNLE9BQU8sYUFBYSxRQUFRLHNCQUFzQjtBQUN4RCxVQUFJLENBQUMsS0FBTSxRQUFPO0FBQ2xCLFlBQU0sZ0JBQWdDLEtBQUssTUFBTSxJQUFJO0FBRXJELG9CQUFjLFFBQVEsT0FBSztBQUN6QixZQUFJLEVBQUUsZUFBZSxRQUFRO0FBQzNCLFlBQUUsU0FBUztBQUFBLFFBQ2I7QUFBQSxNQUNGLENBQUM7QUFFRCxtQkFBYSxRQUFRLHdCQUF3QixLQUFLLFVBQVUsYUFBYSxDQUFDO0FBQzFFLGFBQU87QUFBQSxJQUNULFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSw0Q0FBNEMsS0FBSztBQUMvRCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLG1CQUFtQixJQUFxQjtBQUN0QyxRQUFJO0FBQ0YsWUFBTSxPQUFPLGFBQWEsUUFBUSxzQkFBc0I7QUFDeEQsVUFBSSxDQUFDLEtBQU0sUUFBTztBQUNsQixZQUFNLGdCQUFnQyxLQUFLLE1BQU0sSUFBSTtBQUNyRCxZQUFNLFdBQVcsY0FBYyxPQUFPLE9BQUssRUFBRSxPQUFPLEVBQUU7QUFDdEQsVUFBSSxTQUFTLFdBQVcsY0FBYyxPQUFRLFFBQU87QUFDckQsbUJBQWEsUUFBUSx3QkFBd0IsS0FBSyxVQUFVLFFBQVEsQ0FBQztBQUNyRSxhQUFPO0FBQUEsSUFDVCxTQUFTLE9BQU87QUFDZCxjQUFRLE1BQU0sZ0NBQWdDLEtBQUs7QUFDbkQsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFFQSwyQkFBMkIsU0FBaUIsWUFBb0I7QUFDOUQsUUFBSTtBQUNGLFlBQU0sZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU07QUFDbEQsYUFBTyxjQUFjLE9BQU8sT0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFO0FBQUEsSUFDOUMsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLCtCQUErQixLQUFLO0FBQ2xELGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsc0JBQXNCLFNBQWlCLFlBQXFCO0FBQzFELFFBQUk7QUFDRixZQUFNLE9BQU8sYUFBYSxRQUFRLHNCQUFzQjtBQUN4RCxVQUFJLENBQUMsS0FBTSxRQUFPO0FBQ2xCLFlBQU0sZ0JBQWdDLEtBQUssTUFBTSxJQUFJO0FBRXJELFlBQU0sV0FBVyxjQUFjLE9BQU8sT0FBSyxFQUFFLGVBQWUsTUFBTTtBQUNsRSxtQkFBYSxRQUFRLHdCQUF3QixLQUFLLFVBQVUsUUFBUSxDQUFDO0FBQ3JFLGFBQU87QUFBQSxJQUNULFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSxpQ0FBaUMsS0FBSztBQUNwRCxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRjsiLCJuYW1lcyI6W119