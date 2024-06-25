export interface Answer {
  id: number;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  correctAnswerId: number;
}
export const questionsData: Question[] = [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: [
        { id: 1, text: "Berlin" },
        { id: 2, text: "Madrid" },
        { id: 3, text: "Paris" },
        { id: 4, text: "Lisbon" }
      ],
      correctAnswerId: 3
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { id: 1, text: "Earth" },
        { id: 2, text: "Mars" },
        { id: 3, text: "Jupiter" },
        { id: 4, text: "Saturn" }
      ],
      correctAnswerId: 2
    },
    {
      id: 3,
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        { id: 1, text: "Harper Lee" },
        { id: 2, text: "Mark Twain" },
        { id: 3, text: "J.K. Rowling" },
        { id: 4, text: "Ernest Hemingway" }
      ],
      correctAnswerId: 1
    },
    {
      id: 4,
      question: "What is the largest mammal in the world?",
      answers: [
        { id: 1, text: "Elephant" },
        { id: 2, text: "Blue Whale" },
        { id: 3, text: "Giraffe" },
        { id: 4, text: "Hippopotamus" }
      ],
      correctAnswerId: 2
    },
    {
      id: 5,
      question: "Which element has the chemical symbol O?",
      answers: [
        { id: 1, text: "Gold" },
        { id: 2, text: "Oxygen" },
        { id: 3, text: "Osmium" },
        { id: 4, text: "Oganesson" }
      ],
      correctAnswerId: 2
    },
    {
      id: 6,
      question: "Who painted the Mona Lisa?",
      answers: [
        { id: 1, text: "Vincent van Gogh" },
        { id: 2, text: "Pablo Picasso" },
        { id: 3, text: "Leonardo da Vinci" },
        { id: 4, text: "Claude Monet" }
      ],
      correctAnswerId: 3
    },
    {
      id: 7,
      question: "What is the smallest prime number?",
      answers: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" },
        { id: 4, text: "5" }
      ],
      correctAnswerId: 2
    },
    {
      id: 8,
      question: "In which year did the Titanic sink?",
      answers: [
        { id: 1, text: "1905" },
        { id: 2, text: "1910" },
        { id: 3, text: "1912" },
        { id: 4, text: "1915" }
      ],
      correctAnswerId: 3
    },
    {
      id: 9,
      question: "Which language is primarily spoken in Brazil?",
      answers: [
        { id: 1, text: "Spanish" },
        { id: 2, text: "Portuguese" },
        { id: 3, text: "French" },
        { id: 4, text: "English" }
      ],
      correctAnswerId: 2
    },
    {
      id: 10,
      question: "What is the main ingredient in guacamole?",
      answers: [
        { id: 1, text: "Tomato" },
        { id: 2, text: "Avocado" },
        { id: 3, text: "Onion" },
        { id: 4, text: "Cucumber" }
      ],
      correctAnswerId: 2
    },
    {
      id: 11,
      question: "Who is the author of '1984'?",
      answers: [
        { id: 1, text: "George Orwell" },
        { id: 2, text: "Aldous Huxley" },
        { id: 3, text: "Ray Bradbury" },
        { id: 4, text: "H.G. Wells" }
      ],
      correctAnswerId: 1
    },
    {
      id: 12,
      question: "What is the square root of 64?",
      answers: [
        { id: 1, text: "6" },
        { id: 2, text: "7" },
        { id: 3, text: "8" },
        { id: 4, text: "9" }
      ],
      correctAnswerId: 3
    },
    {
      id: 13,
      question: "What is the chemical symbol for water?",
      answers: [
        { id: 1, text: "H2O" },
        { id: 2, text: "O2" },
        { id: 3, text: "CO2" },
        { id: 4, text: "HO" }
      ],
      correctAnswerId: 1
    },
    {
      id: 14,
      question: "Who was the first person to walk on the moon?",
      answers: [
        { id: 1, text: "Yuri Gagarin" },
        { id: 2, text: "Buzz Aldrin" },
        { id: 3, text: "Neil Armstrong" },
        { id: 4, text: "Michael Collins" }
      ],
      correctAnswerId: 3
    },
    {
      id: 15,
      question: "What is the largest continent on Earth?",
      answers: [
        { id: 1, text: "Africa" },
        { id: 2, text: "Asia" },
        { id: 3, text: "Europe" },
        { id: 4, text: "North America" }
      ],
      correctAnswerId: 2
    },
    {
      id: 16,
      question: "Who is known as the Father of Computers?",
      answers: [
        { id: 1, text: "Alan Turing" },
        { id: 2, text: "Bill Gates" },
        { id: 3, text: "Charles Babbage" },
        { id: 4, text: "Steve Jobs" }
      ],
      correctAnswerId: 3
    },
    {
      id: 17,
      question: "What is the tallest mountain in the world?",
      answers: [
        { id: 1, text: "K2" },
        { id: 2, text: "Kangchenjunga" },
        { id: 3, text: "Mount Everest" },
        { id: 4, text: "Lhotse" }
      ],
      correctAnswerId: 3
    },
    {
      id: 18,
      question: "Which planet is closest to the sun?",
      answers: [
        { id: 1, text: "Venus" },
        { id: 2, text: "Mars" },
        { id: 3, text: "Mercury" },
        { id: 4, text: "Earth" }
      ],
      correctAnswerId: 3
    },
    {
      id: 19,
      question: "What is the smallest country in the world?",
      answers: [
        { id: 1, text: "Monaco" },
        { id: 2, text: "Vatican City" },
        { id: 3, text: "San Marino" },
        { id: 4, text: "Liechtenstein" }
      ],
      correctAnswerId: 2
    },
    {
      id: 20,
      question: "Which ocean is the largest?",
      answers: [
        { id: 1, text: "Atlantic Ocean" },
        { id: 2, text: "Indian Ocean" },
        { id: 3, text: "Arctic Ocean" },
        { id: 4, text: "Pacific Ocean" }
      ],
      correctAnswerId: 4
    }
  ];